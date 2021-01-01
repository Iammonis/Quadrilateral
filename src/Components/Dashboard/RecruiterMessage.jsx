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
const RecruiterMessage = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          New Recruiter Messages
        </Typography>
        <hr />
        <div>
          <Typography>
            You do not have any unread message. Messages received from different
            recruiters will appear in this section.
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
export { RecruiterMessage };
