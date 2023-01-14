import axios from "axios";

// export const ROOT_URL = `https://realstate-mvh39yci8-hasan0734.vercel.app/`;
// export const APP_URL = `https://realstate-mvh39yci8-hasan0734.vercel.app/`;
export const ROOT_URL = `http://localhost:3000/`;
export const APP_URL = `http://localhost:3000/`;
// export const IMAGE_URL = `${APP_URL}storage`;
export const API_URL = `${APP_URL}api/`;

const api = axios.create({
  baseURL: API_URL,
});

const authHeader = (token) => {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};
export const getData = async (endPoint) => {
  try {
    const { data } = await api.get(endPoint);
    return data;
  } catch (error) {
    return error;
  }
};
export const getDataWithReq = async (endPoint, reqData) => {
  try {
    const { data } = await api.post(endPoint, reqData);
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserData = async (endPoint, token) => {
  try {
    const { data } = await api.get(endPoint, {
      headers: authHeader(token),
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const postData = async (endPoint, formData, setDisable) => {
  try {
    const { data } = await api.post(endPoint, formData);
    setDisable(false);
    return data;
  } catch (error) {
    setDisable(false);
    return error;
  }
};

export const postReq = async (endPoint, formData) => {
  try {
    const { data } = await api.post(endPoint, formData);
    return data;
  } catch (error) {
    return error;
  }
};

export const authPost = async (endPoint, formData, token) => {
  try {
    const { data } = await api.post(endPoint, formData, {
      headers: authHeader(token),
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const updateData = async (endPoint, formData, token) => {
  try {
    const { data } = await axios.put(API_URL + endPoint, formData, {
      headers: authHeader(token),
    });
    return data;
  } catch (error) {
    return error;
  }
};

// export const updateUserInfo = async (endPoint, token) => {
//   console.log(token);
//   try {
//     const { data } = await api.put(API_URL + endPoint, {
//       headers: {
//         Authorization: `Bearer`,
//         "Content-Type": "application/json",
//       },
//     });
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

export const removeData = async (endPoint, token) => {
  try {
    const { data } = await axios.delete(API_URL + endPoint, {
      headers: authHeader(token),
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getFormData = async (key, data) => {
  // needed for images
  const formData = new FormData();
  for (let i = 0; i < key.length; i++) {
    formData.append(key[i], data[i]);
  }
  return formData;
};
