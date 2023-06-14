import UsersItems from "./UsersItems";

export default function UsersList(props) {
    return (
        <table className="table table-stripped">
            <thead>
                <th>No.</th>
                <th>Name</th>
                <th>phone</th>
            </thead>
            <tbody>
                {props.data.map((user, index) => (
                    <UsersItems no={index + 1} name={user.name} phone={user.phone}/>
                ))}
            </tbody>
        </table>
    )
}