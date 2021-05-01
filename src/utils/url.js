export const generateQueryString = (data) => {
  return Object.entries(data)
    .map(([k, v]) => (v.trim().length > 0 ? `${k}=${v}` : ""))
    .join("&");
};

export const parseQueryString = (s) => {
  const obj = {};
  if (s.length <= 1) {
    return { state: "21", district: "363", age: "21" };
  }

  const queryStringParams = s.slice(1).split("&");
  queryStringParams.forEach((s) => {
    if (s.trim().length === 0) return;
    const [k, v] = s.split("=");
    if (v.trim().length > 0) obj[k] = v;
  });

  return obj;
};
