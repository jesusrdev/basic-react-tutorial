// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

// import Parrafo from "./Parrafo.jsx";
// import Link from "./Link.jsx";
// import Counter from "./Counter.jsx";
import Pokemones from "./Pokemones.jsx";

function App() {

  return (
    <>
      {/* <div>
        <Link
          href="https://vitejs.dev"
          srcImagen={viteLogo}
          alt="Vite logo"
          className={"logo"}
        />
        <Link
          href="https://react.dev"
          srcImagen={reactLogo}
          alt="React logo"
          className={"logo react"}
        />
      </div> */}
      <h1>Vite + React</h1>
      {/* <div className="card">
        <Counter />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Parrafo text="hola" />
        <Parrafo text="adios" />
        <Parrafo text="hola de nuevo" />
        <Parrafo>Este es un parrafo</Parrafo>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <Pokemones />
      </div>
    </>
  );
}

export default App;
