import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function FAQ() {
  var classes = useStyles();

  return (
      <>
        <PageTitle title="About" />
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Widget disableWidgetMenu>
              <Typography className={classes.text} size="xl">Where does all this data come from?</Typography>
              <Typography className={classes.text} size="md">
                Draco is relying on 3rd party tools/services to gather it's data. We are not reinventing the wheel, of course!
              </Typography>
              <Typography className={classes.text} size="xl">What are those services?</Typography>
              <Typography className={classes.text} size="md">
                <b>Nmap</b> is a network scanner that can detect open ports, services and estimate versions. We use it for gathering information about unintentionally open services.
              </Typography>
              <Typography className={classes.text} size="md">
                <b>Snyk</b> is a dependency checker as-a-service. It analyses code projects in one of the dozen compatible languages, and checks dependencies against a huge database of common vulnerabilities. We use it to help clean out our code.
              </Typography>
              <Typography className={classes.text} size="md">
                <b>OpenVAS</b> is an open-source scanner that can do authenticated or unauthenticated scans against Linux or Windows hosts, and detect CVEs (Common vulnerabilities and exploits). We use it for gathering host information, helping us figure out which VMs to patch.
              </Typography>
            </Widget>
          </Grid>
        </Grid>
      </>
  );
}
