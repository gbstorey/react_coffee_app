import CoffeeProfile from "../components/profiles/CoffeeProfile.jsx";
import { useLoaderData } from "react-router-dom";
import classes from "./Overview.module.css";

const Overview = () => {
  const loaderData = useLoaderData();

  let loadedProfiles = [];

  for (const key in loaderData) {
    loadedProfiles.push({
      id: key,
      brand: loaderData[key].brand,
      name: loaderData[key].name,
      comments: loaderData[key].comments,
      brew_methods: loaderData[key].brew_methods,
      processing: loaderData[key].processing,
      acidity: loaderData[key].acidity,
      body: loaderData[key].acidity,
      roast: loaderData[key].acidity,
      imageLink: loaderData[key].imageLink,
    });
  }

  const content = loadedProfiles.map((profile) => (
    <CoffeeProfile data={profile} key={profile.id} />
  ));

  return (
    <>
        <div className={classes.center}>
        <h1>Your Coffee Journal</h1>
        </div>
      <div>{content}</div>
    </>
  );
};

export default Overview;
