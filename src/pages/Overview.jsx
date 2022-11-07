import CoffeeProfile from "../components/profiles/CoffeeProfile.jsx";
import {useLoaderData} from "react-router-dom";

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
      imageLink: loaderData[key].imageLink
    })
  }

  const content = loadedProfiles.map((profile) => (
    <CoffeeProfile data={profile} key={profile.id} />
  ));

  return (
    <div>
      <h1>Your Coffee Journal</h1>
      {content}
    </div>
  );
};

export default Overview;

async function getProfiles() {
  const res = await fetch("https://react-http-21c77-default-rtdb.firebaseio.com/coffee.json");
  if (!res.ok) {
    throw new Error ("Failed to fetch coffee profiles.");
  }

  return res.json();
}

export function loader() {
  return getProfiles();
}
