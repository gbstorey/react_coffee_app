import classes from "./CoffeeProfile.module.css";
import Card from "../UI/Card.jsx";
import classnames from "classnames";

const CoffeeProfile = (props) => {
  const {
    id,
    brand,
    name,
    comments,
    brew_methods,
    processing,
    notes,
    imageLink,
  } = props.data;

  return (
    <Card>
      <div className={classes.cardFlex}>
        <div>
          <h1>{name}</h1>
          <h2>{brand}</h2>
          <div>
            <ul>
              {brew_methods.map((method) => (
                <li key={brew_methods.indexOf(method)}>{method}</li>
              ))}
            </ul>
            <h2>Processing Method</h2>
            <ul>
              <li>{processing}</li>
              <li></li>
            </ul>
            <h2>Notes</h2>
            <ul>
              <li>
                Acidity: {notes.acidity} | Body: {notes.body} | Roast:{" "}
                {notes.roast}
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.center}>
          <img
            alt={"picture of coffee"}
            src={imageLink}
            className={classes.image}
          />
        </div>
      </div>
        <div className={classes.commentCard}>
            <p>{comments}</p>
        </div>
    </Card>
  );
};

export default CoffeeProfile;
