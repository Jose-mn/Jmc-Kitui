# JMC Project - API & Frontend Testing Checklist

## Backend API Endpoints (Test with Backend Running)

### Authentication Routes (`/api/auth`)
- [ ] `POST /api/auth/login` - Admin login with email/password
  - Test input: `{ "email": "admin@jmc.com", "password": "admin123" }`
  - Expected: JWT token returned
- [ ] `GET /api/auth/verify` - Verify token validity
  - Requires: Bearer token in Authorization header
  - Expected: `{ "valid": true, "user": {...} }`
- [ ] `POST /api/auth/logout` - Logout (token-based)
  - Expected: `{ "message": "Logged out successfully" }`

### Contact Routes (`/api/contact`)
- [ ] `POST /api/contact` - Submit contact form
  - Test input: `{ "full_name": "Test", "email": "test@example.com", "message": "Hello" }`
  - Expected: `{ "message": "Message received", "id": <id> }`
- [ ] `GET /api/contact` - Fetch all contact messages (Admin)
  - Expected: Array of contact messages
- [ ] `PATCH /api/contact/:id` - Update message status
  - Test input: `{ "status": "Read" }`
  - Expected: `{ "message": "Status updated successfully" }`
- [ ] `DELETE /api/contact/:id` - Delete message
  - Expected: `{ "message": "Message deleted successfully" }`

### Events Routes (`/api/events`)
- [ ] `POST /api/events` - Create event (Protected)
  - Test input: `{ "title": "Test Event", "date": "2026-03-01", "location": "Main Hall" }`
  - Expected: Event created with ID
- [ ] `GET /api/events` - Fetch all events
  - Expected: Array of events
- [ ] `PUT /api/events/:id` - Update event (Protected)
  - Expected: `{ "message": "Event updated successfully" }`
- [ ] `DELETE /api/events/:id` - Delete event (Protected)
  - Expected: `{ "message": "Event deleted successfully" }`

### Devotions Routes (`/api/devotions`)
- [ ] `POST /api/devotions` - Create devotion
  - Test input: `{ "title": "Test", "scripture": "John 3:16", "content": "..." }`
  - Expected: Devotion created
- [ ] `GET /api/devotions` - Fetch all devotions
  - Expected: Array of devotions
- [ ] `DELETE /api/devotions/:id` - Delete devotion
  - Expected: `{ "message": "Devotion deleted successfully" }`

### Sermons Routes (`/api/sermons`)
- [ ] `POST /api/sermons` - Create sermon
  - Test input: `{ "title": "Sermon", "speaker": "Pastor", "video": "https://youtube.com/..." }`
  - Expected: Sermon created
- [ ] `GET /api/sermons` - Fetch all sermons
  - Expected: Array of sermons
- [ ] `DELETE /api/sermons/:id` - Delete sermon
  - Expected: `{ "message": "Sermon deleted successfully" }`

### Leadership Routes (`/api/leadership`)
- [ ] `POST /api/leadership` - Create leader
  - Test input: `{ "name": "Pastor John", "position": "Lead Pastor", "bio": "..." }`
  - Expected: Leader created
- [ ] `GET /api/leadership` - Fetch all leaders
  - Expected: Array of leaders
- [ ] `DELETE /api/leadership/:id` - Delete leader
  - Expected: `{ "message": "Leader deleted successfully" }`

---

## Frontend Pages (Visual & Functional Testing)

### Public Pages
- [ ] **Home** (`/`)
  - ✓ Navigation bar appears at top
  - ✓ Hero section with images loads
  - ✓ "EXPLORE" button navigates to /about
  - ✓ "WATCH LIVE" button opens YouTube
  - ✓ Latest Devotionals section displays correctly
  - ✓ Service times section renders with proper styling
  - ✓ Footer appears at bottom

- [ ] **About** (`/about`)
  - ✓ Page loads without errors
  - ✓ Leadership images display
  - ✓ Core values section renders correctly
  - ✓ "Meet Our Leaders" link works

- [ ] **Pastorate** (`/pastorate`)
  - ✓ Leader profiles display correctly
  - ✓ Bishop's featured card shows image
  - ✓ Contact information for each leader visible
  - ✓ Message cards styled properly

