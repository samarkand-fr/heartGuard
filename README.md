
# 🏥 Health News & Articles Management App

A modern web application designed to display health-related articles, news, tips, and recipes. With the ability to manage content dynamically via a web interface or API, this app offers an engaging experience for users to stay informed on health topics. Built with **Next.js**, **Tailwind CSS**, **MongoDB**, and **Cloudinary** for seamless image management.

---

## 🚀 Features

-   ✅ **Dynamic Article Management**: Add, update, and delete articles through an intuitive web interface or API.
-   ✅ **Health News**: Display and search health-related news articles fetched from an external API.
-   ✅ **Healthy Tips**: A dedicated section offering quick and insightful health tips to encourage better living.
-   ✅ **Healthy Recipe Cards**: A curated collection of healthy recipe suggestions displayed in easy-to-read card format.
-   ✅ **Responsive Design**: A clean, modern, and mobile-friendly UI that adapts to all screen sizes using Tailwind CSS.
-   ✅ **Optimized Image Hosting**: Utilizes Cloudinary for fast and optimized image storage and delivery.

---

## 🛠️ Tech Stack

-   **Next.js** - A powerful React framework for building highly optimized web applications.
-   **MongoDB** - A flexible NoSQL database for storing articles, tips, recipes, and other content.
-   **Tailwind CSS** - A utility-first CSS framework for rapid and efficient UI development.
-   **Cloudinary** - An image hosting and optimization platform for efficient media handling.
-   **TypeScript** - Adds static typing to JavaScript for better code quality, scalability, and maintainability.

---

## 📦 Setup Instructions

### Prerequisites

Before you begin, ensure that you have the following installed:

-   **Node.js** (LTS version recommended)
-   **MongoDB** (either local or via MongoDB Atlas)
-   **Cloudinary** account for image hosting

### Installation Steps

1. Clone the repository:
    
    ```bash
    git clone https://github.com/samarkand-fr/heartGuard.git
    cd heartGuard
    ```

2. Install dependencies:
    
    ```bash
    npm install
    ```

3. Set up environment variables:
    
    - Create a `.env.local` file at the root of the project.
    - Add the following configuration:
    
    ```bash
    # MediaStack API Key
    NEXT_PUBLIC_MEDIASTACK_API_KEY=
    # Base URL for your application (for local development)
    NEXT_PUBLIC_BASE_URL=
    # Cloudinary Configuration
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    # MongoDB URI
    MONGO_URI=
    # Admin Credentials
    ADMIN_USERNAME=
    ADMIN_PASSWORD=
    # Secret Key for general app use (e.g., encryption, tokens)
    SECRET_KEY=
    # JWT Secret Key
    JWT_SECRET=
    # Node environment (production or development)
    NODE_ENV=production
    ```

4. Start the development server:
    
    ```bash
    npm run dev
    ```

    Your app will be live at [http://localhost:3000](http://localhost:3000).

---

## 🎯 Usage

-   **Home Page**: The home page is a one-stop destination, featuring health news, tips, and nutritious recipes all in one place. Users can easily navigate between sections, whether they want the latest health news, quick tips, or healthy recipe suggestions.
-   **Article Details**: Clicking on an article takes the user to a detailed view, where they can read the full article, view its title, summary, and related image.
-   **Admin Panel**: An easy-to-use admin interface allows administrators to manage articles dynamically (Add/Edit/Delete) via backend APIs.

---

## 🔄 Running Migrations

If you need to make updates to the database structure or add new fields to articles, you can manage database migrations by running scripts from the `migration` folder.

---

## 📝 License

This project is open-source and available under the **MIT License**. Contributions and improvements are welcome!
