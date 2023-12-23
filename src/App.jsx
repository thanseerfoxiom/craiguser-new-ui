import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Public/Home'
import { PrivateRoute } from './utils/PrivateRoute'
import AdminRoute from './Routes/AdminRoute'
import { BasePath, ForgotpasswordPath, ProfilePath, RegisterPath } from './utils/Constants'
import Forgotpassword from './Pages/Private/Forgotpassword'
import Register from './Pages/Private/Register'
import Errorpage from './Pages/Private/Errorpage'
import Profile from './Pages/Public/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path={ForgotpasswordPath} element={<Forgotpassword/>}/>
      <Route path={RegisterPath} element={<Register/>}/>
      <Route path={BasePath} element={<PrivateRoute><AdminRoute/></PrivateRoute>}>
        <Route index element={<Home />} />
        <Route path={ProfilePath} element={<Profile />} />
      </Route>
      <Route path="/*" element={<Errorpage />} />
    </Routes>
    </>
  )
}

export default App
