import Gallery from "./components/Gallery";
import Intro from "./components/Intro";

function App() {
  return (
    /* Main container for full window */
    <section className="w-full  overflow-x-hidden min-h-screen flex items-center justify-center bg-slate-100">
      {/* Gallery full application wrapper inside this div */}
      <div className="max-w-7xl mx-auto py-10 ">
        {/* Introduction of applicants */}
        <Intro />
        {/* Gallery component */}
        <Gallery />
      </div>
    </section>
  );
}

export default App;
