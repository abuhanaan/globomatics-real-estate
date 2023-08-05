import React from "react";
import House from "../house";

const FeaturedHouse = ({ house }) => {
  if (house)
    return (
      <div>
        <div className="row featuredHouse">
          <div className="col-md-12 text-center">Featured House</div>
        </div>
        <House house={house} />
      </div>
    );
  return <div>No Featured House At The Moment</div>;
};

export default FeaturedHouse;
