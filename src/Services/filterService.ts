import apiService from "./api/apiManager";

type FormDataType = {
  natures: string[];
  weight: number;
  parcelCount: number;
  existingPickupId?: number;
  pickupAddress?: string;
  pickupCoordinates?: { latitude: number; longitude: number };
  existingDestinationId?: number;
  destinationAddress?: string;
  destinationCoordinates?: { latitude: number; longitude: number };
  scheduled: boolean;
  immediateCourier: boolean;
  costType: string;
};

class FilterDataService {
  apiService = apiService;

  async getNatures() {
    return this.apiService.apiGET("/filter/nature");
  }

  async getPickupPoints() {
    return this.apiService.apiGET("/filter/pickuppoints");
  }

  async getDestinationPoints() {
    return this.apiService.apiGET("/filter/destinationpoints");
  }

  async getExistingTitles() {
    return this.apiService.apiGET("/filter/existingtitles");
  }

  async postTitle(title: { title: string }) {
    return this.apiService.apiPOST("/filter/createtitle", title);
  }

  async postData(formData: FormDataType) {
    return this.apiService.apiPOST("/filer/search", formData);
  }
}

export default new FilterDataService();
