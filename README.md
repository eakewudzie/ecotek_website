# Ecotek Architectural Website

A cutting-edge, responsive web application for Ecotek architectural firm showcasing innovative design solutions, project portfolio, and comprehensive services.

## 🌟 Features

### 🎨 **Modern Design & UX**

- Clean, professional interface with responsive mobile-first design
- Advanced gradient backgrounds and smooth transitions
- Interactive hover effects and micro-animations
- Fully accessible navigation with mobile menu

### 📱 **Responsive Architecture**

- Adaptive layout for desktop, tablet, and mobile devices
- Collapsible mobile navigation with smooth transitions
- Optimized touch interactions and gesture support
- Consistent experience across all screen sizes

### 🏢 **Comprehensive Content**

- **Homepage**: Enhanced with stats, testimonials, and service highlights
- **Portfolio**: Project showcase with detailed case studies
- **Services**: Complete service offerings with feature lists
- **About**: Company story, values, and team information
- **Contact**: Interactive contact form with validation

### 🔐 **Professional Admin System**

- Secure authentication with route protection
- Modern sidebar navigation with clean dashboard
- Project management interface for content updates
- Persistent session management with logout functionality
- **Admin Access Code**: `admin123`

### 🏗️ **Technical Excellence**

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom configurations
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icon system
- **Image Optimization**: Next.js Image component with remote patterns
- **Performance**: Optimized build with static generation

## 📁 Project Structure

