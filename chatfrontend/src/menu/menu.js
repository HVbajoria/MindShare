import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuPopover,
    MenuLink,
  } from "@reach/menu-button";
  import "@reach/menu-button/styles.css";
import "./menu.css";
import { useHistory } from 'react-router-dom';

function Example() {
    let history = useHistory();

  const redirect = () => {
    history.push('./quotes')
  }
    return (
      <Menu>
        <MenuButton
        style={{ boxShadow: "2px 2px 2px hsla(0, 0%, 0%, 0.25)",color:"black"}}>
          Relax Space <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList
         style={{ boxShadow: "2px 2px 2px hsla(0, 0%, 0%, 0.25)",color:"black"}}>
          <MenuItem onClick={redirect}>Motivational Quotes</MenuItem>
          <MenuItem onSelect={() => alert("Copy")}>Music Player</MenuItem>
          <MenuItem onSelect={() => alert("Mark as Draft")}>Memory Game</MenuItem>
        </MenuList>
      </Menu>
    );
  }

  export default Example;