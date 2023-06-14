export default function UsersItems(props) {
    return(
        <tr>
            <td>{props.no}</td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
        </tr>
    )
}