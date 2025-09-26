import { createContext, useState } from 'react';
import { CloseButton } from '../components/Buttons/CloseButton';
import { DarkModeToggle } from '../components/DarkModeToggle/DarkModeToggle';
import { productData } from '../data/ProductData';
import { ProductList } from '../components/ProductList/ProductList';
import './App.scss';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <header className="app__header">
          <div className="app__top">
            <h1>Filters</h1>
            <CloseButton />
          </div>
          <DarkModeToggle />
        </header>
        <main>
          <ProductList data={productData} />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
