const baseUrl = (process.env.GALAXY_DOCS_URL || 'https://galaxy-design.vercel.app').replace(
  /\/$/,
  '',
);

const routes = [
  '/',
  '/guide/installation',
  '/guide/tailwind',
  '/components/button',
  '/schema.json',
];

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`, { redirect: 'follow' });
  if (!response.ok) {
    throw new Error(`${route} returned HTTP ${response.status}`);
  }

  if (route === '/schema.json') {
    const schema = await response.json();
    if (schema.title !== 'Galaxy UI Configuration') {
      throw new Error('/schema.json did not return the Galaxy UI schema');
    }
  }

  console.log(`PASS ${route} (${response.status})`);
}

console.log(`Production smoke passed for ${baseUrl}`);
