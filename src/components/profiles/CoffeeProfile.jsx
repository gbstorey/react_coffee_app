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
          <h2>{processing}</h2>
            <div className={classnames(classes.cardFlex, classes.leftFlex)}>
                <ul>
                    {brew_methods.map((method) => <li key={brew_methods.indexOf(method)}>{method}</li>)}
                </ul>
                <ul>
                    <li>Acidity: {notes.acidity}</li>
                    <li>Body: {notes.body}</li>
                    <li>Roast: {notes.roast}</li>
                </ul>
            </div>
        </div>
        <div >
          <img
            alt={"picture of coffee"} src={imageLink} className={classes.image}
          />
        </div>

      </div>
        <p>{comments}</p>
    </Card>
  );
};

export default CoffeeProfile;
