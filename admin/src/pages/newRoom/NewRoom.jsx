import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("new/").slice(-1);
  const { data: fetchedRoom } = useFetch(`/rooms/${path[0]}`);

  const { data, loading } = useFetch("/hotels");

  useEffect(() => {
    if (fetchedRoom) {
      setInfo(fetchedRoom);
      if (fetchedRoom.roomNumbers?.length) {
        setRooms([...fetchedRoom.roomNumbers.map((r) => r.number)]);
      }
    }
  }, [fetchedRoom]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.map((room) => ({ number: room }));
    try {
      if (info._id) {
        await axios.put(`/rooms/${info._id}`, { ...info, roomNumbers });
      } else {
        await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    value={info[input.id]}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value.split(","))}
                  value={rooms.length ? rooms.join(",") : ""}
                  placeholder="give comma between room numbers."
                />
              </div>
              <div className="formInput">
                <label>Choose a hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
