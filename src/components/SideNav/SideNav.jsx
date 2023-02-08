import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SettingsIcon from '@mui/icons-material/Settings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Logo from '../../logo.png';



const drawerWidth = 250;



const NAV_LINKS = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    url: "/home"
  },
  {
    id: 2,
    name: "Projects",
    icon: <CreditCardIcon />,
    url: "/projects"
  },
  {
    id: 3,
    name: "Dashboard",
    icon: <DashboardIcon />,
    url: "/dashboard"
  },
  {
    id: 4,
    name: "Messages",
    icon: <Badge color="secondary" badgeContent={19}><MailIcon /></Badge>,
    url: "/messages"
  },
  {
    id: 5,
    name: "Documents",
    icon: <ReceiptLongIcon />,
    url: "/documents"
  },
  {
    id: 6,
    name: "Organizations",
    icon: <ApartmentIcon />,
    url: "/organizations"
  },
  {
    id: 7,
    name: "Settings",
    icon: <SettingsIcon />,
    url: "/settings"
  }
]

const settings = ['Dashboard', 'Projects', 'Settings', 'Logout'];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideNav() {
  const [open, setOpen] = React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" open={open} sx={{ background: "white" }}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", flexGrow: 1 }}>
              <Box sx={{ display: 'flex-col', padding: 2 }}>
                <Typography variant="h6" noWrap component="div" color="black">
                  Good Morning, Name
                </Typography>
                <Typography variant="p" component="p" color="gray">
                  April 28, 2022
                </Typography>
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end", alignItems: "center", flexGrow: 1 }}>
                <Button variant="contained" sx={{ background: "#800000", mr: 2 }}> <AddIcon sx={{ mr: 1 }} /> ADD PROJECT</Button>
                <IconButton onClick={(event) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  <Typography variant="p" component="p" color="black" sx={{ paddingLeft: 1 }}>
                    Name
                  </Typography>
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={() => { setAnchorElUser(null) }}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => { setAnchorElUser(null) }}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <img src={Logo} alt="logo" style={{ height: "50px", paddingRight: "20px" }} />
            <IconButton onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          </DrawerHeader>
          <List sx={{ marginTop: 3 }}>
            {NAV_LINKS.map((text, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'block' }} onClick={() => { navigate(`${text.url}`) }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 3.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
}
