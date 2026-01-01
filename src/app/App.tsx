import { Header, Footer } from '../features/product/index';
import HomePage from '../pages/Home/HomePage';

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-neutral-700">
      <Header/>
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer/>
    </div>
  )
}

export default App
