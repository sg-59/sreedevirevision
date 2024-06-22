import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

import First from './Pages/First'
import Seond from './Pages/Seond'
import Third from './Pages/Third'
import Fourth from './Pages/Fourth'
import Fifth from './Pages/Fifth'



function App() {



  const hello = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<First />} />
        <Route path='/second' element={<Seond />} />
        <Route path='/third' element={<Third />} />
        <Route path='/fourth' element={<Fourth />} />
        <Route path='/fifth' element={<Fifth />} />
 
      </>
    )
  )

  return (

    <RouterProvider router={hello}></RouterProvider>
 

  )
}

export default App
