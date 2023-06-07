import UsersForm from "../containers/UsersForm";
import UsersList from "../containers/UsersList";

export default function UsersBox() {

        return (
            <div className="container" >
                <div className="card">
                    <div className="card-header">
                        <h1>List User</h1>
                    </div>
                    <div className="card-body">
                        <UsersForm />
                    </div>
                    <UsersList  />
                    <div className="card-footer">

                    </div>
                </div>
            </div>
        )
    }