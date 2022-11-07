import classes from "./CoffeeProfile.module.css";
import Card from "../UI/Card.jsx";

const CoffeeProfile = (props) => {
  const {
    acidity: acidity, body, brand, brew_methods, comments, imageLink, name, processing, roast
  } = props.data;

  return (
    <Card>
      <div className={classes.cardFlex}>
        <div>
          <h1>{name}</h1>
          <h2>{brand}</h2>
          <div>
            <ul>
              <li>{brew_methods}</li>
            </ul>
            <h2>Processing Method</h2>
            <ul>
              <li>{processing}</li>
              <li></li>
            </ul>
            <h2>Notes</h2>
            <ul>
              <li>
                Acidity: {acidity} | Body: {body} | Roast:
                {roast}
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
