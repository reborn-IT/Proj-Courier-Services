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

const server = process.env.SERVER_URL;

class ServiceProviderService {
  apiService = apiService;

  async getAllServiceProviders() {
    // eslint-disable-next-line no-console
    console.log(server);
    return this.apiService.apiGET(`${server}/user/view/serviceProvider`);
  }
}

export default new ServiceProviderService();
