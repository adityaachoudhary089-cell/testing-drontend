
import axios from 'axios';


const appStoreAPI = axios.create({
  baseURL: import.meta.env.VITE_APPSTORE_API_URL || 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' }
});

export const appStoreService = {
  getDistributions: async () => {
    const response = await appStoreAPI.get('/api/distributions');
    return response.data;
  },
  
  getApps: async () => {
    const response = await appStoreAPI.get('/api/apps');
    return response.data;
  },
  
  generateScript: async (distro, apps) => {
    const response = await appStoreAPI.post('/api/generate-script', { 
      distro, 
      apps 
    });
    return response.data;
  }
};

export default appStoreService;
