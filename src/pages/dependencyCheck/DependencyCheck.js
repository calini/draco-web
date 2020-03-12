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

export default function DependencyCheck(props) {
  var classes = useStyles();
  var theme = useTheme();

  const { loading, fetchError, data } = useFetch("/api/v1/snyk/org/calini/projects", []);

  let titles = ["Project Name", "Manifest", "High", "Med", "Low", "Last Tested", "Github", "Snyk"];
  let rows = [];
  let chartData = {};
  if (!loading) {
    rows = data.projects.map(({name, type, lastTestedDate, remoteRepoUrl, issueCountsBySeverity, browseUrl}) => [
            name,
            type,
            issueCountsBySeverity.high,
            issueCountsBySeverity.medium,
            issueCountsBySeverity.low,
            moment(lastTestedDate).format('MMMM Do YYYY, hh:mm'),
            <Link href={remoteRepoUrl}>Link</Link>,
            <Link href={browseUrl}>Link</Link>,
        ]);
    chartData = Object.entries(groupBy(data.projects, "type")).map((type) => {return {name: type[0], value: type[1].length, color: randomColor()}});
    console.log(chartData);
  }

  function randomColor() {
    return "#"+((1<<24)*Math.random()|0).toString(16)
  }

  return (
    <>
      <PageTitle title="Dependency Check" button="Snyk API" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
              title="Projects"
              data={rows}
              columns={titles}
              options={{
                filterType: "checkbox",
              }}
          />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget title="Manifests (Languages)" upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart margin={{ left: theme.spacing(2) }}>
                    <Pie
                      data={chartData}
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {!loading && chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.pieChartLegendWrapper}>
                  {!loading && chartData.map(({ name, value, color }, index) => (
                    <div key={color} className={classes.legendItemContainer}>
                      <Dot color={color} />
                      <Typography style={{ whiteSpace: "nowrap" }}>
                        &nbsp;{name}&nbsp;
                      </Typography>
                      <Typography color="text" colorBrightness="secondary">
                        &nbsp;{value}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
