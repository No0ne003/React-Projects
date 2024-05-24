
<h1 align="center">
  <b>React-Projects</b>
</h1>

<p align="center">
   <a href="https://github.com/No0ne003/React-Project/stargazers"><img src="https://img.shields.io/github/stars/No0ne003/React-Project?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
  <a href="https://github.com/No0ne003/React-Project/commits/"><img src="https://img.shields.io/github/last-commit/No0ne003/React-Project?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
  <img src='https://img.shields.io/github/languages/top/No0ne003/React-Project?style=for-the-badge&labelColor=363a4f&color=b7bdf8'>
</p>
<p align="center">
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></a>
  <a href="https://vitejs.dev/"><img src='https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white'></a>
</p>

Welcome to the **React-Projects** repository! This project is a collection of React applications bundled together using Vite, styled with Tailwind CSS, and enhanced with UI components from ui.shadcn. It's a powerful and flexible setup that allows you to manage and deploy multiple React projects within a single application.

## Table of Contents

- [Getting Started](#getting-started)
- [Contributing](#contributing)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/No0ne003/React-Projects.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   This will start the development server, and you can access the application at `http://localhost:5173/React-Projects/`.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

### How to Contribute

1. **Create a folder for your project:**
   - Navigate to the `/src/pages/` directory.
   - Create a new folder named after your project.

2. **Develop your project within the new folder.**

3. **Add project details to `src/data/project.js`:**
   ```js
   {
     id: {unique_id},
     name: {project_name},
     path: {project_path},
     tags: ['{tags}']
   }
   // Example:
   {
     id: 19,
     name: 'Weather App',
     path: 'weather-app',
     tags: ['project']
   }
   ```

4. **Update routing in `app.jsx`:**
   - Import your project file using React's `lazy` function:
     ```js
     const WeatherApp = lazy(() => import("@/pages/Weather-app/index"));
     ```
   - Create a route for your project:
     ```js
     <Route path="weather-app" element={<WeatherApp />} />
     ```
     Ensure the `path` matches the one specified in `project.js`.

Thank you for contributing!
