import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Grid } from "@material-ui/core";

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

export const TableRowDialog = ({
  open,
  data,
  setOpen,
}: {
  open: boolean;
  data?: {
    [key: string]: any;
  };
  setOpen: (open: boolean) => void;
}): JSX.Element => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onBackdropClick={handleClose}
        maxWidth="lg"
      >
        <DialogTitle>详细</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {Object.keys(data).map((key) =>
              key !== "undefined" && key !== "id" ? (
                <Grid container spacing={1} key={key}>
                  <Grid item xs={4}>
                    {key}
                  </Grid>
                  <Grid item xs={8}>
                    {data[key]}
                  </Grid>
                </Grid>
              ) : null
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
