import Routers from '../../routers/Routers';
import SideNav from '../SideNav/SideNav';


const Layout = () => {
    return (
        <>
            <SideNav />
            <div>
                <Routers />
            </div>
        </>
    )
}

export default Layout