import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
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
  }
});
const HiringRecruiter = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Recruiters hiring for candidates like you
        </Typography>
        <hr />
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 10px 30px"
            }}
          >
            <Avatar />

            <Typography style={{ fontWeight: 600, width: "200px" }}>
              Sharada Shankarnarayana
            </Typography>
            <Typography style={{ width: "200px" }}>
              Kaipu Associates Bengaluru / Bangalore
            </Typography>
            <CardActions>
              <Button size="small" style={{ color: "skyblue" }}>
                SEND MESSAGE
              </Button>
            </CardActions>
            <Button
              variant="outlined"
              color="primary"
              style={{ height: "30px" }}
            >
              follow
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: 10
            }}
          >
            <Avatar />

            <Typography style={{ fontWeight: 600, width: "200px" }}>
              Mohammed Khaleel Ur Rehman
            </Typography>
            <Typography style={{ width: "200px" }}>
              GK HR Consulting India Private Limited Bengaluru / Bangalore
            </Typography>
            <CardActions>
              <Button size="small" style={{ color: "skyblue" }}>
                SEND MESSAGE
              </Button>
            </CardActions>
            <Button
              variant="outlined"
              color="primary"
              style={{ height: "30px" }}
            >
              follow
            </Button>
          </div>
        </div>
        <CardActions>
          <Button size="small" style={{ marginLeft: "85%" }}>
            VIEW ALL
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export { HiringRecruiter };
