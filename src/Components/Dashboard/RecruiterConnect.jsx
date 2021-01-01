import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "10px",
    boxShadow: "1px 1px 1px 1px #EDF3FA"

  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    background: "#4a90e2",
    width: "219px",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: "#4a90e2"
    }
  }
});

const RecruiterConnect = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Recruiter Connections
        </Typography>
        <hr />
        <div style={{ display: "flex" }}>
          <div>
            <div style={{ display: "flex" }}>
              <h1>00</h1>
              <div style={{ paddingTop: "10px" }}>
                <Typography>Credits</Typography>
                <Typography>Purchased</Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <h1>00</h1>
              <div style={{ paddingTop: "10px" }}>
                <Typography>Credits</Typography>
                <Typography>Purchasing</Typography>
              </div>
            </div>
          </div>
          <div>
            <Typography>
              Buy recruiter connections credits to contact more recruiters
              hiring in your domain.
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              buy credits
            </Button>
            <CardActions>
              <Button size="small" style={{ marginLeft: "70%" }}>
                VIEW ALL
              </Button>
            </CardActions>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export { RecruiterConnect };
