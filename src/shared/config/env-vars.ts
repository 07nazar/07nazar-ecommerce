const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }

  return import.meta.env[key];
};
export const APP_MODE = getEnvVar('VITE_APP_MODE');

export const API_URL = getEnvVar('VITE_API_URL');

export const isDevEnv = APP_MODE === 'development';
export const isProdEnv = APP_MODE === 'production';
