# Personal Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, **JavaScript**, and **CSS**. The application follows a component-based architecture with reusable UI components and a data-driven approach using JSON files to separate content from presentation.

The primary goal of this project is to showcase my web development projects, technical skills, professional experience, education, and certifications while demonstrating modern React development practices.

---

## Features

* Modern React application powered by Vite
* Client-side routing using React Router DOM
* Reusable and modular component architecture
* JSON-driven content management
* Responsive layouts for desktop and mobile devices
* Dark theme with purple accent colour
* Reusable cards and UI components
* Easily maintainable project structure

---

## Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite
* React Router DOM

---

## Folder Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── AboutPreview/
│   ├── Button/
│   ├── ContactCTA/
│   ├── ContactForm/
│   ├── ExperienceCard/
│   ├── ExperiencePreview/
│   ├── FeaturedProjects/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── ProjectCard/
│   ├── SectionTitle/
│   ├── SkillCard/
│   ├── SkillsSection/
│   └── SocialLinks/
│
├── data/
│   ├── certifications.json
│   ├── education.json
│   ├── experience.json
│   ├── navigation.json
│   ├── personal.json
│   ├── projects.json
│   ├── site.json
│   ├── skills.json
│   └── socials.json
│
├── layouts/
│
├── pages/
│   ├── About/
│   ├── Contact/
│   ├── Home/
│   ├── NotFound/
│   └── Projects/
│
├── routes/
│
├── styles/
│
├── App.jsx
└── main.jsx
```

---

## Project Architecture

The project follows a component-based architecture where each page is composed of reusable UI components.

```
Home
│
├── Hero
├── About Preview
├── Featured Projects
├── Skills
├── Experience Preview
└── Contact CTA
```

Content is stored inside JSON files, allowing the interface to update without changing component logic.

---

## Data-Driven Design

Application data is separated into dedicated JSON files.

* personal.json
* projects.json
* experience.json
* skills.json
* education.json
* certifications.json
* socials.json
* navigation.json
* site.json

Components consume this data through mapping instead of hardcoding content, making the application scalable and easier to maintain.

---

## Current Progress

### Completed

* Project setup using Vite
* React Router configuration
* Main layout implementation
* Responsive navigation
* Footer
* Reusable Button component
* Reusable Section Title component
* Social Links component
* Hero component
* Skill Card component
* Project Card component
* Experience Card component
* Contact Form component
* Homepage section components
* JSON data structure
* Component composition
* Responsive layout foundation

### In Progress

* Populating real portfolio data
* Adding project assets and images
* UI/UX refinement
* Responsive improvements
* Visual polish

### Planned

* React Icons integration
* Scroll animations
* Improved hover effects
* Contact form integration
* SEO improvements
* Performance optimisation
* Final deployment to Vercel

---

## Getting Started

Clone the repository.

```bash
git clone <repository-url>
```

Navigate into the project.

```bash
cd <project-folder>
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Build for production.

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

---

## Design Principles

This project was built around the following principles:

* Component reusability
* Separation of concerns
* Maintainability
* Scalability
* Responsive design
* Clean and readable code
* Consistent naming conventions
* Data-driven rendering

---

## Future Improvements

* Dynamic filtering of projects
* Search functionality
* Theme switching
* Blog section
* CMS integration
* Backend API integration
* Unit testing
* End-to-end testing
* Analytics integration

---

## Author

**Oyama Mbatani**

Web Developer • Data Analyst • Information Systems Graduate
