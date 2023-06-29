import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="container min-w-full flex h-screen dark:text-white dark:bg-slate-600">
      <div className="shrink-0">
        <Sidebar />
      </div>
      <div className="flex-auto shrink-0">
        <Routes>
          <Route index Component={Home} />
        </Routes>
      </div>
    </div>
  )
}

export default App
