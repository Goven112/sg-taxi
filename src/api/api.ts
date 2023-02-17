
import axios, { Canceler } from "axios";

import Constants from "../utilities/Constrans"

interface HttpResponse {
    headers: any;
    data: any;
  }

const get = async (
    url: string,
    data?: any,
    paramsSerializer?: any
  ): Promise<HttpResponse> => {
    const response = await axios.get( url, {
      params: data,
      paramsSerializer: paramsSerializer,
    });
    return response;
  };
  
  const post = async (url: string, data?: any) => {
    const response = await axios.post( url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  export default { get, post};