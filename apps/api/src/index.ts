import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()
const tempStore = new Map<string, string>();

app.use('/api/*', cors())

const productsStorageKey = 'products'

const initialProducts = [
  { id: 1, name: 'Laptop', price: 999.99, stock: 0, description: 'Laptop is a portable personal computer designed for mobile use.', image: `https://picsum.photos/150?${Math.random()}` },
  { id: 2, name: 'Phone', price: 499.99, stock: 50, description: 'Phone is a portable phone designed for mobile use.', image: `https://picsum.photos/150?${Math.random()}` },
  { id: 3, name: 'Tablet', price: 299.99, stock: 30, description: 'Tablet is a touch-sensitive computer designed for reading, browsing, and watching.', image: `https://picsum.photos/150?${Math.random()}` },
  { id: 4, name: 'Monitor', price: 199.99, stock: 40, description: 'Monitor is a display device for a computer.', image: `https://picsum.photos/150?${Math.random()}` },
  { id: 5, name: 'Keyboard', price: 49.99, stock: 100, description: 'Keyboard is an input device for typing on a computer.', image: `https://picsum.photos/150?${Math.random()}` },
]

app.get('/', (c) => {
  return c.text('Hello from Hono api!')
})

app.get('/api/products', (c) => {
  const products = JSON.parse(tempStore.get(productsStorageKey) || '[]')
  return c.json(products)
})

app.delete('/api/products/:id', (c) => {
  const id = c.req.param('id');
  const products = JSON.parse(tempStore.get(productsStorageKey) || '[]');
  const newProducts = products.filter(item => item.id !== Number(id));
  tempStore.set(productsStorageKey, JSON.stringify(newProducts));
  return c.json(newProducts);
})

app.post('/api/products', async (c) => {
  const body = await c.req.json()

  const products = JSON.parse(tempStore.get(productsStorageKey) || '[]')
  const newProduct = {
    id: products.length + 1,
    name: body?.name || "Product " + (products.length + 1),
    description: 'A randomly generated product description.',
    price: body?.price || Math.floor(Math.random() * 1000),
    stock: body?.stock || Math.floor(Math.random() * 100),
    image: `https://picsum.photos/150?${Math.random()}`
  }
  products.push(newProduct)
  tempStore.set(productsStorageKey, JSON.stringify(products))
  return c.json(newProduct)
})

serve({
  fetch: app.fetch,
  port: 8000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
  tempStore.set(productsStorageKey, JSON.stringify(initialProducts))
})

