import React, { useState } from "react";
import {
  CircularProgress,
} from "@material-ui/core";

// styles
import useStyles from "./styles";

import useFetch from "use-http";
import Chip from "@material-ui/core/Chip";

import CloudDoneIcon from '@material-ui/icons/CloudDone';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

function StatusCheck(props) {
  let classes = useStyles();

  const { loading, fetchError, data } = useFetch("/api/v1/ping", []);

  return (
      <div className={classes.statusCheck}>
        { fetchError &&
          <Chip
              icon={<CloudOffIcon />}
              label="System Down"
              color="secondary"
          />
        }
        { loading &&
          <Chip
              icon={<HourglassEmptyIcon />}
              label="Loading..."
              color="secondary"
          />
        }
        { data &&
          <Chip
              icon={<CloudDoneIcon />}
              label="System Up"
              color="primary"
          />
        }
      </div>
  );
}
export default StatusCheck;
