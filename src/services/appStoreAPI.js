// import axios from 'axios';

// // Linux App Store API (separate server on port 3000)
// const appStoreAPI = axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: { 'Content-Type': 'application/json' }
// });

// // Linux App Store endpoints
// export const appStoreService = {
//   // Get distributions
//   getDistributions: async () => {
//     const response = await appStoreAPI.get('/api/distributions');
//     return response.data;
//   },
  
//   // Get apps
//   getApps: async () => {
//     const response = await appStoreAPI.get('/api/apps');
//     return response.data;
//   },
  
//   // Generate installation script
//   generateScript: async (distro, apps) => {
//     const response = await appStoreAPI.post('/api/generate-script', { 
//       distro, 
//       apps 
//     });
//     return response.data;
//   }
// };

// export default appStoreService;





import axios from 'axios';

// Use environment variable for App Store API
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
