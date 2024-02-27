import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SellIcon from "@mui/icons-material/Sell";
import { useShop } from "../../context/ProductContext";
import SearchIcon from "@mui/icons-material/Search";
import { useAuthContext } from "../../context/AuthContext";
import { Avatar, Tooltip } from "@mui/material";
import provil from "../../image/provil.jpg";
import { ADMIN_USER } from "../../helpers/const";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

export default function Header() {
  const [search, setSearch] = React.useState("");
  const { data, setData, readProduct } = useShop();
  const { user, logOut } = useAuthContext();

  function shopSearch() {
    if (search.length === 0) {
      readProduct();
    } else {
      let result = data.filter((el) => el.name.toLowerCase().includes(search));
      setData(result);
    }
  }

  React.useEffect(() => {
    shopSearch();
  }, [data, search]);

  function handleLogOut() {
    logOut();
    handleMenuClose();
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const navigate = useNavigate();
  function handleLogOut() {
    logOut();
    handleMenuClose();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box className="container">
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "#112B66" }}>
            <img className="images" src={provil} alt="images" />

            <Typography
              noWrap
              component="div"
              sx={{ fontSize: "30px", fontWeight: "bold" }}
            >
              DRESCODE.KG
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  padding: "0 0 0 20px",
                  display: "flex",
                  alignItems: "center",
                }}
                variant="h5"
              >
                заказать сюда <ArrowForwardIosIcon />
              </Typography>

              {/* {ADMIN_USER.map((el) =>
                user && el.email === user.email ? ( */}
              <IconButton onClick={() => navigate("/admin")}>
                <SellIcon sx={{ fontSize: "30px", color: "#fff" }} />
              </IconButton>
              {/* ) : (
                  ""
                )
              )} */}

              <Box>
                <input
                  className="blocks"
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                />
                <SearchIcon
                  sx={{
                    fontSize: "40px",
                    marginLeft: "-40px",
                    color: "#000",
                  }}
                  className="icon"
                />
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              {user ? (
                <>
                  <Tooltip title={user.displayName}>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <Avatar src={user.photoURL} alt={user.displayName} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                  >
                    <Link to="/register">
                      <MenuItem onClick={handleMenuClose}>Sign up</MenuItem>
                    </Link>
                    <Link>
                      <MenuItem onClick={handleMenuClose}>Sign in</MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
                  </Menu>
                </>
              ) : (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              )}
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
              >
                <Link to="/register">
                  <MenuItem onClick={handleMenuClose}>Sign up</MenuItem>
                </Link>
                <Link to="/login">
                  <MenuItem onClick={handleMenuClose}>Sign in</MenuItem>
                </Link>
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
    </Box>
  );
}
