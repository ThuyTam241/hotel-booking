import "./new.scss";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const New = ({ inputs, title }) => {
  const location = useLocation();
  const path = location.pathname.split("new/").slice(-1);
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const { data: user } = useFetch(`/users/${path[0]}`);

  const [open, setOpen] = useState(false);
  const [snackBarType, setSnackBarType] = useState('success');

  const handleSnackClick = (type) => {
    setOpen(true);
    setSnackBarType(type);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (user) {
      setInfo(user)
    }
  }, [user])


  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("folder", "hotel-booking")
    data.append("upload_preset", "hotel-booking");
    try {
      let newUser = {
        ...info
      };
      if (file) {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dactech/image/upload",
          data
        );
  
        const { url } = uploadRes.data;
        newUser.img = url
      }

      if (newUser._id) {
        await axios.put(`/users/${newUser._id}`, newUser);
      } else {
        await axios.post("/auth/register", newUser);
      }
      handleSnackClick('success')
    } catch (err) {
      handleSnackClick('error');
      console.log(err);
    }
  };

  return (
    <div className="new">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackClose}>
          <Alert onClose={handleSnackClose} severity={snackBarType} sx={{ width: '100%' }}>
            {snackBarType} call!
          </Alert>
        </Snackbar>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : ( info.img ? info.img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg")
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    disabled={input.id == 'password' || input.id == 'username'}
                    value={info[input.id]}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
