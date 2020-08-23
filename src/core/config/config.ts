import devEnv from "./dev.json";

type IConfig = {
  API_KEY: string;
  timeout: number;
  baseURL: string;
};

const config: IConfig = devEnv;
export default config;
