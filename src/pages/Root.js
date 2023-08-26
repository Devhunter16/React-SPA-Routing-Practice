// Importing the Outlet component which marks where the child elements inside of our
// RootLayout wrapper template element should be featured.
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;