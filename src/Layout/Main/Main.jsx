
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default Main;