import {AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useContext} from "react";
import {UIContext} from "../../context/ui";


export const NavBar = () => {

    const {openSideMenu} = useContext(UIContext)

  return (
    <AppBar position='sticky' elevation={0} >
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6">Todo App</Typography>
      </Toolbar>
    </AppBar>
  )
}
