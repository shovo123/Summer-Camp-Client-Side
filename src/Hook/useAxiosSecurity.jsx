import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecurity = axios.create({
  baseURL: 'https://summer-camp-sever.vercel.app', 
});

const useAxiosSecurity = () => {
  const { logOutUser } = useAuth(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecurity.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecurity.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOutUser();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOutUser, navigate]);

  return [axiosSecurity];
};

export default useAxiosSecurity;

