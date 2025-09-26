import { CloseButton } from '../components/Buttons/CloseButton';
import { DarkModeToggle } from '../components/DarkModeToggle/DarkModeToggle';
import { productData } from '../data/ProductData';
import { ProductList } from '../components/ProductList/ProductList';
import './App.scss';

function App() {
  return (
      <div className="app">
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
  );
}

export default App;
