/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import supabase from '../client'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCreator = ({setAllCreators}) => {
const [newCreator,setNewCreator]=useState({
  name:"",
  twitter_URL:"",
  youtube_URL:"",
  insta_URL:"",
  desc:"",
  creator_img:""

})
const navigate = useNavigate()

const onSubmit = async(e)=>{
e.preventDefault()
const {error} = await supabase
  .from('creator')
  .insert(newCreator)



  if(!error){
    const {data,error} = await supabase
    .from('creator')
    .select()
    setAllCreators(data)
    navigate("/")

  }

  


}



  return (
    <div>

      <form onSubmit={onSubmit}>
        
<label htmlFor="Name" className='heading'>
<h2 className='inputName'>Name</h2>

</label>

<input type="text" id="name" name="name" onChange={(e)=>{setNewCreator({...newCreator,name:e.target.value})

}} value={newCreator.name}/>


<label htmlFor="Description">
<h2 className='inputName'>Description</h2>
</label>

<textarea type="text" id="name" name="name" onChange={(e)=>{setNewCreator({...newCreator,desc:e.target.value})

}} value={newCreator.desc}/>
<label htmlFor="Image" className='heading'>
<h2 className='inputName'>Image</h2>
<span>Provide a link to an image of your creator. Be sure to include the http://</span>
</label>

<input type="text" id="name" name="name" onChange={(e)=>{setNewCreator({...newCreator,creator_img:e.target.value})

}} value={newCreator.creator_img}/>
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
" onChange={(e)=>{setNewCreator({...newCreator,youtube_URL:e.target.value})

}} value={newCreator.youtube_URL}/>


<label htmlFor="twitter">
<h3 className='inputName'>Twitter</h3>
<span><em>The creator&apos;s Twitter handle (without the @)</em></span>
</label>

<input type="text" id="twitter" name="twitter" onChange={(e)=>{setNewCreator({...newCreator,twitter_URL:e.target.value})

}} value={newCreator.twitter_URL}/>

<label htmlFor="instagram">
  <h3 className='inputName'>Instagram</h3>
  <span><em>The creator&apos;s Instagram handle (without the @)</em></span>
  </label>

<input type="text" id="instagram" name="instagram" onChange={(e)=>{setNewCreator({...newCreator,insta_URL:e.target.value})

}} value={newCreator.insta_URL}/>

<button type='submit'>Submit</button>
      </form>


    </div>
  )
}

export default CreateCreator