import React, { Component } from "react";
import UsersItems from "../components/UsersItems";

class UsersList extends Component {

    componentDidMount() {
        this.props.load()
    }

    render(){
        return (
            <table className="table table-stripped">
                <thead>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Phone</th>
                </thead>
                <tbody>
                    { this.props.users.map((user, index) => (
                        <UsersItems no={index + 1} name={user.name} phone={user.phone} />
                    ))}
                </tbody>
            </table>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    load: () => dispatch(loadUser())
})

const mapStateToProps = (state, ownProps) => ({
    users: state.users
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList)  