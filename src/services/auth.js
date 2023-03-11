import {
  getService,
  postService,
  patchService,
  deleteService,
} from "../https/api";
// all auth api call
const userRegistration = async (userData) => {
  const response = await postService("/addNewUserData");
  return response;
};
const userLoginValidate = (email, password) => {};
const checkUserRole = (email) => {};

export default {
  userRegistration,
  checkUserRole,
  userLoginValidate,
};
