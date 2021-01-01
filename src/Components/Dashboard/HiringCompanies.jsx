import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const cardDetail = [
  {
    url: "https://img.naukimg.com/logo_images/v3/119687.gif",
    name: "STG Infotech",
    openings: 2
  },
  {
    url: "https://img.naukimg.com/logo_images/v3/316403.gif",
    name: "SUD Life Insurence",
    openings: 9
  },
  {
    url: "https://img.naukimg.com/logo_images/v3/198177.gif",
    name: "Paytm",
    openings: 2
  }
];

const useStyles = makeStyles({
  root: {
    width: "90%",
    background: "#FEF9F4",
    margin: "10px",
    boxShadow: "1px 1px 1px 1px #EDF3FA"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  card: {
    width: "25%",
    height: "140px"
  }
});
const HiringCompanies = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div style={{ textAlign: "left", margin: "10px" }}>
          <img
            src="https://static.naukimg.com/s/7/135/i/step-up.png"
            alt="step-up-img"
          />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Companies that are actively hiring right now
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {cardDetail?.map((card) => (
            <Card key={card.name} className={classes.card}>
              <CardContent>
                <img src={card.url} alt={card.name} />
                <Typography>{card.name}</Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography style={{ fontSize: "14px", color: "sky blue" }}>
                    {card.openings} openings
                  </Typography>
                  <ArrowForwardIcon />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <CardActions>
          <Button size="small" style={{ marginLeft: "70%" }}>
            VIEW ALL Companies
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export { HiringCompanies };
