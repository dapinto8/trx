import axios from 'axios';

const { GRIDSOME_API_URL } = process.env;

export const signUp = async data => {
  return await axios.post(
    `${GRIDSOME_API_URL}/auth/local/register`,
    data
  );
};

export const signIn = async data => {
  return await axios.post(
    `${GRIDSOME_API_URL}/auth/local`,
    data
  );
};
