import React ,{useEffect ,useState} from 'react'
import './../asssets/photogallery.css'
import { Button } from '@mui/material';
import axios from 'axios'
export default function PhotoGallary() {

    const [input, setinput] = useState({
         search:"",
         showSearchResult:""
    })
   const [showRandom , setShowRandom] = useState(true)
   const [list,setList] = useState([])
     const [searchData,setSearchData] = useState([])
     
     

       

    useEffect(()=>{ 
        
         if(input.showSearchResult==""){
            axios.get('https://picsum.photos/v2/list?page=2&limit=100').then((res)=>{
              if(res.status==200){
                    setList(res.data)
              }
        })  
         }
       
   if( input.showSearchResult!="" ){ 

    axios.get(`https://picsum.photos/seed/${input.showSearchResult}/800/500`).then((res)=>{
              if(res.status==200){
                setSearchData(res.request.responseURL)
                  setShowRandom(false)
                     
              }
        }) 
        
   }
            
    } , [input.search] )


    return (
    <React.Fragment>
      <div className="heading">
         <h1>
              Photo Gallery 
         </h1>

         <div className="searchBar">
             <input type="text" value={input.search} name="search"  onChange={(e)=>  { 
                   setinput({...input , [e.target.name]:e.target.value  }  )  } 
                 } />
               <Button variant="text" onClick={()=>{ setinput({showSearchResult:input.search})}}>Search</Button>
            </div>
       </div>  

        <div className="mainBox">
            
         <div className="mainDiv">
         
          <div className="imageList">
                       
           {  showRandom && list && list.length>0 ?

              list.map((ele,index)=>{
                  return (
                    <div className="image">
                                <img src={ele.download_url}
                                 width="200px"
                                   height="150px"
                                     alt={ele.author}  /> 
                                    </div>
                                  ) 
                      })   :""
                        }
                    
                      
                        {!showRandom ?
                            <div className="SearchImage">
                                <img src={searchData}
                                 width="800"
                                   height="500"
                                       /> 

                                </div> : ""
                        }
 


          </div>
              
            

             
         </div>
        
        </div>
       
 
     
     </React.Fragment>
  )
}
