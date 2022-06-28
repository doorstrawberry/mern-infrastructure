import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
    <nav>
        <Link to="/orders">Order History</Link>
        {" | "}
        <Link to="/orders/new">New Order</Link>
        {" | "}
        <div>Welcome, {props.user.name}</div>
    </nav>)
}

export default NavBar