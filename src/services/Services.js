import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://mangamint.kaedenoki.net/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  getMangas() {
    return apiClient.get("manga/page/1");
  },
  getGenreLists() {
    return apiClient.get("genres");
  },
  getMangaPopular(popularity) {
    return apiClient.get(`manga/${popularity}/1`);
  },
  getMangaGenre(genre) {
    return apiClient.get(`genres/${genre}/1`);
  },
  getMangaDetails(manga) {
    return apiClient.get("manga/detail/" + manga);
  },
};
