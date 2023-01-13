import { registerAs } from '@nestjs/config';

export default registerAs('AppConfig', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  endpoints: {
    db: {
      getTodos: process.env.ENDPOINT_DB_GET_TODOS,
    },
  },
}));
