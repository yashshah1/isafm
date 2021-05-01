const fetchDistricts = async (id) => {
  return fetch(
    `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
  )
    .then((res) => res.json())
    .then((res) => res.districts);
};

export default fetchDistricts;
