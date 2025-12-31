import { Header, Footer, ProductsGrid } from '../features/product/index';
import HomePage from "../pages/Home/HomePage";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1">
        {/*<ProductsGrid />*/}
        <HomePage />
      </main>
      <Footer/>
    </div>
  )
}

export default App
