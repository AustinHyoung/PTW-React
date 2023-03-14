import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app: any) {
  app.use(
    '/apis',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
}
