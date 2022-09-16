import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { yellow, grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const LogoButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[500],
    },
  }));

const LogoTitleButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#000000',
    fontSize: '22px',
}));

const MenuButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: grey[700],
    fontSize: '17px',
    lineHeight: '27px',
    fontWeight: '700',
    fontFamily: 'Open Sans,sans-serif',
    padding: '4px',
    minWidth: '0',
    '&:hover' : {
        color: yellow[500],
    }
    
}));



const Menu = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Stack direction="row">
            <LogoButton
                style={{
                    margin: '10px',
                }}
            >
                <img
                    src={"logo.png"}
                    width={"50px"}
                />
            </LogoButton>
            <LogoTitleButton>
                <label className={"logo-title-button"}>SOL KITTIES</label>
            </LogoTitleButton>
        </Stack>
        <List>
            <ListItemButton>
                <p className={"listitembutton-p"}>Verify</p>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <p className={"listitembutton-p"}>Staking</p>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <p className={"listitembutton-p"}>Sweepers</p>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <p className={"listitembutton-p"}>Roadmap</p>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <p className={"listitembutton-p"}>Faq</p>
            </ListItemButton>
            <Divider/>
            <ListItemButton>
                <p className={"listitembutton-p"}>Whitepaper</p>
            </ListItemButton>
            <Divider/>
        </List>
        
    </Box>
  );
    return (
        <div className="menu">
            <Button
                style={{
                    position:'absolute',
                    left:0,
                    top:'10px',
                }}
                onClick={toggleDrawer("left", true)}
                className={"nav-menu"}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    fill="#FFD029"
                    viewBox="0 0 16 16"
                >
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
                    </path>
                </svg>
            </Button>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                style={{
                    zIndex:'10000'
                }}
            >
                {list("left")}
            </Drawer>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className={"width-menu"}
            >
                <Stack direction="row" className={"logo"}>
                    <LogoButton
                        style={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            minWidth: '0',
                            padding: '0'
                        }}
                    >
                        <img
                            src={"logo.png"}
                            width={"55px"}
                        />
                    </LogoButton>
                    <LogoTitleButton>
                        <p className={"logo-title-button"}>SOL KITTIES</p>
                    </LogoTitleButton>
                </Stack>

                <Stack direction="row" className="center menu-list" spacing={0}>
                    <MenuButton>
                        VERIFY
                    </MenuButton>

                    <MenuButton>
                        STAKING
                    </MenuButton>

                    <MenuButton>
                        SWEEPERS
                    </MenuButton>

                    <MenuButton>
                        ROADMAP
                    </MenuButton>

                    <MenuButton>
                        FAQ
                    </MenuButton>
                    
                    <MenuButton>
                        WHITEPAPER
                    </MenuButton>
                </Stack>


                <Button>
                    <img
                        src={"join_our_community.png"}
                        className="join_our_community"
                    />
                </Button>
            </Stack>
        </div>
    );
}

export default Menu