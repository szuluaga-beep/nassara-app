This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

This project follows the **Atomic Design** methodology for organizing components. For detailed information about the component structure, see [ATOMIC_DESIGN.md](./ATOMIC_DESIGN.md).

```
components/
├── atoms/       # Basic UI elements (buttons, inputs, labels)
├── molecules/   # Simple combinations of atoms (cards, fields, dialogs)
├── organisms/   # Complex sections (headers, footers, forms)
├── templates/   # Page layouts
└── pages/       # Complete page views
```

## Storybook

This project uses **Storybook** for component development, documentation, and testing. Storybook provides an isolated environment to develop and showcase UI components following the Atomic Design methodology.

### Running Storybook

```bash
# Start Storybook in development mode
pnpm run storybook

# Build Storybook for production
pnpm run build-storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006)

### Documentation

- **[STORYBOOK.md](./STORYBOOK.md)** - Complete guide on how to use Storybook and create component stories
- **[ATOMIC_DESIGN.md](./ATOMIC_DESIGN.md)** - Detailed explanation of the Atomic Design structure

### Features

- 📚 Interactive component documentation
- 🎨 Visual testing and development
- ♿ Accessibility checks with a11y addon
- 📖 Auto-generated documentation
- 🎭 Multiple component variants and states

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
