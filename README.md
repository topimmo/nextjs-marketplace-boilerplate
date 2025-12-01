<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=Next.js%20Marketplace%20Boilerplate&fontSize=42&fontColor=fff&animation=twinkling&fontAlignY=32" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&multiline=true&repeat=true&width=800&height=100&lines=Production-Ready+Marketplace+Platform;Next.js+14+%7C+TypeScript+%7C+PostgreSQL;Built+by+VertexElite" alt="Typing SVG" />

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🚀 About This Project

A **production-ready, full-stack marketplace boilerplate** built with modern technologies and best practices. This starter kit has powered **real-world platforms serving 50,000+ users** across multiple countries.

Perfect for building:
- 🏪 **Classifieds Platforms** (Jobs, Real Estate, Vehicles)
- 🛍️ **E-commerce Marketplaces**
- 💼 **Service Marketplaces** (Freelancers, Professionals)
- 🎫 **Booking Platforms** (Events, Appointments)
- 🏢 **B2B Platforms**

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## ✨ Features

### 🎨 Frontend
- ⚡ **Next.js 14** with App Router & Server Components
- 🎯 **TypeScript** for type safety
- 💅 **TailwindCSS** for styling
- 🎭 **Shadcn/ui** components
- 📱 **Fully Responsive** mobile-first design
- 🌙 **Dark Mode** support
- 🌍 **Multi-language** support (i18n)

### 🔐 Authentication & Security
- 🔑 **NextAuth.js** with multiple providers
- 👤 **User Roles** (Admin, Seller, Buyer)
- 🛡️ **Protected Routes**
- 📧 **Email Verification**
- 🔒 **Password Reset Flow**
- 🚫 **Rate Limiting**

### 💾 Database & Backend
- 🐘 **PostgreSQL** with Prisma ORM
- 📝 **Type-safe Database Queries**
- 🔄 **Database Migrations**
- 💪 **Optimized Queries**
- 🗄️ **Efficient Indexing**

### 🖼️ Media & Storage
- ☁️ **Cloudinary Integration**
- 📸 **Image Upload & Optimization**
- 🎬 **Video Support**
- 🗂️ **File Management**

### 🔍 Search & Filters
- 🔎 **Full-text Search**
- 📍 **Location-based Filtering**
- 🏷️ **Category System**
- 💰 **Price Range Filters**
- 📊 **Advanced Sorting**

### 📧 Communication
- ✉️ **Email Integration** (Nodemailer)
- 💬 **In-app Messaging**
- 📱 **WhatsApp Integration**
- 🔔 **Push Notifications**
- 📨 **Email Templates**

### 🤖 AI Features
- 🧠 **AI Content Moderation**
- 🎯 **Smart Categorization**
- 💡 **Auto-suggestions**
- 🔍 **Duplicate Detection**

### 📊 Analytics & SEO
- 📈 **Google Analytics**
- 🎯 **SEO Optimized**
- 🗺️ **Dynamic Sitemaps**
- 🏷️ **Meta Tags**
- 📱 **Social Sharing**
- 🔗 **Schema Markup**

### ⚙️ Admin Panel
- 📊 **Dashboard with Analytics**
- 👥 **User Management**
- 📝 **Content Moderation**
- 💳 **Payment Tracking**
- 📈 **Reports & Insights**

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🏗️ Tech Stack

```yaml
Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: TailwindCSS + Shadcn/ui
Database: PostgreSQL
ORM: Prisma
Authentication: NextAuth.js
Image Storage: Cloudinary
Email: Nodemailer
Deployment: Vercel / PM2 + Nginx
CDN: Cloudflare
Analytics: Google Analytics
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm/yarn/pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/maxtors-debug/nextjs-marketplace-boilerplate.git
cd nextjs-marketplace-boilerplate
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/marketplace"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Email (SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

4. **Set up the database**
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed database (optional)
npx prisma db seed
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 📁 Project Structure

```
nextjs-marketplace-boilerplate/
├── app/                      # Next.js 14 App Directory
│   ├── (auth)/              # Authentication routes
│   ├── (dashboard)/         # Dashboard routes
│   ├── api/                 # API routes
│   ├── categories/          # Category pages
│   ├── listings/            # Listing pages
│   └── layout.tsx           # Root layout
├── components/              # React components
│   ├── ui/                  # Shadcn/ui components
│   ├── layout/              # Layout components
│   ├── forms/               # Form components
│   └── shared/              # Shared components
├── lib/                     # Utility functions
│   ├── auth.ts             # Authentication utilities
│   ├── db.ts               # Database client
│   ├── email.ts            # Email utilities
│   └── utils.ts            # General utilities
├── prisma/                  # Database schema & migrations
│   ├── schema.prisma       # Prisma schema
│   ├── migrations/         # Database migrations
│   └── seed.ts             # Database seeder
├── public/                  # Static assets
├── types/                   # TypeScript types
└── config/                  # Configuration files
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🎯 Key Features Explained

