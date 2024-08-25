import React, { useState } from "react";

import LogoImg from "../utils/Images/Logo.png";

import Button from "./Button";
import {
  FavoriteBorder,
  MenuRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { logout } from "../redux/reducers/userSlice";
import { useDispatch } from "react-redux";


import { TextButton } from "../utils/navbar";
import { Nav } from "../utils/navbar";
import { NavbarContainer } from "../utils/navbar";
import { NavLogo } from "../utils/navbar";
import { Logo } from "../utils/navbar";
import { NavItems } from "../utils/navbar";
import { Navlink } from "../utils/navbar";
import { ButtonContainer } from "../utils/navbar";
import { MobileIcon } from "../utils/navbar";
import { Mobileicons } from "../utils/navbar";
import { MobileMenu } from "../utils/navbar";

const Navbar = ({ openAuth, setOpenAuth, currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavLogo>
          <Logo src={LogoImg} />
        </NavLogo>

        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/Shop">Shop</Navlink>
          <Navlink to="/New_Arrivals">New Arrivals</Navlink>
          <Navlink to="/Orders">Orders</Navlink>
          <Navlink to="/Contact">Contact</Navlink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <Navlink to="/" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Shop">
              Shop
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/New_Arrivals">
              New Arrivals
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Orders">
              Orders
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Contact">
              Contact
            </Navlink>
            {currentUser ? (
              <Button text="Logout" small onClick={() => dispatch(logout())} />
            ) : (
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <Button
                  text="Sign Up"
                  outlined
                  small
                  onClick={() => setOpenAuth(!openAuth)}
                />
                <Button
                  text="Sign In"
                  small
                  onClick={() => setOpenAuth(!openAuth)}
                />
              </div>
            )}
          </MobileMenu>
        )}

        <Mobileicons>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>

          {currentUser ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined
                  
                  sx={{ color: "inherit", fontSize: "28px" }}
                />
              </Navlink>
              <Avatar
                src={currentUser?.img}
                sx={{
                  color: "inherit",
                  fontSize: "28px",
                }}
              >
                {currentUser?.name[0]}
              </Avatar>
            </>
          ) : (
            <Button
              text="SignIn"
              small
              onClick={() => setOpenAuth(!openAuth)}
            />
          )}
        </Mobileicons>

        <ButtonContainer>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>

          {currentUser ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined
                  sx={{ color: "inherit", fontSize: "28px" }}
                />
              </Navlink>
              <Avatar
                src={currentUser?.img}
                sx={{
                  color: "inherit",
                  fontSize: "28px",
                }}
              >
                {currentUser?.name[0]}
              </Avatar>
              <TextButton onClick={() => dispatch(logout())}>Logout</TextButton>
            </>
          ) : (
            <Button
              text="SignIn"
              small
              onClick={() => setOpenAuth(!openAuth)}
            />
          )}
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
