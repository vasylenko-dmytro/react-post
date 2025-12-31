import { Header, Footer } from '../features/product/index';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
            {/* Your page content goes here */}
        </main>
        <Footer />
    </div>
  )
}

export default App
