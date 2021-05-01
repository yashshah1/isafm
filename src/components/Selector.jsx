import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const Selector = ({ values, selectedValue, onSelect, classes, prefix }) => {
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id={`${prefix}-input-label`} className="input-label">
        {prefix}
      </InputLabel>
      <Select
        labelId={`${prefix}-input-label`}
        id={`${prefix}-input-select`}
        value={selectedValue}
        onChange={onSelect}
        label={prefix}
        autoWidth
      >
        {values.map(({ id, name }) => (
          <MenuItem key={`prefix-${id}`} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selector;
