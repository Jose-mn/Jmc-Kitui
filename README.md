# Jesus Manifestation Church (JMC) Website

A full-stack web application for Jesus Manifestation Church, featuring a React frontend and Node.js backend with admin dashboard.

## Project Structure

```
church/
├── jmc-frontend/       # React + Vite frontend application
├── jmc-backend/        # Node.js + Express backend API
└── jmc/               # Monorepo for shared packages (TypeScript, ESLint configs, UI library)
```

## Quick Start

### Backend Setup

```bash
cd jmc-backend

# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env

# 3. Configure database credentials in .env
# Update DB_HOST, DB_USER, DB_PASSWORD, DB_NAME

# 4. Create database tables
mysql -u [user] -p [database] < database/schema.sql

# 5. Start the server
npm run dev
```

Server will run on `http://localhost:5000`

### Frontend Setup

```bash
cd jmc-frontend

# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env.local

# 3. Update VITE_API_URL if backend is on different URL

# 4. Start the development server
npm run dev
```

App will run on `http://localhost:5173`

## Features

### Public Website
- Homepage with hero section
- About Us page
- Sermons gallery
- Devotionals page
- Church events
- Contact form with backend integration
- Ministry pages (Youth, Choir, Ushers, Media)

### Admin Dashboard
- Dashboard overview with metrics
- Event management (create, view, delete)
- Devotion management
- Sermon management with video links
- Leadership management
- Contact message inbox with status tracking
- Media gallery upload (structure in place)

## Technology Stack

### Frontend
- React 19
- Vite (build tool)
- React Router (routing)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Recharts (charts)
- Radix UI (accessible components)

### Backend
- Node.js
- Express.js
- MySQL 2 (database)
- CORS (cross-origin support)
- dotenv (environment management)

## Database

The application uses MySQL with the following tables:
- `contact_messages` - Contact form submissions
- `events` - Church events
- `devotions` - Daily devotionals
- `sermons` - Sermon recordings and videos
- `leadership` - Church leadership team

See [jmc-backend/database/schema.sql](jmc-backend/database/schema.sql) for complete schema.

## API Documentation

See [jmc-backend/README.md](jmc-backend/README.md) for complete API endpoint documentation.

## Environment Variables

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000
```

### Backend (.env)
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=jmc_church
```

## Development

### Frontend Commands
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend Commands
```bash
npm run dev       # Start with nodemon (auto-reload)
npm test          # Run tests (when available)
```

## Completed Tasks ✅

- [x] Frontend and backend setup
- [x] Database schema created
- [x] API endpoints for all admin features
- [x] Contact form integration
- [x] Admin dashboard routing fixed
- [x] Form validation added
- [x] Environment variable configuration
- [x] Code cleanup (removed unused imports, debug statements)

## TODO / Future Improvements

- [ ] Implement media upload functionality
- [ ] Add admin authentication/authorization
- [ ] Add pagination to lists
- [ ] Implement sermon search
- [ ] Add image optimization
- [ ] Mobile app version
- [ ] Email notifications for contact forms
- [ ] Admin user management
- [ ] Content moderation features
- [ ] Analytics dashboard
- [ ] SEO optimization
- [ ] PWA support

## Known Issues

- Media upload not yet connected to backend
- No authentication system (admin pages are public)
- Limited mobile optimization
- No image optimization in place

## Support

For issues or feature requests, please contact the development team.

## License

This project is proprietary to Jesus Manifestation Church.
