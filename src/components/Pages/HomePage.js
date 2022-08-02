import Welcome from "../Welcome/Welcome";
import BadgeBanner from "../BadgeBanner/BadgeBanner";
import SearchSection from "../SearchSection/SearchSection";
import RandomRecipes from "../Recipe/RandomRecipes";

function HomePage({ token, user }) {
  return (
    <div>
      <Welcome />
      <BadgeBanner />
      <SearchSection />
      <RandomRecipes token={token} user={user} />
    </div>
  );
}

export default HomePage;
