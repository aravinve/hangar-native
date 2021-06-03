import axios from "axios";

const getBaseUrl = () => {
  switch (process.env.HANGAR_ENVIRONMENT) {
    case "local":
      return "http://localhost:5000/";
    case "dev":
      return "https://dev:5000/";
  }
};

export const AxiosClient = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-type": "application/json",
  },
});

export default { client: AxiosClient };
