import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const DetailUser = () => {
    const { id } = useParams(); // Lấy tham số động từ URL
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            setUser(res && res.data && res.data.data ? res.data.data : {});
        }
        fetchData();
    }, []);

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/user");
    }

    return (
        < div >
            <div>
                User ID: {user.id}
            </div>
            <div>
                User name: {user.first_name} {user.last_name}
            </div>
            <div>
                User Email: {user.email}
            </div>
            <div>
                <img src={user.avatar} />
            </div>
            <div>
                <button type="button"
                    onClick={handleBack}
                >
                    Back
                </button>
            </div>
        </div >
    )
}

export default DetailUser;