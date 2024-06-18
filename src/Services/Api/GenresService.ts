// services/roadService.ts
import axios from 'axios';
import { Response } from '../Interfaces/Interfaces';

const API_URL = 'https://the-road-api.onrender.com/api/genre';

export const fetchGenres = async (): Promise<Response> => {
  const response = await axios.get(API_URL + '/getAllGenres');
  console.log(response);
  return response.data;
};

export const deleteGenreById = async (id: string) => {
  try {
    const response = await axios.delete(API_URL + `/deleteGenreById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error eliminando Genero:', error);
  }
};