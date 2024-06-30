import type {EntryContext} from '@shopify/remix-oxygen';
import {RemixServer} from '@remix-run/react';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const {nonce, header, NonceProvider} = createContentSecurityPolicy({
    scriptSrc: [
      'https://cdn.shopify.com',
      'https://shopify.com',
      'http://localhost:*',
      'https://www.gstatic.com',
    ],
    imgSrc: [
      "'self'",
      'https://image.mux.com',
      'data:',
      'https://images.unsplash.com',
      'https://cloudflare-ipfs.com',
      'https://avatars.githubusercontent.com',
      'https://ipfs.io',
    ],
    mediaSrc: [
      "'self'",
      'http://localhost:3000',
      'https://image.mux.com',
      'blob:',
    ],
    connectSrc: [
      "'self'",
      'https://monorail-edge.shopifysvc.com',
      'http://localhost:*',
      'ws://localhost:*',
      'ws://127.0.0.1:*',
      'ws://*.tryhydrogen.dev:*',
      'https://inferred.litix.io',
      'https://stream.mux.com',
      'https://*.cfcdn.mux.com',
      'https://*.fastly.mux.com',
    ],
  });

  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
