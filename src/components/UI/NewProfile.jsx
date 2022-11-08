import Card from "./Card.jsx";
import { useFetcher } from "react-router-dom";
import { useReducer } from "react";
import NewProfileInput from "../profiles/NewProfileInput.jsx";
import classes from "./NewProfile.module.css"

const initialFormState = {
  brand: "",
  name: "",
  comments: "",
  brew_methods: [],
  processing: "",
  acidity: "",
  body: "",
  roast: "",
  imageLink: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

const NewProfile = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const fetcher = useFetcher();

  const handleTextChange = (event) => {
    dispatch({
      type: "INPUT",
      field: event.target.name,
      payload: event.target.value,
    });
  };

  return (
    <Card>
      <h1>New Entry</h1>
      <fetcher.Form method={"post"} action={"/profileCreation"} className={classes.entryForm}>
        <NewProfileInput label={"Brand"} type={"text"} name={"brand"} value={formState.brand} onChange={handleTextChange}/>
        <NewProfileInput label={"Coffee Name"} type={"text"} name={"name"} value={formState.name} onChange={handleTextChange}/>
        <NewProfileInput label={"Comments"} type={"text"} name={"comments"} value={formState.comments} onChange={handleTextChange}/>
        <NewProfileInput label={"Brewing Methods"} type={"text"} name={"brew_methods"} value={formState.brew_methods} onChange={handleTextChange}/>
        <NewProfileInput label={"Processing"} type={"text"} name={"processing"} value={formState.processing} onChange={handleTextChange}/>
        <NewProfileInput label={"Acidity"} type={"number"} name={"acidity"} value={formState.acidity} onChange={handleTextChange}/>
        <NewProfileInput label={"Body"} type={"number"} name={"body"} value={formState.body} onChange={handleTextChange}/>
        <NewProfileInput label={"Roast"} type={"number"} name={"roast"} value={formState.roast} onChange={handleTextChange}/>
        <NewProfileInput label={"Image Link"} type={"text"} name={"imageLink"} value={formState.imageLink} onChange={handleTextChange}/>
        <button className={classes.button}>Submit</button>
      </fetcher.Form>
    </Card>
  );
};

export default NewProfile;



