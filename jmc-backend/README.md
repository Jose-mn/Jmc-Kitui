# JMC Backend

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Database

Run the SQL schema from `database/schema.sql` to create the required tables:

```sql
mysql -u root -p [database_name] < database/schema.sql
```

### 3. Configure Environment

Copy `.env.example` to `.env` and update with your database credentials:

```bash
cp .env.example .env
```

Update the following variables:
- `DB_HOST` - MySQL host (default: localhost)
- `DB_USER` - MySQL username
- `DB_PASSWORD` - MySQL password
- `DB_NAME` - Database name
- `PORT` - Server port (default: 5000)

### 4. Start the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
node server.js
```

## API Endpoints

### Contact Messages
- **POST** `/api/contact` - Submit a contact form
- **GET** `/api/contact` - Get all contact messages
- **PATCH** `/api/contact/:id` - Update message status
- **DELETE** `/api/contact/:id` - Delete a message

### Events
- **POST** `/api/events` - Create an event
- **GET** `/api/events` - Get all events
- **DELETE** `/api/events/:id` - Delete an event

### Devotions
- **POST** `/api/devotions` - Create a devotion
- **GET** `/api/devotions` - Get all devotions
- **DELETE** `/api/devotions/:id` - Delete a devotion

### Sermons
- **POST** `/api/sermons` - Create a sermon
- **GET** `/api/sermons` - Get all sermons
- **DELETE** `/api/sermons/:id` - Delete a sermon

### Leadership
- **POST** `/api/leadership` - Add a leader
- **GET** `/api/leadership` - Get all leaders
- **DELETE** `/api/leadership/:id` - Remove a leader

## Technologies Used

- **Express.js** - Web framework
- **MySQL2** - Database driver
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management
