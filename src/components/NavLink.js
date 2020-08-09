import React from 'react';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';

function NavList() {
        return (
                <div>
                        {
                                <List>
                                        
                                        <ListItem button component={Link} to='/MyAccount'>
                                                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                                                <ListItemText>MyAccount</ListItemText> 
                                        </ListItem>
                                        <ListItem button component={Link} to = "/Notes">
                                                <ListItemIcon><EventNoteIcon /> </ListItemIcon>
                                                 <ListItemText>Notes</ListItemText> 
                                        </ListItem>
                                        <ListItem button component={Link} to='/Archieve' >
                                                <ListItemIcon><ArchiveIcon /> </ListItemIcon>
                                                 <ListItemText>Archive</ListItemText>
                                        </ListItem>
                                        <ListItem button component={Link} to='/Trash' >
                                                <ListItemIcon><DeleteIcon /> </ListItemIcon>
                                                 <ListItemText>Trash</ListItemText>
                                        </ListItem>
                                        <ListItem button component={Link} to='/Logout' >
                                                <ListItemIcon><ExitToAppIcon /> </ListItemIcon>
                                                 <ListItemText>Logout</ListItemText>
                                        </ListItem>
                                        
                                        
                                </List>}
                </div>
        );
}

export default NavList;