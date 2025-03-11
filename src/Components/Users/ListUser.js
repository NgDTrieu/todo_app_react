import { React, useState, useEffect } from "react";
import axios from "axios";
import "./ListUser.css";

const ListUser = () => {

    const [ListUser, setListUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get("https://reqres.in/api/users?page=2");
                //console.log(">>> check res: ", res.data.data);

                // Cập nhật state
                setListUser(res && res.data && res.data.data ? res.data.data : []);
            }
            catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="list-user-container">
            <div className="title">
                List User
            </div>
            <div className="Content">
                {ListUser && ListUser.length > 0 &&
                    ListUser.map((item, index) => {
                        return (
                            <div className="child" key={item.id}>
                                {index + 1} - {item.first_name} {item.last_name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListUser;