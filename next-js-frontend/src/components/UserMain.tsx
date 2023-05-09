import { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const id = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const init = {
    name: "",
    email: "",
    userName: "",
    phone: "",
    password: "",
    point: "",
    userType: "",
    img: [],
    createdAt: "",
    token: token,
  };
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState(init);
  const [dataConst, setDataConst] = useState(init);

  useEffect(() => {
    if (id && token) {
      axios
        .post(`http://localhost:8080/api/user?id=${id}`, {
          token: token,
        })
        .then((res) => {
          setData(res.data.result);
          setDataConst(res.data.result);
          console.log(res.data.result);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = async () => {
    axios
      .put(`http://localhost:8080/api/user?id=${id}`, data)
      .then((res) => (res.data.status ? alert("amjilttai") : ""))
      .catch((err) => console.log(err));

    localStorage.setItem("name", data.userName);

    axios
      .post(`http://localhost:8080/api/user?id=${id}`, {
        token: token,
      })
      .then((res) => {
        setDataConst(res.data.result);
      })
      .catch((err) => console.log(err));

    setIsEditing(false);
  };

  return (
    <div className="bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-2">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          disabled={!isEditing}
          className={
            isEditing
              ? "w-2/4 border-2 border-gray-400 p-2 rounded-lg text-black"
              : "w-2/4 border-2 border-gray-400 p-2 rounded-lg"
          }
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userName" className="block font-bold mb-2">
          Username:
        </label>
        <input
          id="userName"
          type="text"
          value={data.userName}
          onChange={(e) => setData({ ...data, userName: e.target.value })}
          disabled={!isEditing}
          className={
            isEditing
              ? "w-2/4 border-2 border-gray-400 p-2 rounded-lg text-black"
              : "w-2/4 border-2 border-gray-400 p-2 rounded-lg"
          }
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-2">
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          disabled={!isEditing}
          className={
            isEditing
              ? "w-2/4 border-2 border-gray-400 p-2 rounded-lg text-black"
              : "w-2/4 border-2 border-gray-400 p-2 rounded-lg"
          }
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-bold mb-2">
          Phone:
        </label>
        <input
          id="phone"
          type="number"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          disabled={!isEditing}
          className={
            isEditing
              ? "w-2/4 border-2 border-gray-400 p-2 rounded-lg text-black"
              : "w-2/4 border-2 border-gray-400 p-2 rounded-lg"
          }
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-bold mb-2">
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          disabled={!isEditing}
          className={
            isEditing
              ? "w-2/4 border-2 border-gray-400 p-2 rounded-lg text-black"
              : "w-2/4 border-2 border-gray-400 p-2 rounded-lg"
          }
        />
      </div>
      <div className="mb-4">
        <label htmlFor="point" className="block font-bold mb-2">
          Point:
        </label>
        <span>{data.point}</span>
      </div>
      <div className="mb-4">
        <label htmlFor="userType" className="block font-bold mb-2">
          User Type:
        </label>
        <input
          id="userType"
          type="text"
          value={data.userType}
          disabled={!isEditing}
          className={
            isEditing
              ? "w-2/4 border-2 border-gray-400 p-2 rounded-lg text-black"
              : "w-2/4 border-2 border-gray-400 p-2 rounded-lg"
          }
        />
      </div>
      <div className="mb-4">
        <label htmlFor="img" className="block font-bold mb-2">
          Image:
        </label>
        <div className="flex flex-wrap">
          {/* {data.img.map((url, i) => (
            <img
              key={i}
              src={url}
              alt="User avatar"
              className="w-16 h-16 object-cover rounded-2/4 mr-2 mb-2"
            />
          ))} */}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="createdAt" className="block font-bold mb-2">
          Created At:
        </label>
        <span>{data.createdAt}</span>
      </div>
      <div className="flex justify-center">
        {isEditing ? (
          <>
            <button
              onClick={() => {
                setData(dataConst);
                setIsEditing(false);
              }}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSaveChanges()}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </>
        ) : (
          <button
            onClick={handleEdit}
            className="sda hover:bg-gray-700 hover:border-gray-700 hover:text-gray-500 py-2 px-4 rounded"
          >
            <div className="yma">
              <span className="spam">Edit</span>
              {/* <span className="spam">dit</span> */}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
