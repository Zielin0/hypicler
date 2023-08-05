declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HYPIXEL_API_KEY: string;
      ENVIRONMENT: 'DEV' | 'PROD';
    }
  }
}

export {};
