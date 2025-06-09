# DundeeScript June 2025 Meetup - Monorepo Demo

Welcome to the Monorepo Demo for the DundeeScript June 2025 Meetup. This repository showcases a monorepo setup using modern web technologies, including React, Vite, and Hono.

## Overview

This monorepo consists of multiple applications and packages designed to demonstrate a cohesive development setup using shared utilities and configurations. The main components include:

- **Admin App**: A React application built with Vite, serving as the administrative interface.
- **Ecommerce App**: A React application using Vite, providing an ecommerce platform.
- **API**: A server-side application using Hono to serve product data.

## Structure

- **apps/admin**: Contains the Admin application.
- **apps/ecommerce**: Contains the Ecommerce application.
- **apps/api**: Contains the API service.
- **packages/utils**: Shared utility functions used across applications.

## Getting Started

To set up the development environment, follow these steps:

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Run the development servers**:

   ```bash
   pnpm run dev
   ```

3. **Access the applications**:
   - Admin App: [http://localhost:3000](http://localhost:3000)
   - Ecommerce App: [http://localhost:3001](http://localhost:3001)
   - API: [http://localhost:8000](http://localhost:8000)

## Features

- **React + Vite**: Fast and modern development setup for React applications with hot module replacement.
- **Shared ESLint Configurations**: Consistent code quality tools across the codebase.
- **Reusable Utilities**: Shared utility functions to promote DRY principles.
- **Mock API Server**: Simulated backend using Hono for product management.

## Contributing

We welcome contributions to improve this demo setup. Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.

Join us for discussions and more at the DundeeScript June 2025 Meetup!

---
