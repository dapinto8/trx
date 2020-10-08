import axios from 'axios';

const { GRIDSOME_API_URL } = process.env;

export const signUp = async data => {
  return await axios.post(
    `${'http://localhost:1337'}/auth/local/register`,
    data
  );
};

export const signIn = async data => {
  return await axios.post(
    `${'http://localhost:1337'}/auth/local`,
    data
  );
};
