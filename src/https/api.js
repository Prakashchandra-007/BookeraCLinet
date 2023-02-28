const ENDPOINT = "http://localhost:5000/api";

export const getService = async (url, params) => {
  try {
    const response = await fetch(`${ENDPOINT}${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postService = async (url, params) => {
  console.log(params, "api file");
  const response = await fetch(`${ENDPOINT}${url}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(params),
    redirect: "follow",
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  console.log(response);
  const data = await response.json();
  return data;
};
export const deleteService = async (id, params) => {
  const response = await fetch(`${ENDPOINT}/deleteBook/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  console.log(response);
  const data = await response.json();
  return data;
};

export const patchService = async (url, params) => {
  const response = await fetch(`${ENDPOINT}/${url}`, {
    method: "PATCH", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(params),
    redirect: "follow",
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  console.log(response);
  const data = await response.json();
  return data;
};

export default {
  postService,
  patchService,
  getService,
  deleteService,
};
