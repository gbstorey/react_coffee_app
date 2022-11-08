import classes from "./NewProfileInput.module.css";

const NewProfileInput = (props) => {
  return (
    <div className={classes.labelDiv}>
      <label>
        {props.label}:
        <input
          className={classes.input}
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

export default NewProfileInput;
