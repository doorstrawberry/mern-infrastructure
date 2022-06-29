import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api'

import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage(props) {
    // - Fetch the menuItems from the server via AJAX
    // - When the data comes back, call setMenuItems to save in state
    const [menuItems, setMenuItems] = useState([]);
    // Add state to track the "active" category 
    const [activeCat, setActiveCat] = useState('');

    // Create and initialize the ref to an empty array
    const categoriesRef = useRef([]);

    // Refactor the useEffect below - don't miss the empty []
    useEffect(function () {
        async function getItems() {
            const items = await itemsAPI.getAll();
            setMenuItems(items);
        }
        getItems();
    }, []);

    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const timerRef = useRef();

    useEffect(function () {
        timerRef.current = setInterval(function () {
            // Using a "functional update" is better if computing 
            // the new state value from the current state value
            // https://reactjs.org/docs/hooks-reference.html#functional-updates
            setElapsedSeconds((secs) => secs + 1);
        }, 1000);
        // Return the cleanup component
        return function () {
            clearInterval(timerRef.current);
        };
    }, []);

    useEffect(function () {
        async function getItems() {
            const items = await itemsAPI.getAll();
            categoriesRef.current = items.reduce((cats, item) => {
                const cat = item.category.name;
                return cats.includes(cat) ? cats : [...cats, cat];
            }, []);
            setMenuItems(items);
            setActiveCat(items[0].category.name);
        }
        getItems();
    }, []);

    return (
        <>
            <h1>NewOrderPage</h1>
            <main className="NewOrderPage">
                <aside>
                    <Logo />
                    <CategoryList
                        categories={categoriesRef.current}
                        activeCat={activeCat}
                        setActiveCat={setActiveCat}
                    />
                    <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
                    <UserLogOut user={props.user} setUser={props.setUser} />
                </aside>
                <MenuList
                    menuItems={menuItems.filter(item => item.category.name === activeCat)}
                />
                <OrderDetail />
            </main>
        </>
    );
}