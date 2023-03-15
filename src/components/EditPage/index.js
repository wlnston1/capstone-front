import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditPage() {
  const { userId } = useParams();
  const [user, setUser] = useState({userName: "", email: "", experience: "", age: "", phone: "", country: ""});
  const [oldUser, setOldUser] = useState(null);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((oldUser) => ({
      ...oldUser,
      [name]: value
    }));
  };

  const loadUser = async () => {
    const response = await fetch(`http://localhost:8888/api/contact/${userId}`);
    const data = await response.json();
    setOldUser(data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
axios.put(`http://localhost:8888/api/contact/${userId}`, (user))
      .then((response) => console.log(response.data))
      .then((data) => {
          setUser(data);
          console.log("Success:", data);
      })
      .catch((error) => console.error(error));
  };

  let content;
  if (userId == 0) {
    content = <div> no user is being edited </div>;
  } else {
    content = (
      <div>
        <div className="original">
            <h4>Original User</h4>
            <div>
                <p>Username: {oldUser?.userName}</p>
                <p>Email: {oldUser?.email}</p>
                <p>Age: {oldUser?.age}</p>
                <p>Phone: {oldUser?.phone}</p>
                <p>Experience: {oldUser?.experience}</p>
                <p>Country: {oldUser?.country}</p>
            </div>
        </div>
        <hr></hr>
        <h4>Update User</h4>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              name="userName"
              value={user?.userName}
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={user?.email}
              onChange={handleInputChange}
            />
          </div>

        
 <div className="">
            <label>Age:</label>
            <input
              className="form-control"
              type="text"
              name="age"
              value={user?.age}
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label>Phone:</label>
            <input
              className="form-control"
              value={user?.phone}
              name="phone"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label>Experience:</label>
            <input
              className="form-control"
              value={user?.experience}
              name="experience"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label>Country:</label>
            <input
              value={user?.country}
              name="country"
              className="form-control"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update User</button>
        </form>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default EditPage;