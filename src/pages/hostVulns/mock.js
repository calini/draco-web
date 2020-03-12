import {MenuItem, Select} from "@material-ui/core";
import React from "react";

export default {
  bigStat: [
    { /* High - 34; Med - 52; Low - 5*/
      product: "High Threats",
      total: {
        latest: 34,
        lastWeek: 50,
        lastMonth: 58,
        percent: { value: 12.0, profit: false }
      },
      color: "secondary",
      registrations: {
        latest: { value: 3, profit: false },
        lastWeek: { value: 21, profit: true },
        lastMonth: { value: 3, profit: true }
      },
      bounce: {
        latest: { value: 4.5, profit: false },
        lastWeek: { value: 3, profit: true },
        lastMonth: { value: 3.25, profit: true }
      }
    },
    {
      product: "Medium Threats",
      total: {
        latest: 27,
        lastWeek: 180,
        lastMonth: 754,
        percent: { value: 130, profit: false }
      },
      color: "warning",
      registrations: {
        latest: { value: 32, profit: true },
        lastWeek: { value: 8, profit: true },
        lastMonth: { value: 2, profit: false }
      },
      bounce: {
        latest: { value: 2.5, profit: true },
        lastWeek: { value: 4, profit: false },
        lastMonth: { value: 4.5, profit: false }
      }
    },
    {
      product: "Low Threats",
      total: {
        latest: 105,
        lastWeek: 201,
        lastMonth: 337,
        percent: { value: 40.0, profit: false }
      },
      color: "primary",
      registrations: {
        latest: { value: 230, profit: true },
        lastWeek: { value: 58, profit: false },
        lastMonth: { value: 15, profit: false }
      },
      bounce: {
        latest: { value: 21.5, profit: false },
        lastWeek: { value: 19.35, profit: false },
        lastMonth: { value: 10.1, profit: true }
      }
    }
  ],
};
