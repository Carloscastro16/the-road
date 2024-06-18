// services/roadService.ts
import axios from 'axios';
import { Response } from '../Interfaces/Interfaces';

const API_URL = 'https://the-road-api.onrender.com/api/genre/getAllGenres';

export const fetchGenres = async (): Promise<Response> => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};
