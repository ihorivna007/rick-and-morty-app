import {request} from './request';

export const getCharacters = () => {
  return request('/api/character');
};
