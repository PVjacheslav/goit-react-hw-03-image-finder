// Імпортуємо axios для роботи з HTTP запитами
import axios from 'axios';

// Встановлюємо базовий URL для всіх запитів
axios.defaults.baseURL = 'https://pixabay.com/api/';

// Константа з API-ключем
const API_KEY = '39210182-6a28ff40429aa6ef86c4432d6'

// Константа що визначає кількість зображень на сторінці
export const perPage = 12;

// Функція для отримання зображень з API Pixabay
export const getImages = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
};
