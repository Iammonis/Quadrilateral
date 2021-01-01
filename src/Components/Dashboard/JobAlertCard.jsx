import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

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
const JobAlertCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          New Jobs in My Job Alerts
        </Typography>
        <hr />
        <div>
          <Typography>CREATE CUSTOM JOB ALERTS</Typography>
          <Typography>Stay informed about the latest jobs for you</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
export { JobAlertCard };
