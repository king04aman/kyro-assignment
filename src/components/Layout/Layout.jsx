import Routers from '../../routers/Routers';
import Box from '@mui/material/Box';
import SideNav from '../SideNav/SideNav';
import { styled } from '@mui/material/styles';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


const Layout = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <SideNav />
                <div>
                    <DrawerHeader />
                    <Routers />
                </div>
            </Box>
        </>
    )
}

export default Layout