import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserContextReducer} from './Pages/Statemanagement.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
<UserContextReducer>

<App/>
</UserContextReducer>


 </>
)
