import "./single.scss";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";

const Single = () => {
  const location = useLocation();
  const path = location.pathname.split("/").slice(1);
  const { data: user, loading } = useFetch(`/${path.join('/')}`);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <Link to={`/${path[0]}/new/${path[1]}`} style={{ color: "inherit", textDecoration: "none" }}>
                Edit
              </Link>
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={user.img ? user.img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+{user.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {user.city}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{user.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
