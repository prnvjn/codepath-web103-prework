/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import supabase from '../client'
// import DeleteButton from "../components/DeleteButton"

 const EditCreator = ({setAllCreators}) => {

  const data = useLocation()
const [editCreator,setEditCreator] = useState(data.state)
const navigate = useNavigate()



const onSubmit = async(e)=>{
  e.preventDefault()
  const {error} = await supabase
    .from('creator')
    .update(editCreator)
    .eq("id",editCreator.id)
  
    fetchData(error)
  }

const onDelete = async(e)=>{
      e.preventDefault()
      const deleteConfirm = confirm(`Are you sure you want to delete ${editCreator.name}?`)

      if(deleteConfirm){
        const {error} = await supabase
        .from('creator')
        .delete()
        .eq("id",editCreator.id)
        fetchData(error)
      }

    
  }

const fetchData = async(error)=>{

  if(!error){
    const {data,error} = await supabase
    .from('creator')
    .select()
    setAllCreators(data)
    navigate("/")
    
  }else{
    console.error(error)
  }
}


  return (
    <div>

<form onSubmit={onSubmit}>
        
<label htmlFor="Name" className='heading'>
<h2 className='inputName'>Name</h2>

</label>

<input type="text" id="name" name="name" onChange={(e)=>{setEditCreator({...editCreator,name:e.target.value})

}} value={editCreator.name}/>


<label htmlFor="Description">
<h2 className='inputName'>Description</h2>
</label>


<textarea type="text" id="name" name="name" onChange={(e)=>{setEditCreator({...editCreator,desc:e.target.value})

}} value={editCreator.desc}/>

<label htmlFor="Image" className='heading'>
<h2 className='inputName'>Image</h2>
<span>Provide a link to an image of your creator. Be sure to include the http://</span>
</label>

<input type="text" id="name" name="name" onChange={(e)=>{setEditCreator({...editCreator,creator_img:e.target.value})

}} value={editCreator.creator_img}/>

<hgroup>
<h2>Social Media Links</h2>
<h3>Provide at least one of the creator&apos;s social media links.</h3>
</hgroup>

<label htmlFor="Youtube
">
  
  <h3 className='inputName'>Youtube</h3>
<span><em>The creator&apos;s YouTube handle (without the @)</em></span>
</label>

<input type="text" id="youtube
" name="youtube
" onChange={(e)=>{setEditCreator({...editCreator,youtube_URL:e.target.value})

}} value={editCreator.youtube_URL}/>


<label htmlFor="twitter">
<h3 className='inputName'>Twitter</h3>
<span><em>The creator&apos;s Twitter handle (without the @)</em></span>
</label>

<input type="text" id="twitter" name="twitter" onChange={(e)=>{setEditCreator({...editCreator,twitter_URL:e.target.value})

}} value={editCreator.twitter_URL}/>

<label htmlFor="instagram">
  <h3 className='inputName'>Instagram</h3>
  <span><em>The creator&apos;s Instagram handle (without the @)</em></span>
  </label>

<input type="text" id="instagram" name="instagram" onChange={(e)=>{setEditCreator({...editCreator,insta_URL:e.target.value})

}} value={editCreator.insta_URL}/>
<div className="grid">
<button type='submit'>Edit</button>
<button onClick={onDelete} className="delete">Delete</button>
{/* <DeleteButton toggle={deleteToggle}></DeleteButton> */}
</div>

      </form>

    </div>
  )
}

export default EditCreator