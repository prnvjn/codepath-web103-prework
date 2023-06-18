import { useState,useEffect } from 'react'
import {useRoutes} from "react-router-dom"
import './App.css'
import ViewCreator from "./pages/ViewCreator"
import ShowCreators from "./pages/ShowCreators"
import EditCreator from "./pages/EditCreator"
import CreateCreator from "./pages/CreateCreator"
import { Link } from 'react-router-dom'
import supabase from './client'
function App() {
  const [allCreators, setAllCreators] = useState([])


useEffect(()=>{


fetchCreators()
},[])


const fetchCreators = async () =>{
  const {data,error} = await supabase
    .from('creator')
    .select()
    setAllCreators(data)

}
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators data={allCreators}/>
    },
    {
      path: '/:userId',
      element: <ViewCreator setAllCreators={setAllCreators}/>
    },
    {
      path: '/:userId/edit',
      element: <EditCreator setAllCreators={setAllCreators} />
    },
    {
      path: '/create',
      element: <CreateCreator setAllCreators={setAllCreators} />
    }
    
    
    ])


  return (
    <div > 
      <section className="gradient">
 <nav className='container flex'>
  <ul>
    <li><span className='title'>Creator verse</span></li>
  </ul>
  <ul>
   
    <li><Link to="/"  className="contrast" role='button'>View all creator</Link></li>
   
   
    <li><Link to="/create" role='button'>Add a Creator</Link></li>
  </ul>
  
</nav>

    </section>
   

<div className='container'>
{element}
</div>
    

    </div>
  )
}

export default App
