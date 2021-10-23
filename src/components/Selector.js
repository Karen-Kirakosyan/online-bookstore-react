import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '15%',
  },
}))
export default function Serlector() {
  const classes = useStyles()
  return (
    <FormControl className={classes.formControl}>
      <Select
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="" disabled>
          Categories
        </MenuItem>
        <MenuItem>History</MenuItem>
        <MenuItem>Fiction</MenuItem>
        <MenuItem>Bussines</MenuItem>
        <MenuItem>Crime</MenuItem>
        <MenuItem>Poetry</MenuItem>
      </Select>
      <FormHelperText>Categories</FormHelperText>
    </FormControl>
  )
}
