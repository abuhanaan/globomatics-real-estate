import { useEffect, useState, useMemo } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import "./main-page.css";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";

function App() {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("./houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  // useMemo either sets the value cached initally to featuredHouse or the value
  // returned from the function call below which only gets fired when the value of allHouses changes
  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

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
