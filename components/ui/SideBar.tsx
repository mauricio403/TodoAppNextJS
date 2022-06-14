import Drawer from '@mui/material/Drawer'
import {Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import {useContext} from "react";
import {UIContext} from "../../context/ui";



const menuItems: string[] = ['Home', 'About', 'Contact', 'Login', 'Register']

export const SideBar = () => {

        const {sideMenuOpen, closeSideMenu} = useContext( UIContext );


    return (
        <Drawer anchor="left" open={sideMenuOpen} onClose={() => closeSideMenu()}>
            <Box sx={{
                width:250
            }} >
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">
                        Menu
                    </Typography>
                    <List>
                        {
                            menuItems.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index %2 ? <InboxOutlinedIcon/>:<MailOutlineOutlinedIcon/>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))
                        }
                    </List>
                    <Divider/>
                    <List>
                        {
                            menuItems.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index %2 ? <InboxOutlinedIcon/>:<MailOutlineOutlinedIcon/>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>

            </Box>

        </Drawer>
    )
}
