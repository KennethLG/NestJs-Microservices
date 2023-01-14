import { registerAs } from '@nestjs/config';

export default registerAs('AppConfig', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  endpoints: {
    db: {
      getAll: process.env.ENDPOINT_TODODB_GET,
      create: process.env.ENDPOINT_TODODB_CREATE,
    },
  },
}));
