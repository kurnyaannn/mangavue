import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://mangamint.kaedenoki.net/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default {
  getMangas(page) {
    return apiClient.get(`manga/page/${page}`);
  },
  getGenreLists() {
    return apiClient.get("genres");
  },
  getMangaPopular(popularity, page) {
    return apiClient.get(`manga/${popularity}/${page}`);
  },
  getMangaRecommended() {
    return apiClient.get("recommended");
  },
  getMangaGenre(genre) {
    return apiClient.get(`genres/${genre}/1`);
  },
  getMangaDetails(manga) {
    return apiClient.get(`manga/detail/${manga}`);
  },
  getMangaChapter(chapter) {
    return apiClient.get(`chapter/${chapter}`);
  },
  getMangaSearch(query) {
    return apiClient.get(`search/${query}`);
  }
};
