// services/roadService.ts
import axios from 'axios';
import { Response } from '../Interfaces/Interfaces';

const API_URL = 'https://the-road-api.onrender.com/api/activity/getAllActivities';

export const fetchActivities = async (): Promise<Response> => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};
