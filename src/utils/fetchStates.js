const fetchStates = async () => {
  return fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
    .then((res) => res.json())
    .then((res) => res.states);
};

export default fetchStates;
