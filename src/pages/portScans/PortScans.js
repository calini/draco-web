import React, {useEffect, useState} from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import MUIDataTable from "mui-datatables";
import useFetch from "use-http";
import Link from "@material-ui/core/Link";
import moment from "moment";

function groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default function PortScans(props) {

  const { loading, fetchError, data } = useFetch("/api/v1/ports/1", []);

  let titles = ["IP", "Port", "Protocol", "Service", "Status", "Date"];
  let rows = [];
  if (!loading) {
    rows = data.JSON.map(({ip, port, protocol, service, status, date}) => [
            ip,
            port,
            protocol,
            service,
            status,
            moment(date * 1000).format('MMMM Do YYYY, hh:mm')
        ]);
  }

  return (
    <>
      <PageTitle title="Open Ports" button="Nmap" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
              title="Ports"
              data={rows}
              columns={titles}
              options={{
                filterType: "checkbox",
              }}
          />
        </Grid>
      </Grid>
    </>
  );
}
