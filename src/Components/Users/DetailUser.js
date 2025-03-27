import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const DetailUser = () => {
    const { id } = useParams(); // Lấy tham số động từ URL
    const [user, setUser] = useState({});

    useEffect(() => {

        const fetchData = async () => {
            try {
                let res = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(res && res.data && res.data.data ? res.data.data : {});
            }
            catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        fetchData();
    }, [id]);

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/user");
    }

    return (
        < div className="flex flex-col bg-gray-800 rounded-lg p-6 w-full">
            <div className="flex flex-row ">
                <div className="rounded-lg">
                    <img className="rounded-lg" src={user.avatar} alt="avatar of user" />
                </div>
                <div className="flex flex-col p-6 text-left text-2xl font-bold">
                    <div>
                        User ID: {user.id}
                    </div>
                    <div>
                        User name: {user.first_name} {user.last_name}
                    </div>
                    <div>
                        User Email: {user.email}
                    </div>
                </div>
            </div>
            <div >
                <button className="font-semibold border-gray-500 border-2 rounded-lg m-2 px-2 hover:bg-gray-600" type="button"
                    onClick={handleBack}
                >
                    Back
                </button>
            </div>
        </div >
    )
}

export default DetailUser;