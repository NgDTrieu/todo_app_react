import React from "react";
import axios from "axios";
import "./ListUser.css";

class ListUser extends React.Component {

    state = {
        ListUser: []
    }

    async componentDidMount() {
        // axios.get("https://reqres.in/api/users?page=2")
        //     .then(res => {
        //         console.log(">>> check res: ", res)
        //     })

        let res = await axios.get("https://reqres.in/api/users?page=2")
        console.log(">>> check res: ", res.data.data)

        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    render() {
        let { ListUser } = this.state;
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
}

export default ListUser;