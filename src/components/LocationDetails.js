import React from "react";
import PropTypes from "prop-types";

function LocationDetails({ city, country, errorMessage }) {
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
}

export default LocationDetails;
LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
