import { Outlet, useNavigation } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";

function App() {
  const state = useNavigation();

  return (
    <section
      id="home"
      className="max-w-2xl min-h-screen mx-auto p-6 bg-primary"
    >
      <div className="flex justify-center items-center ">
        <Navbar></Navbar>
      </div>

      <main className="pb-20 pt-12 md:pt-20">
        {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </main>

      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-16 z-50 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
    </section>
  );
}

export default App;
