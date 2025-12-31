import Header from "./components/Header";
import Footer from "./components/Footer";

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
