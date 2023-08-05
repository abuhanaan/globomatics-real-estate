import React from "react";
import { useParams } from "react-router-dom";
import SearchResultsRow from "./search-results-row";
import { useContext } from "react";
import HousesContext from "../contexts/housesContext";

const SearchResults = () => {
  const allHouses = useContext(HousesContext);
  const country = useParams();
  const filteredHouses = allHouses.filter((h) => h.country === country);

  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((h) => (
            <SearchResultsRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
