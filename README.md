# Ecotek Construction Website

A modern, responsive web application for Ecotek construction company to showcase their architectural drawings and project portfolio.

## 🏗️ Features

- **Modern Design**: Clean, professional interface with responsive design
- **Project Gallery**: Showcase construction projects with detailed information
- **Interactive Components**: Modal dialogs for project previews
- **Mobile Responsive**: Optimized for all device sizes
- **Component-Based Architecture**: Built with reusable React components
- **Centralized Data Management**: All static data organized in `/data` folder
- **Type Safety**: Centralized interfaces in `/interfaces` folder
- **Admin Panel**: Simple authentication system for content management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Backend**: Firebase (configured but not implemented)

## 📁 Project Structure

```
ecotek_website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── admin/             # Admin section
│   │   ├── page.tsx       # Admin login page
│   │   └── dashboard/     # Admin dashboard
│   │       └── page.tsx   # Dashboard main page
│   └── projects/          # Projects pages
│       ├── page.tsx       # Projects gallery
│       └── [id]/          # Dynamic project details
│           └── page.tsx   # Individual project page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   ├── HeroSection.tsx   # Landing hero section
│   ├── IntroSection.tsx  # About section
│   ├── ProjectCard.tsx   # Individual project card
│   ├── GalleryGrid.tsx   # Projects grid layout
│   └── Footer.tsx        # Site footer
├── data/                 # Centralized static data
│   └── projects.ts       # Project data and exports
├── interfaces/           # TypeScript interfaces
│   └── index.ts         # All project interfaces
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   └── firebase.ts       # Firebase configuration
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ecotek_website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages & Routes

- **Home (`/`)**: Landing page with hero section, about section, and featured projects
- **Projects (`/projects`)**: Gallery of all construction projects
- **Project Details (`/projects/[id]`)**: Individual project information and images
- **Admin Login (`/admin`)**: Admin authentication page
- **Admin Dashboard (`/admin/dashboard`)**: Admin panel for content management

## 🧩 Components

### Core Components

- **Header**: Sticky navigation with Ecotek branding and nav links
- **HeroSection**: Full-width landing section with headline and CTA
- **IntroSection**: Company information and statistics
- **ProjectCard**: Individual project display with modal preview
- **GalleryGrid**: Responsive grid layout for projects
- **Footer**: Contact information and social links

### UI Components (shadcn/ui)

- Button
- Card
- Dialog (for project previews)
- Input (for admin forms)

## 🔐 Admin Access

### Authentication

The admin panel uses a simple code-based authentication system:

- **URL**: `/admin`
- **Login Code**: `admin123`
- **Dashboard**: `/admin/dashboard`

### Admin Features

- **Simple Authentication**: Code-based login system
- **Dashboard Overview**: Quick stats and project information
- **Responsive Design**: Works on all device sizes
- **Future Ready**: Prepared for advanced content management features

## 📊 Data Management

### Centralized Data Structure

All static data is organized in the `/data` folder:

- **`/data/projects.ts`**: Contains all project data including:
  - `sampleProjects`: Array of all projects
  - `featuredProjects`: Array of featured projects for home page
  - `projectDetails`: Detailed project information for individual pages

### Type Safety

All TypeScript interfaces are centralized in `/interfaces/index.ts`:

- `Project`: Basic project interface
- `ProjectDetails`: Extended project interface with additional fields
- `ProjectCardProps`: Props for ProjectCard component
- `GalleryGridProps`: Props for GalleryGrid component
- `ProjectDetailsPageProps`: Props for project details page

## 🔥 Firebase Integration

Firebase SDK is installed and configured in `lib/firebase.ts` for future implementation:

- **Firebase Auth**: User authentication
- **Firestore**: Project data storage
- **Firebase Storage**: Image and file storage

### Environment Variables

Create a `.env.local` file with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 🎨 Customization

### Styling

The project uses Tailwind CSS with a custom color scheme. Main colors are defined in the Tailwind config and can be customized in `tailwind.config.js`.

### Content Management

- **Add New Projects**: Update `data/projects.ts` with new project data
- **Modify Company Info**: Update components directly
- **Replace Images**: Update image URLs in the data files
- **Add New Interfaces**: Extend `/interfaces/index.ts` for new data types

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🖼️ Image Optimization

The project uses Next.js Image component for optimal performance:

- Automatic image optimization
- Responsive image loading
- WebP format support
- Lazy loading for better performance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project for production:

```bash
npm run build
npm start
```

## 🔮 Future Enhancements

- [ ] Firebase integration for dynamic content
- [ ] Advanced admin panel with project management
- [ ] Contact form functionality
- [ ] Blog/news section
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Image upload functionality
- [ ] Search and filtering for projects
- [ ] User management system
- [ ] Content editing interface

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
