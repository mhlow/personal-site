import './App.css'
import { BrowserRouter } from "react-router-dom"
import AnimatedRoutes from "./router"

// Following this
// https://www.youtube.com/watch?v=zFluneNORCA
// https://www.youtube.com/watch?v=_gKEUYarehE
// https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting


function App() {

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)} className="">
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //     {/* <Link to="/home">Home</Link> */}
  //   </>
  // )
}

export default App
