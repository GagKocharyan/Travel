import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"

import data from './data/data.json'


function App() {


  return (
    <>
     <Header />
     <Main data={data.main}  />
    </>
  )
}

export default App
