import Layout from './Layout/Layout'
import Start from './Pages/Start'
import NewClient from './Pages/NewClient'
import EditClient from './Pages/EditClient'
import ViewClient from './Pages/ViewClient'
import {BrowserRouter,Route, Routes}from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes >
          <Route path='/' element={<Layout/>}>
            <Route index element={<Start/>} />
            <Route path='new' element={<NewClient/>} />
            <Route path='edit/:id' element={<EditClient/>} />
            <Route path=':id' element={<ViewClient/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
