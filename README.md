# Results Summary Component

A responsive results summary component built with **React + Vite** as a learning project. Based on a [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

![Preview](./preview.jpg)

## 🚀 Live Demo

**[View Live Site](https://ringlochid.github.io/results-summary-fem-react/)**

## 📚 What I Learned

This was my first React project! Key concepts I practiced:

### React Fundamentals

- **Components** - Breaking UI into reusable pieces (`SummaryListItem`, `ScoreContainer`, etc.)
- **Props** - Passing data between components (`score`, `category`, `icon`)
- **useState** - Managing component state for loading/error states
- **useEffect** - Fetching data when component mounts
- **Conditional Rendering** - Showing loading/error states

### Project Structure

```
src/
├── api/
│   └── summaryApi.js      # Data fetching logic
├── constants/
│   └── colors.js          # Color constants per category
├── App.jsx                # Main component
├── index.css              # Styles
└── main.jsx               # Entry point
```

### Key Patterns Used

- **Separation of concerns** - API logic in dedicated file
- **Constants file** - Centralized color definitions
- **Dynamic styling** - Applying colors based on category

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **CSS** - Custom properties (variables) for theming
- **gh-pages** - Deployment to GitHub Pages

## 🏃 Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Features

- ✅ Responsive design (mobile & desktop)
- ✅ Dynamic data loading from JSON
- ✅ Category-specific colors
- ✅ Hover states on button
- ✅ Deployed to GitHub Pages

## 🎨 Design

Design provided by [Frontend Mentor](https://www.frontendmentor.io). The challenge includes:

- Mobile & desktop layouts
- Color palette and typography specs
- Interactive states

## 📝 Notes

**GitHub Pages Deployment:**

- Vite's `base` config must match the repo name
- Static assets go in `public/` folder
- Use `import.meta.env.BASE_URL` for dynamic asset paths
