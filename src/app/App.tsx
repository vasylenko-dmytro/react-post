import {useState} from 'react';
import {Header, Footer} from '../features/product/index';
import HomePage from '../pages/Home/HomePage';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-neutral-700">
      <Header onSearch={setSearchTerm}/>

      <main className="flex-1">
        <HomePage searchTerm={searchTerm}/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;