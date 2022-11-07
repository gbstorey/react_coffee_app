import Card from "../components/UI/Card.jsx";
import { useFetcher } from "react-router-dom";
import { useReducer } from "react";

const initialFormState = {
  brand: "",
  name: "",
  comments: "",
  brew_methods: [],
  processing: "",
  acidity: 0,
  body: 0,
  roast: 0,
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
      <fetcher.Form method={"post"} action={"/profileCreation"}>
        <div>
          <label>
            Brand:
            <input
              type={"text"}
              name={"brand"}
              value={formState.brand}
              onChange={handleTextChange}
            />
          </label>
        </div>
        <div>
          <label>
            Coffee Name:
            <input
              type={"text"}
              name={"name"}
              value={formState.name}
              onChange={handleTextChange}
            />
          </label>
        </div>
        <div>
          <label>
            Comments:
            <input
              type={"text"}
              name={"comments"}
              value={formState.comments}
              onChange={handleTextChange}
            />
          </label>
        </div>
        <div>
          <label>
            Brewing Methods:
            <input
              type={"text"}
              name={"brew_methods"}
              value={formState.brew_methods}
              onChange={handleTextChange}
            />
          </label>
        </div>
        <div>
          <label>
            Processing:
            <input
              type={"text"}
              name={"processing"}
              value={formState.processing}
              onChange={handleTextChange}
            />
          </label>
        </div>
        <div>
          <label>
            Acidity:
            <input
              type={"number"}
              name={"acidity"}
              value={formState.acidity}
              onChange={handleTextChange}
            />
          </label>
          <div>
            <label>
              Body:
              <input
                type={"number"}
                name={"body"}
                value={formState.body}
                onChange={handleTextChange}
              />
            </label>
          </div>
          <div>
            <label>
              Roast:
              <input
                type={"number"}
                name={"roast"}
                value={formState.roast}
                onChange={handleTextChange}
              />
            </label>
          </div>
          <div>
            <label>
              Image Link:
              <input
                type={"text"}
                name={"imageLink"}
                value={formState.imageLink}
                onChange={handleTextChange}
              />
            </label>
          </div>
        </div>
        <button>Submit</button>
      </fetcher.Form>
    </Card>
  );
};

export default NewProfile;

export async function action({ request }) {
  const data = await request.formData();
  const profile = {
    brand: data.get("brand"),
    name: data.get("name"),
    comments: data.get("comments"),
    brew_methods: data.get("brew_methods"),
    processing: data.get("processing"),
    acidity: data.get("acidity"),
    body: data.get("acidity"),
    roast: data.get("acidity"),
    imageLink: data.get("imageLink"),
  };
  const res = await fetch(
    "https://react-http-21c77-default-rtdb.firebaseio.com/coffee.json",
    { method: request.method, body: JSON.stringify(profile) }
  );
  if (!res.ok) {
    throw new Error("Failed to post new profile.");
  }
}
