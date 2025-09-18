# ELARO Website (V1)

This repository contains the source code for the V1 landing page for ELARO, a study assistant app designed to help students never forget what they study.

## Project Overview

This is a simple, static website built with vanilla HTML, CSS, and JavaScript. The design is minimalist and focuses on a single, clear value proposition.

### Key Files

*   `index.html`: The main homepage. It features a dynamic hero section that cycles through the app's key use cases.
*   `coming-soon.html`: A simple page linked from the "Try for free" button.
*   `style.css`: The single stylesheet for the entire website. It contains all styling, including brand colors as CSS variables, layout, typography, and responsive media queries.
*   `script.js`: Contains the JavaScript logic for all animations, including the hero text fade-in and the dynamic content rotator on the homepage.
*   `package.json`: Defines the project and its single dependency, `serve`, which is used to run a local development server.

## How to Run the Project Locally

This project uses `npm` (Node Package Manager) to manage the development server.

1.  **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/ ) installed on your system. This will also install `npm`.

2.  **Install Dependencies:** Open a terminal in the project's root directory and run the following command to install the `serve` package:
    ```bash
    npm install
    ```

3.  **Start the Development Server:** Once the installation is complete, run this command:
    ```bash
    npm run dev
    ```

4.  **View the Website:** The server will start, and you can view the website by opening your browser and navigating to the address shown in the terminal (usually `http://localhost:3000` ). The site will update automatically as you save changes to the files.