```
ecotek_website/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Enhanced homepage with modern design
│   ├── admin/                   # Admin management system
│   │   ├── layout.tsx          # Admin auth provider wrapper
│   │   ├── page.tsx            # Admin login page
│   │   └── dashboard/          # Admin dashboard
│   │       └── page.tsx        # Dashboard with sidebar & project management
│   ├── portfolio/              # Project showcase (renamed from projects)
│   │   ├── page.tsx           # Portfolio gallery
│   │   └── [id]/              # Dynamic project details
│   │       └── page.tsx       # Individual project pages
│   ├── services/              # Service offerings
│   │   └── page.tsx          # Comprehensive services page
│   ├── about/                 # Company information
│   │   └── page.tsx          # About page with story & values
│   └── contact/               # Contact & inquiries
│       └── page.tsx          # Contact form with validation
├── components/                # React components
│   ├── ui/                   # shadcn/ui component library
│   ├── auth/                 # Authentication components
│   │   └── AuthProvider.tsx  # Auth context & route protection
│   ├── Header.tsx           # Responsive navigation with mobile menu
│   ├── HeroSection.tsx      # Landing hero section
│   ├── IntroSection.tsx     # Company introduction
│   ├── ProjectCard.tsx      # Project display cards
│   ├── GalleryGrid.tsx      # Project grid layout
│   └── Footer.tsx           # Site footer
├── data/                     # Centralized data management
│   ├── projects.ts          # Project portfolio data
│   └── homepage.ts          # Homepage content (stats, testimonials, etc.)
├── interfaces/              # TypeScript interfaces
│   └── index.ts            # Type definitions for all data structures
├── lib/                     # Utility functions
│   ├── utils.ts            # General utility functions
│   ├── auth.ts             # Authentication utilities
│   └── firebase.ts         # Firebase configuration (future use)
└── public/                  # Static assets
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**

### Installation & Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd ecotek_website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The site will automatically reload on changes

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🌐 Pages & Routes

### **Public Pages**

- **Home (`/`)**: Modern homepage with stats, services, testimonials, and CTAs
- **Portfolio (`/portfolio`)**: Complete project gallery with filtering
- **Portfolio Details (`/portfolio/[id]`)**: Detailed project information with images
- **Services (`/services`)**: Comprehensive service offerings and capabilities
- **About (`/about`)**: Company story, values, team, and achievements
- **Contact (`/contact`)**: Contact form with validation and company information

### **Admin System**

- **Admin Login (`/admin`)**: Secure authentication portal
  - **Access Code**: `admin123`
  - Persistent session management
  - Auto-redirect for authenticated users
- **Admin Dashboard (`/admin/dashboard`)**: Full management interface
  - Clean sidebar navigation
  - Project management tools
  - Real-time statistics
  - Recent activity tracking
  - Secure logout functionality

## 🔐 Admin System Details

### **Authentication**

- **Access URL**: `/admin`
- **Login Code**: `admin123`
- **Session Management**: Persistent login state with localStorage
- **Route Protection**: Automatic redirect for unauthenticated users
- **Secure Logout**: Complete session cleanup

### **Dashboard Features**

- **Project Management**: Add new projects with image, name, date, location
- **Statistics Overview**: Real-time project counts and metrics
- **Recent Activity**: Timeline of recent system changes
- **Responsive Interface**: Optimized for desktop and mobile
- **Clean UI**: Professional sidebar navigation

### **Security Features**

- Client-side authentication with persistent sessions
- Route guards on protected pages
- Automatic session validation
- Secure logout with state cleanup

## 📊 Data Management

### **Centralized Structure**

All content is organized in the `/data` folder for easy management:

- **`/data/projects.ts`**: Complete project portfolio

  - `sampleProjects`: All available projects
  - `featuredProjects`: Homepage highlights
  - `projectDetails`: Detailed project information

- **`/data/homepage.ts`**: Homepage content
  - `stats`: Company statistics and metrics
  - `services`: Service offerings with features
  - `testimonials`: Client feedback and reviews
  - `achievements`: Company accomplishments

### **Type Safety**

All data structures are typed in `/interfaces/index.ts`:

- `Project`: Basic project structure
- `ProjectDetails`: Extended project information
- Component prop types for consistent data flow

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: < 768px (touch-optimized)
- **Tablet**: 768px - 1024px (adaptive layout)
- **Desktop**: > 1024px (full feature set)

### **Mobile Features**

- Hamburger navigation menu
- Touch-friendly interactions
- Optimized image loading
- Consistent user experience across devices

## 🎨 Customization

### **Styling**

- **Framework**: Tailwind CSS with custom configurations
- **Theme**: Professional architectural color scheme
- **Components**: shadcn/ui for consistent design system
- **Responsive**: Mobile-first approach with custom breakpoints

### **Content Updates**

- **Projects**: Update `/data/projects.ts` for new portfolio items
- **Homepage**: Modify `/data/homepage.ts` for stats, testimonials, services
- **Company Info**: Update individual page components
- **Images**: Replace URLs in data files (uses Unsplash optimization)

## 🖼️ Image Optimization

Next.js Image component provides automatic optimization:

- **WebP Conversion**: Automatic modern format delivery
- **Responsive Loading**: Device-appropriate image sizes
- **Lazy Loading**: Performance-optimized loading
- **CDN Integration**: Configured for Unsplash remote patterns

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
# Push to GitHub
git push origin main

# Deploy via Vercel dashboard or CLI
vercel --prod
```

### **Other Platforms**

```bash
# Build for production
npm run build

# Export static files (if needed)
npm run export

# Start production server
npm start
```

## 🔮 Future Enhancements

### **Planned Features**

- [ ] **Firebase Integration**: Dynamic content management
- [ ] **Advanced Admin**: Full project CRUD operations
- [ ] **Contact Integration**: Email service connectivity
- [ ] **Blog System**: News and articles section
- [ ] **SEO Optimization**: Meta tags and structured data
- [ ] **Analytics**: User behavior tracking
- [ ] **Search & Filter**: Advanced portfolio navigation
- [ ] **Image Upload**: Admin file management
- [ ] **User Management**: Multi-admin support
- [ ] **CMS Integration**: Headless content management

### **Technical Improvements**

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] API route optimization
- [ ] Progressive Web App (PWA) features
- [ ] Advanced caching strategies
- [ ] Multi-language support

## 📄 License

This project is licensed under the **MIT License**.

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 💡 Support

For support, questions, or contributions:

- **Issues**: GitHub Issues tab
- **Discussions**: GitHub Discussions
- **Documentation**: This README and inline code comments

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and shadcn/ui**
