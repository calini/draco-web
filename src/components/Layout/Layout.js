import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";
import DependencyCheck from "../../pages/dependencyCheck";
import PortScans from "../../pages/portScans";
import HostVulns from "../../pages/hostVulns";
import AboutPage from "../../pages/about";
import FAQ from "../../pages/faq";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>

              <Route path="/app/deps"              component={DependencyCheck} />
              <Route path="/app/ports"             component={PortScans} />
              <Route path="/app/hosts"             component={HostVulns} />


              <Route path="/app/about"             component={AboutPage} />
              <Route path="/app/faq"               component={FAQ} />

              <Route path="/app/dashboard"         component={Dashboard} />
              <Route path="/app/charts"            component={Charts} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
