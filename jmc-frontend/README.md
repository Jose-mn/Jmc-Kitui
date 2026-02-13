# JMC Frontend

A React + Vite application for Jesus Manifestation Church website.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env.local` (or `.env`) and update the API URL:

```bash
cp .env.example .env.local
```

Update `VITE_API_URL` to match your backend server:
```
VITE_API_URL=http://localhost:5000
```

### 3. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── pages/              # Page components
│   ├── admin/         # Admin dashboard pages
│   └── ministries/    # Ministry pages
├── components/        # Reusable components
│   ├── ui/           # UI components
│   ├── Footer.jsx
│   ├── Navigation.jsx
│   └── ...
├── lib/              # Utility functions
├── assets/           # Static assets
├── App.jsx           # Main app component
└── main.jsx          # Entry point
```

## Pages

### Public Pages
- `/` - Home
- `/about` - About Us
- `/sermons` - Sermons
- `/pastorate` - Pastorate
- `/devotionals` - Devotionals
- `/events` - Events
- `/contacts` - Contact Form
- `/ministries/youth` - Youth Ministry
- `/ministries/choir` - Choir Ministry
- `/ministries/ushers` - Ushers Ministry
- `/ministries/media` - Media Ministry

### Admin Dashboard
- `/admin` - Dashboard Overview
- `/admin/events` - Manage Events
- `/admin/devotions` - Manage Devotions
- `/admin/sermons` - Manage Sermons
- `/admin/media` - Media Gallery
- `/admin/leadership` - Leadership Management
- `/admin/messages` - Contact Messages

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Charts/Graphs
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## Environment Variables

- `VITE_API_URL` - Backend API URL (default: http://localhost:5000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Known Issues / TODO

- [ ] Media upload functionality not yet implemented
- [ ] Admin pages need backend persistence integration
- [ ] Add authentication/authorization
- [ ] Add image optimization
- [ ] Mobile responsive design improvements needed
