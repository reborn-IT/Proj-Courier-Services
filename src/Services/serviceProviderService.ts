import apiService from "./api/apiManager";

// type FormDataType = {
//   id: number;
//   name: string;
//   address: string;
//   website: string;
//   hotline: string;
//   description: string;
//   nearestBranch: string;
// };

const { backendAPIPath } = process.env;

class ServiceProviderService {
  apiService = apiService;

  async getAllServiceProviders() {
    return this.apiService.apiGET(
      `${backendAPIPath}/api/v1/user/view/serviceProvider`,
    );
  }
}

export default new ServiceProviderService();
