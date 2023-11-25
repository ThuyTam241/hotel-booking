import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { hotelInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";

const NewHotel = () => {
  const location = useLocation();
  const path = location.pathname.split("new/").slice(-1);
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const { data: hotel } = useFetch(`/hotels/find/${path[0]}`);

  const { data, loading } = useFetch("/rooms");

  useEffect(() => {
    if (hotel) {
      setInfo(hotel);
    }
  }, [hotel]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("folder", "hotel-booking");
          data.append("upload_preset", "hotel-booking");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dactech/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };

      if (newhotel._id) {
        await axios.put(`/hotels/${newhotel._id}`, newhotel);
      } else {
        await axios.post("/hotels", newhotel);
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
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="right">
          {(hotel.photos && hotel.photos.length) ? (
                <ImageList
                  sx={{ height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {hotel.photos?.map((photo) => (
                    <ImageListItem key={photo}>
                      <img
                        srcSet={`${photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${photo}?w=164&h=164&fit=crop&auto=format`}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              ) : (
                <div>No images</div>
              )}
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    value={info[input.id]}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
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

export default NewHotel;
