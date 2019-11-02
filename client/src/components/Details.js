import React from "react";

const removeKeys = ["CountryCode", "Country Name", "investment"];

export default ({ countryCode, data }) => {
  const countryData = data.find(country => country.CountryCode === countryCode);
  return (
    (countryCode && countryData && countryData["Country Name"] && (
      <div className="content Details">
        <h3>{countryData["Country Name"]}</h3>
        <table>
          {Object.keys(countryData)
            .filter(key => !removeKeys.includes(key))
            .map(key => (
              <tr>
                <td>{key}</td>
                <td>{Number(countryData[key]).toFixed(2)}</td>
              </tr>
            ))}
        </table>
      </div>
    )) ||
    null
  );
};
