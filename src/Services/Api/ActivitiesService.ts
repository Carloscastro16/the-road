// services/roadService.ts
import axios from 'axios';
import { Response } from '../Interfaces/Interfaces';

const API_URL = 'https://the-road-api.onrender.com/api/activity';

export const fetchActivities = async (): Promise<Response> => {
  const response = await axios.get(API_URL + '/getAllActivities');
  console.log(response);
  return response.data;
};
export const deleteActivityById = async (id: string) => {
  try {
    const response = await axios.delete(API_URL + `/deleteActivityById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error eliminando actividad:', error);
  }
};