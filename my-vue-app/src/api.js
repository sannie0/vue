import axios from 'axios';


export const RegisterUser = async (userName, password) => {// отправка запроса на создание чата
  if (!userName || !password) {
    throw new Error("Имя пользователя и пароль не могут быть пустыми.");
  }
  try {
    const response = await axios.post('https://localhost:7115/api/User/RegisterUser', { userName, password });
    return response;
  } catch (error) {
    throw new Error("Ошибка при создании чата: " + error.response.data);
  }
};

export const LoginUser = async (userName, password) => {// отправка запроса на создание чата
  if (!userName || !password) {
    throw new Error("Имя пользователя и пароль не могут быть пустыми.");
  }
  try {
    const response = await axios.post('https://localhost:7115/api/User/LoginUser', { userName, password });
    return response;
  } catch (error) {
    throw new Error("Ошибка при создании чата: " + error.response.data);
  }
};