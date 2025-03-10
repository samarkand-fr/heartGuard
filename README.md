# 🏥 Health News & Articles Management App

A web application that displays health-related articles and news with the ability to manage content dynamically via a web interface or API. The app is built using **Next.js**, **Tailwind CSS**, **MongoDB**, and **Cloudinary** for image management.

---

## 🚀 Features

✅ **Dynamic Article Management**: Add, update, and delete articles through a web interface or API.\
✅ **Health News**: Display and Search health-related news articles.\
✅ **Responsive Design**: Works well on all screen sizes with a clean, modern UI powered by Tailwind CSS.\
✅ **Image Hosting**: Uses Cloudinary for optimized image storage.

---

## 🛠️ Tech Stack

- **Next.js** - React framework for building the web application.
- **MongoDB** - NoSQL database for storing articles.
- **Tailwind CSS** - Utility-first CSS framework for custom styling.
- **Cloudinary** - Image hosting and optimization platform.
- **TypeScript** - Strongly typed JavaScript for better maintainability.

---


## 📦 Setup Instructions

### Prerequisites
- **Node.js** (LTS version)
- **MongoDB** (local or via MongoDB Atlas)

### Installation
Clone the repository:
```bash
git clone https://github.com/samarkand-fr/heartGuard.git
cd heartguard
```
Install dependencies:
```bash
npm install
```
Set up environment variables:
Create a `.env.local` file at the root of the project and add the following:
```bash
MONGO_URI=mongodb://localhost:27017/your-database-name
CLOUDINARY_URL=your-cloudinary-url
```
Replace `your-database-name` and `your-cloudinary-url` with your actual MongoDB connection URI and Cloudinary URL.

Start the development server:
```bash
npm run dev
```
Your app will be live at [http://localhost:3000](http://localhost:3000).

---

## 🎯 Usage

- **Home Page**: Displays a list of health articles and news. Articles can be searched via the search bar.
- **Article Details**: Clicking on an article title will show detailed content, including the title, summary, and image.
- **Admin Panel**: Manage articles dynamically (Add/Edit/Delete) through a backend API.

---

## 🛠 Development & Contribution

If you want to contribute or run the app in a local environment, here’s how to get started:

Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/health-news-app.git
cd health-news-app
npm install
```
Create the `.env.local` file with the appropriate MongoDB and Cloudinary configurations.

Run the app locally:
```bash
npm run dev
```

---

## 🔄 Running Migrations
If you decide to migrate your database structure or add new fields to the articles, you can run scripts from the `migration` folder to manage these updates.

---

## 📝 License
This project is open-source and available under the **MIT License**.

