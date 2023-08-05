import useHouses from "../hooks/useHouses";
import useFeaturedHouses from "../hooks/useFeaturedHouses";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import "./main-page.css";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import HousesContext from "../contexts/housesContext";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouses(allHouses);

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle={"Providing Houses All Over the World"} />
          <HouseFilter />

          <Routes>
            <Route
              exact
              path="/"
              element={<FeaturedHouse house={featuredHouse}></FeaturedHouse>}
            ></Route>
            <Route
              path="/searchresults/:country"
              element={<SearchResults />}
            ></Route>
            <Route path="/house/:id" element={<HouseFromQuery />}></Route>
          </Routes>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
