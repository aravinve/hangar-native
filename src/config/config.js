export const config = {
  baseURL: () => {
    switch (process.env.HANGAR_ENVIRONMENT) {
      case "local":
        return "http://localhost:5000/";
      case "dev":
        return "";
    }
  },
};
