import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("new/").slice(-1);
  const { data: fetchedRoom } = useFetch(`/rooms/${path[0]}`);

  const { data, loading } = useFetch("/hotels");

  const [open, setOpen] = useState(false);
  const [snackBarType, setSnackBarType] = useState("success");

  const handleSnackClick = (type) => {
    setOpen(true);
    setSnackBarType(type);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
        await axios.put(`/rooms/${info._id}`, { ...info, roomNumbers }).then(() => handleSnackClick("success"));
      } else {
        await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers }).then(() => handleSnackClick("success"));
      }
    } catch (err) {
      handleSnackClick("error");
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert
          onClose={handleSnackClose}
          severity={snackBarType}
          sx={{ width: "100%" }}
        >
          {snackBarType} call!
        </Alert>
      </Snackbar>
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
                  style={{width: '100%'}}
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  <option value="">No hotel was selected</option>
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
