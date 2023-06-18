/* eslint-disable react/prop-types */
import {useParams,useLocation,Link,useNavigate } from 'react-router-dom'
import supabase from '../client'
const ViewCreator = ({setAllCreators}) => {
  let{userId} = useParams()
    const state = useLocation()
const navigate = useNavigate()
  
  const creator = state.state



  // Check if state is null
  const stateIsNull = (creator === null);
  // Redirect to homepage if state is null
  if (stateIsNull) {
    navigate('/'); 
  }

    const onDelete = async (e)=>{
      e.preventDefault()
      const deleteConfirm = confirm(`Are you sure you want to delete ${creator.name}?`)

      if(deleteConfirm){
        const {error} = await supabase
        .from('creator')
        .delete()
        .eq("id",creator.id)
        fetchData(error)
      }

    
  }

const fetchData = async(error)=>{

  if(!error){
    const {data} = await supabase
    .from('creator')
    .select()
    setAllCreators(data)
    navigate("/")
    
  }else{
    console.error(error)
  }
}

  return (
  <article>

<div className='cardsGrid '>
  {creator.creator_img.length>0? <div>
    <img src={creator.creator_img} />
  </div>:null}
 
  <div>
  
    <hgroup>
    <h1> {creator.name}</h1>
    <h2>{creator.desc}</h2>
  
  
  
    </hgroup>
    <div className='socials'>
    {creator.youtube_URL.length > 0? (<span><svg viewBox="0 0 30 20" aria-hidden="true" width="48" >
    <g>
          <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill='currentColor' ></path>
          <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" className='yt'  ></path>
        </g>
        </svg>
  
        <a href={"https://www.youtube.com/@"+creator.youtube_URL} id="meta" target="_blank"  rel="noopener noreferrer">@{creator.youtube_URL}</a></span> ): null }
  
        {creator.insta_URL.length > 0? <span> <svg aria-label="Instagram" className="svg" color="currentColor" fill="currentColor"  height="24" role="img" viewBox="0 0 24 24" width="24"><title>Instagram</title><path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path></svg> <a href={"https://www.instagram.com/"+creator.insta_URL} id="meta" target="_blank"  rel="noopener noreferrer"> @{creator.insta_URL}</a></span>: null }
  
  
        {creator.twitter_URL.length > 0? <span><svg viewBox="0 0 24 24" aria-hidden="true" className="svg" color="currentColor" fill="currentColor" ><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg> <a href={"https://twitter.com/"+creator.twitter_URL} id="meta" target="_blank"  rel="noopener noreferrer">@{creator.twitter_URL}</a></span>: null }
    </div>
  </div>
  
  
  
</div>








<div className='grid'>
  <Link   state={creator} to={"edit"}><button>Edit</button> </Link>
<button className='delete' onClick={onDelete}>Delete</button>
  </div>

   
    </article>
  )
}

export default ViewCreator