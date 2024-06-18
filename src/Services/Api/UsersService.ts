// services/roadService.ts
import axios from 'axios';
import { Response } from '../Interfaces/Interfaces';

const API_URL = 'https://the-road-api.onrender.com/api/users';

export const fetchUsers = async (): Promise<Response> => {
  const response = await axios.get(API_URL + '/getUsers');
  console.log(response);
  return response.data;
};
export const deleteUserById = async (id: string) => {
  try {
    const response = await axios.delete(API_URL + `/deleteUserById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error eliminando Usuario:', error);
  }
};