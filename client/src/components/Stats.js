import React from "react";

const SingleStat = ({ data, label, displayDetails }) => {
  const name = "Country Name";
  return (
    <div className="SingleStat">
      <h5>{label}</h5>
      <ul>
        {data.map(country => (
          <li
            onClick={() =>
              displayDetails(
                data.find(countryData => countryData[name] === country[name])
                  .CountryCode
              )
            }
          >
            {country[name]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ({ data, displayDetails }) => {
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
      <SingleStat
        displayDetails={displayDetails}
        data={mostCorrupted}
        label="Highest corruption"
      />
      <SingleStat
        displayDetails={displayDetails}
        data={mostInvested}
        label="Most aid received"
      />
      <SingleStat
        displayDetails={displayDetails}
        data={lessInvested}
        label="Least aid received"
      />
    </div>
  );
};
