


const NewProfileInput = (props) => {
  return (
    <div>
      <label>
          {props.label}:
        <input
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
