import axios from "axios";

const apiKey = "0VujpKnU1q8u6TUTEPLv1QwzzDEd8Hobm6TwJQoTvQc";

axios.defaults.baseURL = "https://api.unsplash.com/";

export default function getPhotos(query, page, perPage) {
  try {
    const result = axios.get(
      `search/photos?client_id=${apiKey}&query=${query}&page=${page}&per_page=${perPage}&content_filter=high`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}
