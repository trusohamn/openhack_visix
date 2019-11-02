import React, { useEffect } from "react";

export default ({ country }) => {
  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <div className="content Details">
      <h3>{country}</h3>
    </div>
  );
};
