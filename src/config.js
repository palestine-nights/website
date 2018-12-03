function getPlacesHost() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://places.palestinenights.com';
  }
  return 'http://localhost:3000';
}

function getReservationHost() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.palestinenights.com';
  }
  return 'http://localhost:4000';
}

function getMenuHost() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.palestinenights.com';
  }
  return 'http://localhost:4000';
}

module.exports = {
  placesHost: getPlacesHost(),
  reservationHost: getReservationHost(),
  menuHost: getMenuHost(),
};
