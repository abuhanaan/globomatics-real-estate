import { useNavigate } from "react-router-dom";

const HouseFilter = ({ allHouses }) => {
  const history = useNavigate();
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];
  countries.unshift(null);

  const onSearchChange = (e) => {
    const country = e.target.value;
    history.push(`/searchresults/${country}`);
  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select">
          {countries.map((c) => {
            return (
              <option key={c} value={c} onChange={onSearchChange}>
                {c}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
