interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_NODE_ENV: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
