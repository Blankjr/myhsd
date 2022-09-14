import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(
    '/.well-known/acme-challenge',
    createProxyMiddleware({
      target: 'http://letsencrypt',
      changeOrigin: true,
      autoRewrite: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
