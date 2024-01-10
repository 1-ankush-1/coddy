import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Page from "../../types/header/page";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "../../Translate/translate";
import HomeModal from "../../components/modal";

const HeaderItems = ({ Options }: { Options: Page[] }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const NavOptions = useCallback(
    ({ pages, screen }: { pages: Page[]; screen: string }) => {
      const handlePageNavigation = (goto: string) => {
        if (goto === "/login") {
          handleOpenLogin();
        } else if (goto === "/price") {
          // handleOpenPrice();
        } else {
          navigate(goto as string);
        }
        handleCloseNavMenu();
      };

      return screen === "sm" ? (
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page: Page) => (
            <MenuItem
              key={page.name}
              onClick={() => handlePageNavigation(page.goto)}
            >
              {t(page.name)}
            </MenuItem>
          ))}
        </Menu>
      ) : (
        pages.map((page: Page) => (
          <Typography
            onClick={() => handlePageNavigation(page.goto)}
            variant="h6"
            component="div"
            sx={{ mr: 4, cursor: "pointer" }}
            key={page.name}
          >
            {t(page.name)}
          </Typography>
        ))
      );
    },
    [anchorElNav, navigate, t]
  );

  return (
    <>
      {/* Medium to large*/}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex", justifyContent: "end" },
        }}
      >
        <NavOptions pages={Options} screen={"lg"} />
      </Box>

      {/**Small screen */}
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <NavOptions pages={Options} screen={"sm"} />
      </Box>
      <HomeModal open={openLogin} handleClose={handleCloseLogin} />
    </>
  );
};

export default HeaderItems;