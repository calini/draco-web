import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function AboutPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="About" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Widget disableWidgetMenu>
            <Typography className={classes.text} size="xl">About this Project</Typography>
            <Typography className={classes.text} size="md">
                The idea behind the project was to create a tool for developers or managers to ensure the application of secure development practices; This tool is supposed to collect and present security related information about a set of projects that are currently in development.
            </Typography>
            <Typography className={classes.text} size="xl">Who is this for</Typography>
            <Typography className={classes.text} size="md">
                As this has the potential of becoming a commercial application, it obviously has to have a target audience. I chose to target this at independent developers who just want to have their code checked and their VMs scanned every now and again, and small companies who may prefer this over an in-house solution
            </Typography>
            <Typography className={classes.text} size="xl">Why do we need security?</Typography>
            <Typography className={classes.text} size="md">
                As developers, and especially as a business, we are responsible for providing customers with the best service possible. That includes the security of your users and their assets, including personal information, banking information, and others.
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
