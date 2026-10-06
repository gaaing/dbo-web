export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetUrl = `https://dbo-account-api.hoipoi.workers.dev${url.pathname}${url.search}`;

  const newRequest = new Request(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
    redirect: 'follow'
  });

  return fetch(newRequest);
}
