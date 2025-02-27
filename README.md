# Linktree-like Platform with Referral System

## 📌 Overview
This project is a **Linktree/Bento.me-like platform** built using **Node.js, Express.js, and PostgreSQL**, featuring a **referral system**.

---

## 📌 Overview Diagram
![User Management and Referral System Overview](https://media-hosting.imagekit.io//20d79ea5e3c142ab/_-visual-selection.png?Expires=1835277950&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iEwsiJEUYB~hWpb8ciDCZC6Ve-Jj1ScOcfzxYM~QxfUoa6PebUIT34AMzcxRCTdm6B6s02mPCM88e6hX95lkAGc-QwMCiiLdOVfYeJX3m2S7do8G~PomaxkExyxSsdA1WMueKmkS89R84PpMwPjQxxwXckI0RBhpJdx7id0jwuSycA8QvJVGjJMfe8qrK404fmJOR4N04kzTIC9hnLJKS0~RnsBGVnnFVrVbHO-2n5Lol-Y8266gQu3D8cvjXzU7Bzy6j6CGrlduSNWjCI6sBGDZvL7XlBG-Fi6rVhLW9zmdg-kkEFMonCxJftubntzrIKpdrzmcY5-iHfbr8om4Rw__)

---

## 🚀 Features
- **User Authentication** (Register, Login, Forgot Password, Reset Password)
- **Token-based Authentication (JWT)**
- **Referral System** (Track referred users and rewards)
- **Secure Password Reset via Email (Nodemailer + SMTP)**
- **Middleware for Authentication and Error Handling**

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL + Prisma ORM
- **Authentication:** JWT + Bcrypt.js
- **Email Service:** Nodemailer + SMTP
- **API Testing:** Postman or Thunder Client Extension

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

### **Referral System**
| Method | Endpoint                | Description                              | Auth Required |
|--------|--------------------------|------------------------------------------|---------------|
| GET    | `/api/referrals`         | Get user referral list                  | ✅ Yes |
| GET    | `/api/referral-stats`    | Retrieve referral statistics             | ✅ Yes |


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

