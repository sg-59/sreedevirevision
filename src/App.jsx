import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Usememo1 from './Pages/Usememo1'
import Reactmemo1 from './Pages/Reactmemo1'
import Home from './Pages/Home'
import Sub from './Pages/Sub'





function App() {

const hello = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Home/>}/>
      <Route path='/sub' element={<Sub/>}/>
  <Route path='/memo' element={<Usememo1/>} />
  <Route path='/reactmemo' element={<Reactmemo1/>} />
      </>
    )
  )

  return (

    <RouterProvider router={hello}></RouterProvider>
 

  )
}

export default App
