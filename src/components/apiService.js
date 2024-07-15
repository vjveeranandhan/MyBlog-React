import axios from 'axios';  

const apiClient = axios.create({
  baseURL: 'http://34.228.57.209:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// apiClient.interceptors.request.use(
//   (config) => {
//     // Modify headers to include CORS
//     config.headers['Access-Control-Allow-Origin'] = 'http://3.91.56.27:3000';
//     config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
//     config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const ApiService = {

    register(endpoint, data) {
        console.log("Inside login ", endpoint)
        return apiClient.post(endpoint, data);
        },

    logout(endpoint, token) {
        // console.log("token : ", token)
        return apiClient.post(endpoint, null, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
      },

    all_blogs: async (endpoint, token) => {
      // console.log("Inside all_blogs : ", token);
      try {
          const response = await apiClient.get(endpoint, {
              headers: {
                  Authorization: `Token ${token}`,
              },
          });
          return response.data;
      } catch (error) {
          throw error; // Ensure errors are propagated
      }
    },

    my_blogs: async (endpoint, authorId,token) => {
      // console.log("Inside my_blogs : ", token);  
      // console.log("Inside authorId : ", authorId);  
      try {
          const response = await apiClient.get(endpoint,{
              params: {
                  author_id: authorId,  // Pass author_id as a query parameter
              },
              headers: {
                  Authorization: `Token ${token}`,
              },
          });
          return response.data;
      } catch (error) {
          throw error; // Ensure errors are propagated
      }
    },

    view_blog: async (endpoint,token, blog_id) => {
      // console.log("Inside my_blogs : ", token);  
      // console.log("Inside blog_id : ", blog_id);  
      try {
          const response = await apiClient.get(endpoint,{
              params: {
                  id: blog_id,  // Pass author_id as a query parameter
              },
              headers: {
                  Authorization: `Token ${token}`,
              },
          });
          return response.data;
      } catch (error) {
          throw error; // Ensure errors are propagated
      }
    },

    create_blog: async (endpoint, formData, token) => {
      // console.log("Inside my_blogs : ", token);  
      // console.log("Inside formData : ", formData);  
      try {
        const response = await axios.post(endpoint, formData, {
          baseURL: 'http://34.228.57.209:8000',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          },
        });
        return response.data;
      } catch (error) {
          throw error; // Ensure errors are propagated
      }
    },

    create_comment: async (endpoint, formData, token) => {
      console.log("Inside create_comment token : ", token);  
      console.log("Inside create_comment formData : ", formData);  
      try {
        const response = await axios.post(endpoint, formData, {
          baseURL: 'http://34.228.57.209:8000',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          },
        });
        return response.data;
      } catch (error) {
          throw error; // Ensure errors are propagated
      }
    },

    put(endpoint, data) {
        return apiClient.put(endpoint, data);
        },

    delete(endpoint) {
        return apiClient.delete(endpoint);
        },
};

export default ApiService;
