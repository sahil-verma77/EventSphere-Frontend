import axios from "axios";

const api = axios.create({
  baseURL: "https://eventsphere-server-mfdb.onrender.com",
});

api.interceptors.request.use(
  (req) => {
    req.headers.bankai = "Shatter Kyoka Suigetsu!" // Secrect Token
    return req;
  },
  (err) => {},
);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {},
);

export default api;
