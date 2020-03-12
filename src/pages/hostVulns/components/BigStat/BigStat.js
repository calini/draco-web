import React, { useState } from "react";
import { Grid, Select, MenuItem, Input } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";

export default function BigStat(props) {
  var { product, total, color, registrations, bounce } = props;
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [value, setValue] = useState("latest");

  return (
    <Widget
      header={
        <div className={classes.title}>
          <Typography variant="h5">{product}</Typography>

          <Select
            value={value}
            onChange={e => setValue(e.target.value)}
            input={
              <Input
                disableUnderline
                classes={{ input: classes.selectInput }}
              />
            }
            className={classes.select}
          >
            <MenuItem value="latest">Latest</MenuItem>
            <MenuItem value="lastWeek">Last Week</MenuItem>
            <MenuItem value="lastMonth">Last Month</MenuItem>
          </Select>
        </div>
      }
      upperTitle
    >
      <div className={classes.totalValueContainer}>
        <div className={classes.totalValue}>
          <Typography size="xxl" color="text" colorBrightness="secondary">
            {total[value]}
          </Typography>
          <Typography color={total.percent.profit ? "secondary" : "success"}>
            &nbsp;{total.percent.profit ? "+" : "-"}
            {total.percent.value}%
          </Typography>
        </div>
        <BarChart width={150} height={70} data={getRandomData()}>
          <Bar
            dataKey="value"
            fill={theme.palette[color].main}
            radius={10}
            barSize={10}
          />
        </BarChart>
      </div>
    </Widget>
  );
}

// #######################################################################

function getRandomData() {
  return Array(7)
    .fill()
    .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));
}
