import devEnv from "./dev.json";

type IConfig = {
  API_KEY: string;
};

export default function config(): IConfig {
  return devEnv;
}
