import { React, useState, useEffect } from "react";
import axios from "axios";
import "../../styles/ListUser.css";
import { useNavigate } from "react-router-dom"
import "../twstyles.css";

const ListUser = () => {

    const [ListUser, setListUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get("https://reqres.in/api/users?page=1");
                console.log(">>> check res: ", res);

                // Cập nhật state
                setListUser(res && res.data && res.data.data ? res.data.data : []);
            }
            catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);

    const navigate = useNavigate();

    const handleClick = (item) => {
        navigate(`/user/${item.id}`);
    }

    return (
        <div className="list-user-container bg-gray-50 p-6 min-h-screen">
            <div className="title text-2xl font-bold text-center mb-4 text-gray-400">
                List User
            </div>
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4">
                {ListUser && ListUser.length > 0 ? (
                    ListUser.map((item, index) => (
                        <div
                            className="child flex justify-between items-center w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-3 mb-2 transition duration-200"
                            key={item.id}
                        >
                            <span className="font-medium text-gray-600">
                                {index + 1}. {item.first_name} {item.last_name}
                            </span>
                            <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={() => handleClick(item)}>
                                Details
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-500 italic">No users available.</div>
                )}
            </div>
        </div>

    )
}

export default ListUser;