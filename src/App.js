import Gallery from "./components/Gallery";
import Intro from "./components/Intro";

function App() {
  return (
    <section className="w-full  overflow-x-hidden min-h-screen flex items-center justify-center bg-slate-100">
      <div className="max-w-7xl mx-auto py-10 ">
        <Intro />
        <Gallery />
      </div>
    </section>
  );
}

export default App;
