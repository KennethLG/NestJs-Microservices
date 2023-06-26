import { registerAs } from '@nestjs/config';

export default registerAs('AppConfig', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  endpoints: {
    todo: {
      getAll: process.env.ENDPOINT_TODODB_GET || "",
      create: process.env.ENDPOINT_TODODB_CREATE || "",
    },
    user: {
      findByUsername: process.env.ENDPOINT_TODODB_USER_FINDBYUSERNAME || ""
    }
  },
}));
