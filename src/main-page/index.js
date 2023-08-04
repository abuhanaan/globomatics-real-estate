import { useEffect, useState, useMemo } from "react";
import Header from "./header";
import "./main-page.css";

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
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