- [ ] **Devotionals** (`/devotionals`)
  - ✓ Search functionality works
  - ✓ All 3 default devotionals display
  - ✓ Each devotional card is clickable
  - ✓ Clicking card navigates to detail page

- [ ] **Devotional Detail** (`/devotionals/:id`)
  - ✓ Content loads for ID 1, 2, 3
  - ✓ Back button returns to list
  - ✓ 404 page shows when invalid ID

- [ ] **Events** (`/events`)
  - ✓ Hero section displays
  - ✓ Event category filters work (All, Worship, Prayer, etc.)
  - ✓ All 6 events display
  - ✓ Event cards show all details (date, time, location, description)
  - ✓ Responsive grid adjusts for mobile/tablet/desktop

- [ ] **Sermons** (`/sermons`)
  - ✓ Page loads and displays hero
  - ✓ Search bar functional
  - ✓ Sermons from backend API display
  - ✓ YouTube video thumbnails load
  - ✓ Play button opens YouTube video in new tab
  - ✓ Fallback message when no sermons exist
  - ✓ Loading state shows while fetching

- [ ] **Contact** (`/contact`)
  - ✓ Form fields: Name, Email, Phone, Message
  - ✓ Form validation works (prevents empty submission)
  - ✓ Submit button sends to backend API
  - ✓ Success message appears on submit
  - ✓ Contact details displayed (phone, email, location)
  - ✓ Map embedded and functional
  - ✓ Form clears after successful submit

- [ ] **Give** (`/give`)
  - ✓ Enhanced page with proper styling
  - ✓ "Why Give" section displays
  - ✓ Ways to give options (In Person, By Mail, Contact)
  - ✓ All buttons work correctly
  - ✓ Contact form link works
  - ✓ Phone link works (tel: protocol)

### Navigation
- [ ] **Navigation Bar**
  - ✓ Desktop menu shows all links
  - ✓ Mobile menu toggle works
  - ✓ All links navigate correctly:
    - HOME → `/`
    - ABOUT US → `/about`
    - PASTORATE → `/pastorate`
    - DEVOTIONALS → `/devotionals`
    - EVENTS → `/events`
    - MINISTRIES dropdown works
    - CONTACT US → `/contact` ✓
  - ✓ LIVE STREAM button opens YouTube
  - ✓ GIVE button navigates to `/give`
  - ✓ Logo links to home

### Admin Pages (if testing)
- [ ] **Login** (`/admin/login`)
  - ✓ Form accepts email & password
  - ✓ Connects to backend API
  - ✓ Stores token in localStorage on success
  - ✓ Redirects to /admin dashboard
  - ✓ Shows error on invalid credentials

---

## Known Issues Fixed ✅

- ✅ Removed Mpesa integration (payment routes completely removed)
- ✅ Fixed import path for DevotionalDetail (case sensitivity)
- ✅ Fixed Devotionals.jsx import path (../Data/Devotionals)
- ✅ Fixed Navigation links from `/contacts` to `/contact`
- ✅ Completed Sermons page with API integration
- ✅ Enhanced Give page with proper UI
- ✅ Updated Login to use backend API
- ✅ Removed duplicate Contact routes

---

## Configuration Required (Before Testing)

1. **Backend Must Be Running**
   ```bash
   cd jmc-backend
   npm install
   npm start
   ```
   - Port should be 5000 (or update VITE_API_URL)
   - Database must be configured in .env
   - JWT_SECRET must be set

2. **Frontend Environment Variables** (`.env` or Vite config)
   ```
   VITE_API_URL=http://localhost:5000
   ```

3. **Database Connection**
   - MySQL/MariaDB running on localhost:3306
   - Database: `jesus_manifestation_church`
   - User: `root` / Password: `8877`
   - Tables created from `/jmc-backend/database/schema.sql`

---

## Testing Commands

```bash
# Test Contact Endpoint
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"full_name":"Test User","email":"test@example.com","phone":"+254700000000","message":"Test message"}'

# Test Sermons Endpoint
curl http://localhost:5000/api/sermons

# Test Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@jmc.com","password":"admin123"}'
```

---

**Last Updated:** March 4, 2026
**Status:** All critical parts audited and fixed ✅
