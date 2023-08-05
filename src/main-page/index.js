import useHouses from "../hooks/useHouses";
import useFeaturedHouses from "../hooks/useFeaturedHouses";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import "./main-page.css";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouses(allHouses);

  return (
    <Router>
      <div className="container">
        <Header subtitle={"Providing Houses All Over the World"} />
        <HouseFilter allHouses={allHouses} />
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={<FeaturedHouse house={featuredHouse}></FeaturedHouse>}
        ></Route>
        <Route
          path="/searchresults/:country"
          element={<SearchResults allHouses={allHouses} />}
        ></Route>
        <Route
          path="/house/:id"
          element={<HouseFromQuery allHouses={allHouses} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
