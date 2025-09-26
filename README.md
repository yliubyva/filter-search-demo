# Search & Filters Test Task

## Live Demo
[[Link to Live Demo] ](https://filter-search-demo.netlify.app/)

## About the project

This project is the implementation of a test task that creates a product catalog page with a dynamic system for filtering, sorting, and pagination.

### Technologies Used

-   **Frontend:** React (Functional Components and Hooks)
-   **Styling:** Sass (SCSS)
-   **Build Tool:** Vite
-   **Hosting/Deployment:** Netlify

### Implementation Details (Requirements Met)

The chosen scenario for implementation was: **Cards + pagination + ordering (sorting)**.

| Requirement | Status | Implementation Notes |
| :--- | :--- | :--- |
| **Responsive Webpage** | ✅ Achieved | The site is fully responsive without relying on traditional media queries. **Flex-grids** and **fluid units** were used to ensure smooth scalability across different screen sizes (Mobile-friendly). |
| **Semantic HTML / Accessibility** | ✅ Achieved | Used semantic tags (`<main>`, `<section>`). High accessibility (A11y) ensured by adding **`aria-label`** to icon-only buttons and correctly linking **`<label>`** with **`htmlFor`** to form elements. |
| **Naming Conventions** | ✅ Achieved | CSS classes follow the **BEM methodology** for clear and maintainable styling. |
| **Sass Features (Bonus)** | ✅ Achieved | Utilized **Sass mixins (`@mixin`)** for reusable styles (e.g., flex-containers) and **variables (`_variables.scss`)** for centralized color management, enhancing maintainability. |
| **Folder Structure (Bonus)** | ✅ Achieved | Implemented a clean, hierarchical folder structure (`/src/components`, `/src/utils`, `/src/styles`, `/src/data`) for clear separation of concerns. |
| **Theming (Optional)** | ✅ Added | Basic Light/Dark theme switching functionality implemented using React Context and CSS attribute selectors. |

---

## Key Features & Optimization

### Centralized Data Flow

All filtering, sorting, and pagination logic is centralized within the **`ProductList`** component. Data processing is heavily optimized using React Hooks:

-   **`useMemo`** is used to cache expensive operations (filtering and sorting), preventing unnecessary re-calculations on unrelated state changes (like page switching).
-   **`useEffect`** ensures that the current page resets to `1` whenever filters or sort keys change, improving User Experience (UX).

### Project Structure (src)

The project adheres to a clear modular structure:

```bash
src/
  ├── App/                # Context Provider & Theme Management
  ├── components/         # Reusable components (ProductList, Pagination, Buttons, etc.)
  ├── data/               # Mock data file
  ├── styles/             # Global SCSS files (_variables, _mixins, etc.)
  ├── utils/              # Helper functions (string, price formatting)
```

## Installation

1.  Clone this repository
    ```bash
    git clone https://github.com/yliubyva/filter-search-demo.git
    ```
2.  Install NPM packages
    ```bash
    npm install
    ```
3.  Run development server (for local development)
    ```bash
    npm run dev
    ```
4.  Build for production
    ```bash
    npm run build
    ```
