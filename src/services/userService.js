import axios from 'axios';

const { GRIDSOME_API_URL } = process.env;

export const getUser = async (jwt) => {
  return await axios.get(
    `${GRIDSOME_API_URL}/users/me`,
    { 
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }
  );
};

export const updateUser = async (id, data, jwt) => {
  return await axios.put(
    `${GRIDSOME_API_URL}/users/${id}`,
    data,
    { 
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }
  );
};