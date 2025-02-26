# Linktree-like Platform with Referral System

## 📌 Overview
This project is a **Linktree/Bento.me-like platform** built using **Node.js, Express.js, and PostgreSQL**, featuring a **referral system**. It allows users to create personalized bio pages with multiple links and track referrals efficiently.

## 🚀 Features
- **User Authentication** (Register, Login, Forgot Password, Reset Password)
- **Token-based Authentication (JWT)**
- **Profile Management**
- **Link Management** (Add, Update, Delete Links)
- **Referral System** (Track referred users and rewards)
- **Secure Password Reset via Email (Nodemailer + SMTP)**
- **Middleware for Authentication and Error Handling**

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL + Prisma ORM
- **Authentication:** JWT + Bcrypt.js
- **Email Service:** Nodemailer + SMTP
- **API Testing:** Postman

---

## 📂 Folder Structure
```
linktree-backend/
│-- src/
│   ├── controllers/    # Business logic
│   ├── models/         # Database interactions
│   ├── routes/         # API routes
│   ├── middleware/     # Auth & error handlers
│   ├── utils/          # Helper functions
│   ├── server.js       # Entry point
│-- prisma/             # Prisma schema & migrations
│-- .env                # Environment variables
│-- package.json        # Dependencies
```

---

## 🔧 Setup & Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/vedu111/vomychat.git
   cd linktree-backend
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Setup Environment Variables** (`.env` file)
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/linktree_db
   JWT_SECRET=your_secret_key
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_email_password
   ```
4. **Run Database Migrations**
   ```sh
   npx prisma migrate dev --name init
   ```
5. **Start the Server**
   ```sh
   npm start
   ```

---

## 📌 API Endpoints
### **Authentication**
| Method | Endpoint               | Description                | Auth Required |
|--------|------------------------|----------------------------|---------------|
| POST   | `/api/register`        | Register new user          | ❌ No |
| POST   | `/api/login`           | User login (JWT)           | ❌ No |
| POST   | `/api/forgot-password` | Send reset password email  | ❌ No |
| POST   | `/api/reset-password`  | Reset password with token  | ❌ No |

### **User Profile & Links**
| Method | Endpoint              | Description                  | Auth Required |
|--------|-----------------------|------------------------------|---------------|
| GET    | `/api/profile`        | Get user profile             | ✅ Yes |
| PUT    | `/api/profile`        | Update user profile          | ✅ Yes |
| GET    | `/api/links`          | Get all user links           | ✅ Yes |
| POST   | `/api/links`          | Add a new link               | ✅ Yes |
| PUT    | `/api/links/:id`      | Update a link                | ✅ Yes |
| DELETE | `/api/links/:id`      | Delete a link                | ✅ Yes |

### **Referral System**
| Method | Endpoint         | Description                          | Auth Required |
|--------|-----------------|--------------------------------------|---------------|
| GET    | `/api/referrals` | Get user referral list              | ✅ Yes |
| POST   | `/api/referrals` | Generate referral link              | ✅ Yes |
| GET    | `/api/referrals/stats` | Get referral statistics     | ✅ Yes |

---

## 🛠️ Testing with Postman
1. Open **Postman** and import API collection.
2. **Register/Login** to get JWT token.
3. Add `Authorization: Bearer <token>` in headers.
4. Test endpoints with required parameters.

---

## 📞 Contact
📧 **Vedant Dagadkhair**  
📍 **GitHub:** [vedu111](https://github.com/vedu111)  
📍 **Email:** dagadkhairvedant@gmail.com

---

