/* eslint-disable no-restricted-imports */
import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import GoogleMapLocation from '../GoogleMapLocation/GoogleMapLocation';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

export function NewOrderForm() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [values, setValues] = React.useState({
    location: '',
    orderitem: '',
  });
  const [value, setValue] = React.useState('Non Vegeterian');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange = prop => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              className={clsx(classes.margin)}
              margin="normal"
              id="date-picker-dialog"
              label="Date"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              className={clsx(classes.margin)}
              margin="normal"
              id="time-picker"
              label="Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <GoogleMapLocation />
        <div />
        <FormControl component="fieldset" className={clsx(classes.margin)}>
          <FormLabel component="legend">Diet</FormLabel>
          <RadioGroup row aria-label="Diet" name="Diet1" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="Non Vegeterian" control={<Radio />} label="Non Vegeterian" />
            <FormControlLabel value="Vegeterian" control={<Radio />} label="Vegeterian" />
            <FormControlLabel value="Vegan" control={<Radio />} label="Vegan" />
          </RadioGroup>
        </FormControl>
        <Divider variant="inset" />
        <FormControl fullWidth className={clsx(classes.margin)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-item">Order Item</InputLabel>
          <OutlinedInput
            id="outlined-adornment-item"
            value={values.orderitem}
            onChange={handleChange('orderitem')}
            startAdornment={(
              <InputAdornment position="start">
                <span role="img" aria-label="Anchor">
                🍔
                </span>
              </InputAdornment>
            )}
            labelWidth={80}
          />
        </FormControl>
      </div>
    </div>
  );
}

NewOrderForm.propTypes = {
};

NewOrderForm.defaultProps = {
};

function mapStateToProps(state) {
  console.log(state);
  return {
  };
}

export default connect(mapStateToProps)(NewOrderForm);
