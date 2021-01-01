import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "340px",
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
const HomeCards = ({ header, body }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {header}
        </Typography>
        <hr />
        <div>
          <Typography>{body}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
export { HomeCards };
