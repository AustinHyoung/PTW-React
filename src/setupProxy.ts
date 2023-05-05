import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app: any) {
  app.use(
    '/apis',
    createProxyMiddleware({
      target: `${process.env.API_URL}`,
      changeOrigin: true,
    }),
  );
}
