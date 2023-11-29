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
import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewHotel = () => {
  const location = useLocation();
  const path = location.pathname.split("new/").slice(-1);
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [roomOptions, setRoomOptions] = useState([]);
  const { data: hotel } = useFetch(`/hotels/find/${path[0]}`);

  const { data: fetchedRooms, loading } = useFetch("/rooms");

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
    if (hotel) {
      setInfo(hotel);
    }
    if (hotel && hotel.rooms) {
      const roomOptions = fetchedRooms.map((room) => {
        room.isSelected = !!hotel.rooms.find((_id) => _id == room._id);
        return room;
      })
      setRoomOptions(roomOptions);
    } else {
      setRoomOptions(fetchedRooms)
    }
  }, [hotel, fetchedRooms]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFilesChange = (e) => {
    setFiles(e.target.files)
    const urls = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
    setInfo({...hotel, photos: urls});
  }

  const handleSelect = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    )
    const updatedRoomOptions = roomOptions.map((room) => {
      room.isSelected = !!selectedOptions.find((_id) => _id == room._id);
      return room;
    })
    setRoomOptions(updatedRoomOptions);
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
        rooms: roomOptions.filter(r => r.isSelected),
        photos: list.length ? list : hotel.photos,
      };

      if (newhotel._id) {
        await axios.put(`/hotels/${newhotel._id}`, newhotel).then(() => handleSnackClick("success"));
      } else {
        await axios.post("/hotels", newhotel).then(() => handleSnackClick("success"));
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
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="right">
          {(info.photos && info.photos.length) ? (
                <ImageList
                  sx={{ height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {info.photos?.map((photo) => (
                    <ImageListItem key={photo}>
                      <img
                        srcSet={`${photo}`}
                        src={`${photo}`}
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
                  onChange={handleFilesChange}
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
                    : roomOptions &&
                      roomOptions.map((room) => (
                        <option key={room._id} value={room._id} selected={room.isSelected}>
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
