function getPlacesHost() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://places.palestinenights.com';
  }
  return 'http://localhost:3000';
}

function apiHost() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.palestinenights.com';
  }
  return 'http://localhost:4000';
}

module.exports = {
  placesHost: getPlacesHost(),
  apiHost: apiHost(),
};