### 1. Authentication System
- Multiple auth providers (Email, Google, Facebook)
- Role-based access control (RBAC)
- Email verification flow
- Password reset functionality
- Session management with NextAuth.js

### 2. Listing Management
- Create, edit, delete listings
- Image upload with drag & drop
- Rich text editor for descriptions
- Category & subcategory selection
- Price management
- Status tracking (Draft, Published, Sold, Archived)

### 3. Search & Discovery
- Full-text search across listings
- Location-based search with radius
- Category filtering
- Price range filters
- Sort by: Date, Price, Relevance, Distance
- Saved searches

### 4. User Dashboard
- Profile management
- My listings
- Favorites/Watchlist
- Message inbox
- Transaction history
- Reviews & ratings

### 5. Admin Panel
- User management (approve, suspend, delete)
- Content moderation queue
- Analytics dashboard
- Platform settings
- Category management
- Featured listings control

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🔧 Configuration

### Database Schema

The boilerplate includes a comprehensive Prisma schema with:
- **Users**: Authentication & profiles
- **Listings**: Core marketplace items
- **Categories**: Hierarchical categorization
- **Messages**: In-app messaging
- **Reviews**: Rating system
- **Transactions**: Payment tracking
- **Favorites**: User watchlists

### Email Templates

Pre-built email templates for:
- Welcome emails
- Email verification
- Password reset
- Listing notifications
- Message alerts

### SEO Configuration

Built-in SEO optimization:
- Dynamic meta tags
- Open Graph tags
- Twitter Cards
- JSON-LD structured data
- Automatic sitemap generation
- Robots.txt

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### VPS (PM2 + Nginx)

```bash
# Build the project
npm run build

# Start with PM2
pm2 start npm --name "marketplace" -- start

# Configure Nginx
# See nginx.conf.example for configuration
```

### Docker

```bash
# Build image
docker build -t marketplace .

# Run container
docker run -p 3000:3000 marketplace
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 📚 Documentation

- [Getting Started Guide](./docs/getting-started.md)
- [Database Schema](./docs/database-schema.md)
- [API Reference](./docs/api-reference.md)
- [Deployment Guide](./docs/deployment.md)
- [Customization Guide](./docs/customization.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](./CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🌟 Real-World Usage

This boilerplate powers production platforms including:

- **SriLankanServices.com** - #1 classifieds in Sri Lanka (30,000+ users)
- **AuslankaServices.com** - Sri Lankan marketplace in Australia
- Multiple enterprise client projects

See [SHOWCASE.md](./SHOWCASE.md) for more examples.

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 💡 Use Cases

Perfect for building:

### 🏪 Classifieds
- Jobs board
- Real estate listings
- Vehicle marketplace
- General classifieds

### 🛒 E-commerce
- Multi-vendor marketplace
- Product listings
- Booking platforms

### 💼 Services
- Freelancer marketplace
- Professional services
- Local services directory

### 🎫 Events & Bookings
- Event ticketing
- Appointment booking
- Venue rentals

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🔥 Performance

- ⚡ **Lighthouse Score**: 95+ on all metrics
- 🚀 **First Contentful Paint**: < 1.2s
- 📱 **Mobile Optimized**: Perfect responsive design
- 🌐 **SEO Ready**: Built-in SEO best practices
- ♿ **Accessible**: WCAG 2.1 AA compliant

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/maxtors-debug/nextjs-marketplace-boilerplate/issues)
- **Discussions**: [GitHub Discussions](https://github.com/maxtors-debug/nextjs-marketplace-boilerplate/discussions)
- **Email**: support@vertexelite.org
- **Website**: [vertexelite.org](https://vertexelite.org)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## 🙏 Acknowledgments

Built with ❤️ by **VertexElite**

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## ⭐ Star History

If you find this project helpful, please consider giving it a star! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=maxtors-debug/nextjs-marketplace-boilerplate&type=Date)](https://star-history.com/#maxtors-debug/nextjs-marketplace-boilerplate&Date)

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=maxtors-debug&label=Repository%20Views&color=00D9FF&style=for-the-badge" alt="Repository Views" />

  <br><br>

  **Built by VertexElite | Where Innovation Meets Excellence**

  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%" />
</div>
