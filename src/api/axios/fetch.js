import http from ".";

export const fetchRequest = async ({
  url,
  type = "get",
  body,
  query,
  token,
}) => {
  let res;
  const config = token ? { Authorization: `Bearer ${token}` } : {};

  switch (type) {
    case "get":
      res = await http.get(url, { params: { ...query }, ...config });
      break;
    case "post":
      res = await http.post(url, body, { params: { ...query }, ...config });
      break;
    case "put":
      res = await http.put(url, body, { params: { ...query }, ...config });
      break;
    case "patch":
      res = await http.patch(url, body, { params: { ...query } });
      break;
    case "delete":
      res = await http.delete(url);
      break;
    default:
      throw new Error(`Invalid request type: ${type}`);
  }
  return res;
};

