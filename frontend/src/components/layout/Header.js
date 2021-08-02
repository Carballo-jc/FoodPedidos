import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    '&:hover':{
      cursor:'pointer'
    }
  },
  MuiButtonText:{
    backgroundColor:'#13a106',
'&:hover':{
  backgroundColor:'#288a20',
 
}
  },
  menu__links: {
    fontSize: 20,

    "& a": {
      textAlign: "center",
      color: "#fff",
      textDecoration: "none",
      marginRight: 30,
      top: 71,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Food Pedidos
          </Typography>
              <div className={classes.menu__links}>
                <Link to={"/"}>Catalogo</Link>
                <Link to={"/"}>Nosotros</Link>
                <Link to={"/"}>Contacto</Link>
              </div>
          <Button color="inherit" className={classes.MuiButtonText}>Registrate</Button>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
