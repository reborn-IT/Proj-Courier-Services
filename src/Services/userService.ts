/* eslint-disable comma-dangle */
import apiService from './api/apiManager';

type ROLE_PUBLIC_USER = 'ROLE_PUBLIC_USER';

type FormDataType = {
  role: ROLE_PUBLIC_USER;
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
      formData
    );
  }

  async loginUser(formData: FormDataType) {
    return this.apiService.apiPOST(
      `${backendAPIPath}/user/login`,
      formData
    );
  }

  async getUser(userid: string) {
    return this.apiService.apiGET(`${backendAPIPath}/user/${userid}`);
  }
}

export default new UserService();
