import { AxiosError } from "axios";
import Constants from "../utilities/Constrans"
 
import api from "./api";
 

const dataURLtoFile = (dataurl: string, filename: string) => {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let { length } = bstr;
  const u8arr = new Uint8Array(length);

  while (length !== -1) {
    u8arr[length] = bstr.charCodeAt(length);
    length -= 1;
  }

  return new File([u8arr], filename, { type: mime });
};

export const getClubById = async (id: number) => {
  return await api.get(`Club/Profile/${id}`, id).catch((error) => {
    throw new Error(error);
  });
};

export const createOrder = async (data: any) => {
  return api.post(Constants.API_URL_CREATE_POST, data).catch((error) => {
    throw new Error(error);
  });
};

export const getClubs = async () => {
  return api.get(`Club/Clubs`);
};

export default {
  getClubs,
  createOrder
};
