import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import MyOrder from '../Dashboarditems/MyOrder';
import DrawingSpace from './DrawingSpace';
import Review from '../Dashboarditems/Review';
import MakeAdmin from '../Dashboarditems/MakeAdmin';
import Pay from '../Dashboarditems/Pay';
import ManageOrder from '../Dashboarditems/ManageOrder';
import ManageProducts from '../Dashboarditems/ManageProducts';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import AddProducts from '../Dashboarditems/AddProducts';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../../AdminRoute/AdminRoute';


const tdnone = {
  textDecoration: 'none',
  border: '1px solid grey',
  padding: '5px 15px',
  width: '100%',
  textAlign: 'center',
  marginTopo: "0px"



}
const itemPedding = {
  paddingRight: '10px'
}




const drawerWidth = 240;

function Dashboard(props) {
  const { admin } = useAuth();


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const drawer = (
    <div style={{ backgroundColor: '#f5f8ff', height: '100%' }}>


      <List>

        <ListItem >
          <ArrowLeftIcon sx={{ fontSize: '30px' }} color='primary' />
          <NavLink style={tdnone} to='/'> Back to Home</NavLink>
        </ListItem>

        {!admin && <Box>
          <ListItem style={itemPedding} disablePadding>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "Green"
            }}
              style={tdnone} to={`${url}`}>My Profile</NavLink>
          </ListItem>

          <ListItem style={itemPedding} disablePadding>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "blue"
            }} style={tdnone} to={`${url}/myorder`}>My orders</NavLink>
          </ListItem>

          <ListItem style={itemPedding} disablePadding>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "blue"
            }} style={tdnone} to={`${url}/review`}>Reviw</NavLink>
          </ListItem>

          <ListItem style={itemPedding} disablePadding>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "blue"
            }} style={tdnone} to={`${url}/pay`}>Pay</NavLink>
          </ListItem >
        </Box>
        }


        {admin &&  <Box>
        
          <ListItem style={itemPedding} disablePadding>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "blue"
            }} style={tdnone} to={`${url}/makeadmin`}>Make Admin</NavLink>
          </ListItem>

          <ListItem style={itemPedding} disablePadding>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "blue"
            }} style={tdnone} to={`${url}/manageorder`}>Manage Order</NavLink>
          </ListItem>

          <ListItem style={itemPedding} disablePadding>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "blue"
            }} style={tdnone} to={`${url}/manageproduct`}>Manage Products</NavLink>
          </ListItem>

          <ListItem style={itemPedding} disablePadding>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "blue"
            }} style={tdnone} to={`${url}/addproduct`}>Add Products</NavLink>
          </ListItem>
        </Box>
            
            
            }
      </List>




    </div >
  );



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ mx: 'auto' }} variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          style={{ backgroundColor: '#f5f8ff' }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer

          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>

          <Route exact path={`${path}/`}>
            <DrawingSpace></DrawingSpace>
          </Route>
          <Route path={`${path}/myorder`}>
            <MyOrder></MyOrder>
          </Route>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/manageorder`}>
            <ManageOrder></ManageOrder>
          </Route>

          <Route path={`${path}/manageproduct`}>
            <ManageProducts></ManageProducts>
          </Route>

          <Route path={`${path}/addproduct`}>
            <AddProducts></AddProducts>
          </Route>

        </Switch>


      </Box>




    </Box>
  );
}



export default Dashboard;

// 




