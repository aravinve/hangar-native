import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: getBaseUrl,
});

const getBaseUrl = () => {
  switch (process.env.HANGAR_ENVIRONMENT) {
    case ("local", ""):
      return "http://localhost:5000/";
    case "dev":
      return "";
  }
};
