import { registerAs } from '@nestjs/config';

export default registerAs('AppConfig', () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  db: {
    url: process.env.DATABASE_URL || ''
  }
}));
