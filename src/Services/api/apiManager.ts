/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { networkError } from '../../Utils/constants';

export interface ResponseObject {
    data?: any;
    status?: number;
    token?:string;
    refreshToken?: string;
    errorCode?: number;
    errorMessage?: string;
}

const errorHandling = (error: any) => {
  const { response } = error;
  const errorObject: ResponseObject = {};
  if (response && response.status === 401) {
    // eslint-disable-next-line no-console
    console.log(response);
    errorObject.status = 401;
    errorObject.errorCode = error.response.data?.errorCode;
    errorObject.errorMessage = error.response.data?.message;
    errorObject.data = {};
  } else {
    errorObject.status = 408;
    errorObject.errorMessage = networkError;
  }
};

const responseHandling = (response: AxiosResponse) => {
  const responseObject: ResponseObject = {
    data: response.data,
    status: response.status,
    token: response.headers.autherization,
    refreshToken: response.headers.refreshtoken,
  };
  return responseObject;
};

class APIService {
  http = axios.create({
    baseURL: process.env.baseUrl,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
    },
  });

  async apiGET(path: string) {
    const response = await this.http
      .get(path)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));
    return response;
  }

  async apiPOST(path: string, body: Record<string, unknown>) {
    const json = JSON.stringify(body);
    const response = await this.http
      .post(path, json)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));
    return response;
  }

  async apiPUT(path: string, id: any, body: Record<string, unknown>) {
    const json = JSON.stringify(body);
    const response = await this.http
      .put(`${path}/${id}`, json)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));
    return response;
  }

  async apiPutPathParam(path: string, body: Record<string, unknown>) {
    const json = JSON.stringify(body);
    const response = await this.http
      .put(path, json)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));
    return response;
  }

  async apiDelete(path: string, id: number) {
    const response = await this.http
      .delete(`${path}/${id}`)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));
    return response;
  }
}

export default new APIService();
