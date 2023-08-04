import { useEffect, useState } from "react";
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

  let featuredHouse = {};
  if (allHouses.length) {
    const randomIndex = Math.floor(Math.random() * allHouses.length);
    featuredHouse = allHouses[randomIndex];
  }

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
