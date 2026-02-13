# JMC Project Setup Checklist

A complete step-by-step guide to set up and run the Jesus Manifestation Church website locally.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [MySQL](https://www.mysql.com/) (v5.7+)
- A code editor (VS Code recommended)

## Backend Setup

### Step 1: Create Database

```bash
# Open MySQL
mysql -u root -p

# Create database
CREATE DATABASE jmc_church;
USE jmc_church;

# Exit and run the schema
mysql -u root -p jmc_church < jmc-backend/database/schema.sql
```

### Step 2: Configure Backend

```bash
cd jmc-backend

# Copy environment template
cp .env.example .env

# Edit .env with your database credentials:
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=yourpassword
# DB_NAME=jmc_church
# PORT=5000
```

### Step 3: Install and Start Backend

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
# Server will start on http://localhost:5000
```

## Frontend Setup

### Step 1: Configure Frontend

```bash
cd ../jmc-frontend

# Copy environment template
cp .env.example .env.local

# The default VITE_API_URL=http://localhost:5000 should work
# If backend is on a different URL, update it here
```

### Step 2: Install and Start Frontend

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
# App will open at http://localhost:5173
```

## Verification

### Backend Health Check

```bash
# Open browser or use curl
curl http://localhost:5000/
# Should respond: "JMC Backend is running"
```

### Frontend Health Check

- Navigate to `http://localhost:5173`
- Should see the JMC website homepage
- Navigation links should work

### Test Admin Pages

1. Go to `http://localhost:5173/admin`
2. You should see the admin dashboard
3. Click on sidebar items:
   - ✅ Dashboard
   - ✅ Events
   - ✅ Devotions
   - ✅ Sermons
   - ✅ Media
   - ✅ Leadership
   - ✅ Messages

### Test Contact Form

1. Go to `http://localhost:5173/contacts`
2. Fill out and submit the form
3. Check admin messages at `/admin/messages`
4. Message should appear with "New" status

## Production Build

### Build Frontend

```bash
cd jmc-frontend
npm run build
npm run preview  # Preview the production build
```

### Build Backend

Backend runs directly with Node.js. For production deployment:

```bash
# Set environment to production
NODE_ENV=production node server.js
```

Consider using a process manager like [PM2](https://pm2.keymetrics.io/).

## Troubleshooting

### Port Already in Use

If port 5000 or 5173 is already in use:

**Frontend:**
```bash
# Vite will ask to use another port, or specify:
npm run dev -- --port 3000
```

**Backend:**
Edit `.env` and change `PORT=5001` (or another available port)

### Database Connection Error

```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

Solutions:
1. Ensure MySQL is running
2. Check database credentials in `.env`
3. Ensure database `jmc_church` exists
4. Check MySQL user has proper permissions

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### CORS Errors

If frontend can't reach backend:
1. Verify backend is running on correct port
2. Check `VITE_API_URL` in frontend `.env.local`
3. Ensure backend `.env` has correct `PORT`

## Development Tips

### Hot Reload

- Frontend: Changes auto-reload in browser (HMR)
- Backend: Uses nodemon, auto-restarts on file changes

### Database Debugging

View database contents:

```bash
mysql -u root -p jmc_church

# View all tables
SHOW TABLES;

# View contact messages
SELECT * FROM contact_messages;

# View events
SELECT * FROM events;
```

### API Testing

Use Postman, Insomnia, or curl:

```bash
# Test POST to create event
curl -X POST http://localhost:5000/api/events \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sunday Service",
    "date": "2024-02-18",
    "location": "Main Hall"
  }'

# Test GET all events
curl http://localhost:5000/api/events
```

## Environment Variables Reference

### Frontend (.env.local)
| Variable | Default | Description |
|----------|---------|-------------|
| VITE_API_URL | http://localhost:5000 | Backend API URL |

### Backend (.env)
| Variable | Default | Description |
|----------|---------|-------------|
| PORT | 5000 | Server port |
| DB_HOST | localhost | MySQL host |
| DB_USER | root | MySQL username |
| DB_PASSWORD | - | MySQL password |
| DB_NAME | jmc_church | Database name |

## Next Steps

1. ✅ Complete the setup above
2. Add content (events, devotions, sermons)
3. Test all features
4. Set up authentication (future)
5. Deploy to hosting platform

## Support Resources

- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev/
- Express Docs: https://expressjs.com/
- MySQL Docs: https://dev.mysql.com/doc/
- Tailwind Docs: https://tailwindcss.com/docs

---

**Need help?** Check the individual README files:
- [jmc-frontend/README.md](jmc-frontend/README.md)
- [jmc-backend/README.md](jmc-backend/README.md)
