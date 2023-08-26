// NavLink is an alternative to the "Link" element that has additional functionality. In
// NavLink, the className prop can take a function that can return the className that
// should be added to the element. The argument isActive can be added to the function
// which is a boolean variable that is true if the link is currently active and false if 
// the link is not currently active. This helps with styling because you can apply a 
// certain syle to a link when the user is currently on the page that the link leads to.
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;