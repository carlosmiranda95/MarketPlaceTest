import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  title: {
    textAlign: "center"
  },
  GridItem: {
    padding: "0 20px !important"
  },
  GridItemBottom: {
    padding: "20px 20px 5px 20px !important"
  }
}));

function ClienteFrm(props) {
  const classes = useStyles();

  /*const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        //setLabelWidth(inputLabel.current.offsetWidth);
    }, []);*/

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={4} md={8} lg={8}>
          <Grid container>
            <h3>Register Client</h3>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.GridItem}
            >
              <TextField
                id="standard-name"
                name="name"
                label="Name"
                onChange={props.onChange}
                defaultValue={props.formValues.name}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              className={classes.GridItem}
            >
              <TextField
                id="standard-name"
                name="last_name"
                label="last name"
                onChange={props.onChange}
                defaultValue={props.formValues.last_name}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              className={classes.GridItem}
            >
              <TextField
                id="standard-name"
                name="ci"
                label="ci"
                onChange={props.onChange}
                defaultValue={props.formValues.ci}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              className={classes.GridItem}
            >
              <TextField
                id="standard-name"
                name="cell_phone"
                label="Phone"
                onChange={props.onChange}
                defaultValue={props.formValues.cell_phone}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              className={classes.GridItem}
            >
              <TextField
                id="standard-name"
                name="email"
                label="Email"
                onChange={props.onChange}
                defaultValue={props.formValues.email}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.GridItem}
            >
              <TextField
                id="standard-name"
                name="birth"
                label="birth"
                onChange={props.onChange}
                defaultValue={props.formValues.birth}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.GridItem}
            >
              <TextField
                id="standard-name"
                name="rank"
                label="rank"
                onChange={props.onChange}
                defaultValue={props.formValues.rank}
                margin="normal"
                fullWidth
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.GridItem}
            >
              <TextField
                id="standard-name"
                name="sex"
                label="sex"
                onChange={props.onChange}
                defaultValue={props.formValues.sex}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.GridItemBottom}
            >
              <ButtonGroup
                variant="contained"
                color="primary"
                size="large"
                aria-label="Large contained secondary button group"
              >
                <Button onClick={props.onClickSave}>
                  Guardar <SaveIcon />
                </Button>
                <Button>
                  Cancelar <CancelIcon />
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default ClienteFrm;
