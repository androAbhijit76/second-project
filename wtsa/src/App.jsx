// import React from 'react'
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import UserDashBoard from './Pages/CMS/UserDashBoard/UserDashBoard';
// import Products from './Pages/CMS/Products/Products';
// import Login from './Pages/Auth/Login/Login';
// import Header from './Pages/Layout/Header/Header';
// import Footer from './Pages/Layout/Footer/Footer';
// // import Registration from './Pages/Auth/Registration/Registration';
// import Registration from './Pages/Auth/Registration/Registration';
// import Create from './Pages/CMS/Create/Create';
// import SingleProduct from './Pages/CMS/SingleProduct/SingleProduct';
// import Update from './Pages/CMS/Update/Update';

// export default function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <Header/>
//       <Routes>
//         <Route path='/' element={<UserDashBoard/>}/>
//         <Route path='/create' element={<Create/>}/>
//         <Route path='/products' element={<Products/>}/>
//         <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
//         <Route path='/update/:id' element={<Update/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/regis' element={<Registration/>}/>

//       </Routes>
//       <Footer/>
//       </BrowserRouter>
//     </>
//   )
// }


































import React, { Component } from 'react'
import { Suspense,lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
// import UserDashBoard from './Pages/CMS/UserDashBoard/UserDashBoard';
const UserDashBoard=lazy(()=>import('./Pages/CMS/UserDashBoard/UserDashBoard'))
const Products=lazy(()=>import('./Pages/CMS/Products/Products')) 
const Login =lazy(()=>import('./Pages/Auth/Login/Login'))
// import Header from './Pages/Layout/Header/Header';

const Header=lazy(()=>import('./Pages/Layout/Header/Header'))
const Footer =lazy(()=>import('./Pages/Layout/Footer/Footer')) 
// import Registration from './Pages/Auth/Registration/Registration';
const Registration=lazy(()=>import('./Pages/Auth/Registration/Registration'))   
const Create=lazy(()=>import('./Pages/CMS/Create/Create'))
const SingleProduct=lazy(()=>import('./Pages/CMS/SingleProduct/SingleProduct')) 
const Update=lazy(()=>import('./Pages/CMS/Update/Update')) 
import { toast } from 'react-toastify';

import Loading from './Loading/Loading';


export default function App() {

  function PrivateRoute ({children}) {
       const token= 
       localStorage.getItem("token") || sessionStorage.getItem("token")
       return token!==null && token!==undefined  ? (
        children
       )  :  (
       <>
        <Navigate to="/"/>
        {toast.error("Please Login First eighter you cannot access")}</>
       )
    
  }

  const publicRouteName=[
    {
      path:"/",
      Component:<UserDashBoard/>
    },
    {
      path:"/login",
      Component:<Login/>
    },
    {
      path:"/regis",
      Component:<Registration/>
    }
  ]

  const privateRouteName=[
    {
      path:"/create",
      Component:<Create/>
    },
    {
      path:"/products",
      Component:<Products/>
    },
    {
      path:'/singleproduct/:id',
      Component:<SingleProduct/>
    },
    {
      path:'/update/:id',
      Component:<Update/>
    }
  ]
  return (
    <>
  <Suspense fallback={<Loading/>}>
  <BrowserRouter>
      <Header/>
      <Routes>
       
{publicRouteName?.map((route,index)=>{
  return(
    <Route exact path={route.path} element={route.Component} />
  )
})}


{privateRouteName?.map((route,index)=>{
  return(
    <Route  exact path={route.path} 
    
    
    element={<PrivateRoute>{route.Component}</PrivateRoute>}
    />
  )
})}
      </Routes>
      <Footer/>
      </BrowserRouter>


  </Suspense>
     
    </>
  )
}
