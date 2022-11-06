import CoffeeProfile from "../components/profiles/CoffeeProfile.jsx";

const DUMMY_PROFILES = [
  {
    id: "p1",
    brand: "Starbucks",
    name: "Guatemala Antigua",
    comments: "Really loved this one!",
    brew_methods: ["Drip brewer", "Pour-over", "Press", "Clover", "Cupping"],
    processing: "washed (wet)",
    notes: {
        acidity: 3,
        body: 3,
        roast: 2,
    },
    imageLink:
      "https://globalassets.starbucks.com/assets/4206041b8d8e4eceb65482588662c331.jpg?impolicy=1by1_medium_630",
  },
];

const content = DUMMY_PROFILES.map((profile) => (
  <CoffeeProfile data={profile} key={profile.id} />
));

const Overview = () => {
  return (
    <div>
      <h1>Your Coffee Journal</h1>
      {content}
    </div>
  );
};

export default Overview;
