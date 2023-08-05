import { useMemo } from "react";

const useFeaturedHouses = (allHouses) => {
  // useMemo either sets the value cached initally to featuredHouse or the value
  // returned from the function call below which only gets fired when the value of allHouses changes
  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
  return featuredHouse;
};

export default useFeaturedHouses;
