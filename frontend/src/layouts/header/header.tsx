import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../types/header/page";
import UserType from "../../types/header/user-types";
import { AppBar, Container, IconButton, Toolbar } from "@mui/material";
import HeaderItems from "./header_items";
import Settings from "./settings";

const homePages: Page[] = [
  { name: "home", goto: "/" },
  { name: "price", goto: "/price" },
  { name: "about", goto: "/about" },
  { name: "login", goto: "/login" },
];

const regularUserPages: Page[] = [{ name: "home", goto: "/" }];

const premiumUserPages: Page[] = [
  { name: "home", goto: "/" },
  { name: "expense", goto: "/" },
  { name: "income", goto: "/" },
  { name: "leaderBoard", goto: "/" },
  { name: "reports", goto: "/" },
];

const settings = [
  { name: "profile", goto: "/user/profile" },
  { name: "logout", goto: "/logout" },
];

function Header() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>(UserType.Empty);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            sx={{ display: { xs: "none", md: "flex" } }}
            onClick={() => navigate("/")}
          >
            <img
              src="../../../images/logo.png"
              alt="cody"
              height={"40px"}
              width={"40px"}
            />
          </IconButton>

          {/*Before login Header and after login check the type of user*/}
          {userType === UserType.Empty ? (
            <>
              <HeaderItems Options={homePages} />
            </>
          ) : (
            <>
              <HeaderItems Options={regularUserPages} />
              <Settings allOptions={settings} />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
