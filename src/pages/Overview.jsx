import CoffeeProfile from "../components/profiles/CoffeeProfile.jsx";
import {useLoaderData, useRouteError} from "react-router-dom";

const Overview = () => {
  const loaderData = useLoaderData();
  const content = loaderData?.map((profile) => (
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
  console.log(res.status)
  if (!res.ok) {
    throw new Error ("Failed to fetch coffee profiles.");
  }

  return res.json();
}

export function loader() {
  return getProfiles();
}
