import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
import companiesData from "./companiesData.json";

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
const Companies = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Top Companies hiring
        </Typography>
        <hr />
        <div className="companies-img">
          {companiesData.companies_img?.map((imgItem) => (
            <img src={imgItem} key={imgItem} alt="img" style={{ margin: 10 }} />
          ))}
        </div>
        <div
          className="companies-name"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          {companiesData.companies_name?.map((companyName) => (
            <Typography
              key={companyName}
              style={{
                fontSize: "12px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "150px",
                WebkitAlignContent: "vertical"
              }}
            >
              {companyName}
            </Typography>
          ))}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ marginLeft: "70%" }}>
          VIEW ALL
        </Button>
      </CardActions>
    </Card>
  );
};

export { Companies };
