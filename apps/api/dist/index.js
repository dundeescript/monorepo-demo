import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
const app = new Hono();
app.use('/api/*', cors());
app.get('/', (c) => {
    return c.text('Hello Hono!');
});
app.get('/api/products', (c) => {
    return c.json([
        { id: 1, name: 'Laptop', price: 999.99 },
        { id: 2, name: 'Phone', price: 499.99 },
    ]);
});
serve({
    fetch: app.fetch,
    port: 8000
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
