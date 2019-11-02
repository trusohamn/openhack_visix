import React, { useEffect } from "react";

export default ({ country }) => {
  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <div className="Details">
      <h1>{country}</h1>
    </div>
  );
};
