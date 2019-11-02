import React, { useEffect } from "react";

const SingleStat = ({ data, label }) => {
  const name = "Country Name";
  return (
    <div className="SingleStat">
      <h5>{label}</h5>
      <ul>
        {data.map(country => (
          <li>{country[name]}</li>
        ))}
      </ul>
    </div>
  );
};

export default ({ data }) => {
  const corruption = "Corruption risks";

  const mostCorrupted = data
    .sort((c1, c2) => (c1[corruption] <= c2[corruption] ? 1 : -1))
    .slice(0, 5);
  const mostInvested = data
    .sort((c1, c2) => (c1.investment <= c2.investment ? 1 : -1))
    .slice(0, 5);
  const lessInvested = data
    .sort((c1, c2) => (c1.investment >= c2.investment ? 1 : -1))
    .slice(0, 5);

  return (
    <div className="content Stats">
      <SingleStat data={mostCorrupted} label="Highest corruption" />
      <SingleStat data={mostInvested} label="Highest investment" />
      <SingleStat data={lessInvested} label="Lowest investment" />
    </div>
  );
};
