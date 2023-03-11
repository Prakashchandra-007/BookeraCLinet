import {
  getService,
  postService,
  patchService,
  deleteService,
} from "../https/api";
// all api book related api call
const getAllBooks = async () => {
  // getService();
  const response = getService("");
  return response;
};
const getBookByID = async (bookId) => {
  const response = getService("");
  return response;
};
const subscribe = async () => {
  const response = patchService("");
  return response;
};

export default { subscribe, getBookByID, getAllBooks };
