import React, { useEffect } from "react";

export default ({ data }) => {
  
  const mostCorrupted = data.sort((c1, c2) => c1.corruption <= c2.corruption ? 1 : -1).slice(0,5)
  const mostInvested = data.sort((c1, c2) => c1.investment <= c2.investment ? 1 : -1).slice(0,5)
  const lessInvested = data.sort((c1, c2) => c1.investment >= c2.investment ? 1 : -1).slice(0,5)

  return (
    <div className="content Stats">
      most corrupted
      <ul>
      {mostCorrupted.map(country => <li>{country.Name}</li>)}
      </ul>
      most invested
      <ul>
      {mostInvested.map(country => <li>{country.Name}</li>)}
      </ul>
      least invested
      <ul>
      {lessInvested.map(country => <li>{country.Name}</li>)}
      </ul>
    </div>
  );
};
