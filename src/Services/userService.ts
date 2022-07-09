/* eslint-disable comma-dangle */
import apiService from "./api/apiManager";

type RolePublicUser = "ROLE_PUBLIC_USER";

type FormDataType = {
  role: RolePublicUser;
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  email: string;
  postAddress?: string;
  password: string;
};

const { backendAPIPath } = process.env;

class UserService {
  apiService = apiService;

  async registerUser(formData: FormDataType) {
    return this.apiService.apiPOST(
      `${backendAPIPath}/user/registration`,
      formData,
    );
  }

  async loginUser(formData: FormDataType) {
    return this.apiService.apiPOST(`${backendAPIPath}/user/login`, formData);
  }

  async getUser(userID: string) {
    return this.apiService.apiGET(`${backendAPIPath}/user/${userID}`);
  }
}

export default new UserService();
