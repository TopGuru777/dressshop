import { cache } from 'swr';
import '@testing-library/jest-dom/extend-expect';

import { server } from './test/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  cache.clear();
});

// necessary for next/image

process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['res.cloudinary.com', 'placeimg.com'],
    path: '/_next/image',
    loader: 'default',
  },
} as any;

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
