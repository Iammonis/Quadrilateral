import React from "react";
import { IconButton, Button, Typography, Box, Card, CardContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  closeicon: {
    textAlign: "right"
  },
  box: {
    width: "250px",
    margin: "0px auto",
    textAlign: "center"
  },
  img: {
    width: "100px",
    padding: "30px 0"
  },
  button:{
      marginBottom: "10px",
      background: "#4a90e2",
      width: "219px",
      borderRadius: 2,
      '&:hover': {
        backgroundColor: '#4a90e2',
      }
  },
  typography:{
    color: "#091e42",
    fontSize: 14,
    fontWeight: 400,
  }
}));

const SidebarRegister = ({ handleDrawerClose }) => {
  const classes = useStyles();
  const history = useHistory()

  return (
    <div>
      <div className={classes.closeicon}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div style={{ height: "90%", textAlign:"center",padding:"10px 0" }}>
          <Typography variant="h6">
                Tell us your Work Status
          </Typography>
        <Box color="text.primary" className={classes.box} >
          <img
            className={classes.img}
            src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/register-wdgt/v0/assets/briefcase.849f45f9.png"
            alt="imgExperience"
          />
          <Button onClick={ () => history.push('/register') } className={classes.button} variant="contained" color="primary">
            I am Experienced
          </Button>
          <Typography className={classes.typography}>I have at least 1 month of work experience</Typography>
        </Box>
        <Box color="text.primary" className={classes.box} >
          <img
            className={classes.img}
            style={{ marginLeft: "16px"}}
            src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/register-wdgt/v0/assets/bagpack.89c75851.png"
            alt="bag"
          />
          <Button onClick={ () => history.push('/register') } className={classes.button} variant="contained" color="primary" href="#contained-buttons">
            I am Fresher
          </Button>
          <Typography className={classes.typography}>
            I have just graduated/I haven't worked after graduation
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export { SidebarRegister };
