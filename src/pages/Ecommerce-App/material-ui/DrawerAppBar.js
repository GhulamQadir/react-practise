import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Badge } from '@mui/material';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CartContext from '../context';
import CartDrawer from './CartDrawer';

const drawerWidth = 240;
const navItems = ['All', 'Electronics', 'Jewelery', "Men's clothing", "Women's clothing"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartDrawer, setCartDrawer] = useState(false);
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer)

  }
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
        Easy Cart
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem onClick={() => navigate(`/?category=${item.toLowerCase()}`)} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit" onClick={toggleCartDrawer}
          >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartRoundedIcon />
            </Badge>
          </IconButton>
        </Box>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "purple" }} component="nav" position='sticky'>
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
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            Easy Cart
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button color='white' onClick={() => navigate(`/?category=${item.toLowerCase()}`)}>
                {item}
              </Button>
            ))}
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit" onClick={toggleCartDrawer}
            >
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartRoundedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <CartDrawer openDrawer={cartDrawer} closeDrawer={setCartDrawer} />
    </Box>
  );
}

export default DrawerAppBar;
