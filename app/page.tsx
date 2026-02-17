export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js Marketplace Boilerplate
        </h1>
        <p className="text-center text-lg mb-4">
          Production-ready marketplace platform built with Next.js 14
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Next.js 14</h2>
            <p className="text-sm">App Router & Server Components</p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">TypeScript</h2>
            <p className="text-sm">Type-safe development</p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">TailwindCSS</h2>
            <p className="text-sm">Modern styling framework</p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">PostgreSQL</h2>
            <p className="text-sm">Powerful database with Prisma ORM</p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">NextAuth.js</h2>
            <p className="text-sm">Secure authentication</p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Ready to Deploy</h2>
            <p className="text-sm">Optimized for Vercel</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Get started by editing <code className="font-mono font-bold">app/page.tsx</code>
          </p>
        </div>
      </div>
    </main>
  )
}
