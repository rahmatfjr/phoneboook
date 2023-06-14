import { Component } from "react";
import UsersForm from "./UsersForm";
import UsersList from "./UsersList";

export default class UsersBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then((data) => {
                this.setState({users: data})
            });
    }

    addUsers = (name, phone) => {
        this.setState(function (state, props) {
            return {
                users: [
                    {
                        name,
                        phone
                    },
                    ...state.users,
                ]
            }
        })
    }

    render() {
        return (
            <div className="container" >
                <div className="card">
                    <div className="card-header">
                        <h1>List User</h1>
                    </div>
                    <div className="card-body">
                        <UsersForm add={this.addUsers} />
                    </div>
                    <UsersList data={this.state.users} />
                    <div className="card-footer">

                    </div>
                </div>
            </div>
        )
    }
}