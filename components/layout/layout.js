import React, { useState } from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import { Menu } from '@mui/icons-material'

function Layout(props) {
    const [drawerState, setDrawerState] = useState(false);
    const toggleDrawer = () => setDrawerState(prevState => !prevState)

    return (
        <>
            <Box>
                <AppBar position='sticky' >
                    <Toolbar>
                        <IconButton onClick={toggleDrawer} size="large" edge="start" sx={{ mr: 2 }}>
                            <Menu />
                        </IconButton>

                        <Drawer
                            anchor='left'
                            open={drawerState}
                            variant="temporary"
                            onClose={toggleDrawer}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            <Box>
                                <List>
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={<Link href="/">HOME</Link>} />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <ArticleIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={<Link href="/events">EVENTS</Link>} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>

                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            NIm events
                        </Typography>

                        <Box sx={{ display: "flex" }}>
                            {
                                [{ name: "HOME", href: "/" }, { name: "EVENTS", href: "/events" }]
                                    .map((el, i) =>
                                        <Button key={i} variant='text'>
                                            <Link href={el.href}>{el.name}</Link>
                                        </Button>
                                    )
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout

