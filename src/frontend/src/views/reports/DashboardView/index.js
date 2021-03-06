import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../../components/Page";
import Budget from "./Budget";
import LatestOrders from "./LatestOrders";
import Expenditure from "./Expenditure";
import Sales from "./Sales";
import { Navigate } from "react-router-dom";
import TasksProgress from "./TasksProgress";
import TotalCustomers from "./TotalCustomers";
import TotalProfit from "./TotalProfit";
import TrafficByDevice from "./TrafficByDevice";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const user = localStorage.getItem("team5-token");
  return (
    <div>
      {!user && <Navigate to="/login"></Navigate>}
      <Page className={classes.root} title="Dashboard">
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xl={9} xs={12}>
              <LatestOrders />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalCustomers />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Expenditure />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalProfit />
            </Grid>
            {/* <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid> */}
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByDevice />
            </Grid>
          </Grid>
        </Container>
      </Page>
    </div>
  );
};

export default Dashboard;
