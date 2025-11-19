import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { PageWrapper } from "./components/global/PageWrapper"
import Data from "./pages/Data"


function App() {
  return (
    <div className="">
      
      <Routes>
        <Route path="/" element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        } />

        <Route path="/data" element={
          <PageWrapper>
            <Data />
          </PageWrapper>
        } />
   
      </Routes>
    </div>
  )
}

export default App