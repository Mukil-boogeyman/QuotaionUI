import React from 'react';
import Grid from '@mui/material/Grid2'; // Import Grid correctly
import Typography from '@mui/material/Typography'; // Import Typography correctly
import Sidebar from '../components/Sidebar';
import AppBar from '../components/Appbar/Appbar';
import { Box ,Button} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdKeyboardArrowLeft } from "react-icons/md";
import Dropdown from '../components/Dropdown/Dropdown'
import Leaddetails from '../components/LeadDetails/Leaddetails'
import Unitdetails from '../components/UnitDetails/Unitdetails';
import Quantity from '../components/QuantityDetails/Qutationdetails';
import MediaCard from '../components/card'
import SearchAppBar from '../components/TopnavBar';
import MiniDrawer from '../components/SideBar2';
import SelectLabels from '../components/Dropdown/Dropdown';
function Home() {
  return (
    <div>
      <Grid container sx={{height:"100vh",width:"100%",fontFamily:"Nunito Sans"}}>
        <Grid  color="white" sx={{height:"7.5%",width:"100%"}}>
            
        </Grid>
        <Grid item color="grey" sx={{height:"100%",width:"100vw",display:"flex",marginTop:"-50px"}}>
            <Grid sx={{display:'flex',flexGrow:5}}>
             
            </Grid>
            <Grid item size={{md:13}}>
              <Box sx={{height:'5%',display:'flex',justifyContent:'space-between',alignItems:"center"}}>
              <Grid  sx={{padding:"30px"}}> 
                
                  <Box sx={{display:'flex'}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'24px',width:'24px',backgroundColor:'#E4E8EE',borderRadius:'50%'}}><MdKeyboardArrowLeft />
                    </Box>
                     <span style={{fontSize:'16px',fontWeight:'bold',color:'black',marginLeft:'12px'}}>Create Quotation to Existing Lead</span>
                     </Box>
                     
              </Grid>
              <Box sx={{marginRight:'2%'}}><Dropdown/></Box>
              </Box>

                <Box  bgcolor="#F5F7FA" sx={{padding:"1px",height:"94%",overflowY:"hidden"}}>
                  <Box bgcolor="red" sx={{margin:"1%",width:"98%",height:"89%",borderRadius:"15px",position:"absolute"}}>

                  <Box  bgcolor="#ffffff" sx={{width:"96%",height:"7%",display:'flex',borderTopLeftRadius:'10px',borderTopRightRadius:"10px",color:'#5078E1',justifyContent:'start',alignItems:'center',paddingLeft:'20px',fontSize:'14px',borderBottom:"1px gainsboro solid"}}>
                    Add Contact &gt; Lead Details &gt; Preview and Create Lead &gt; Quantity Details &gt;<Box sx={{backgroundColor:'blue',display:'flex',justifyContent:'center',alignItems:'center',height:'20px',width:'20px',borderRadius:'50%',color:'white',marginLeft:'3px',marginRight:'3px'}}>4</Box>Preview and Create
                  </Box>
                  


                  <Box sx={{width:"100%",height:"89%",display:"flex",borderRadius:"20px"}}>
                    <Box bgcolor="#ffffff" sx={{height:"100%",width:"30%"}}><Leaddetails/></Box>
                    <Box bgcolor="#f6f8fa" sx={{height:"90%",width:"35%"}}><Unitdetails/></Box>
                    
                    <Box bgcolor="#ffffff" sx={{height:"98%",width:"30%",padding:'17px'}}> <Box marginBottom={'20px'}>  <Typography>Quotation</Typography></Box><Quantity/></Box>                    
                   
                  </Box>

                  <Box bgcolor="black" sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomLeftRadius:"15px",marginTop:"-200px",alignItems:"center"}}>
                    <Box sx={{marginLeft:'50px'}}><Button sx={{height:'40px',width:'100px',border:'1px solid #E4E8EE'}}>Previous</Button></Box>
                    <Box sx={{display:'flex',gap:'20px',marginRight:"20px"}}>
                      <Button sx={{height:'40px',width:'75px',border:'1px solid #E4E8EE'}}>Back</Button>
                      <Button sx={{height:'40px',width:'143px',backgroundColor:'blue',color:'white',fontSize:'12px',marginRight:'20px'}}>Create Question</Button>
                    </Box>
                  </Box>
                  </Box>
                  
                 

                  
                  
                </Box>
               

            </Grid>
        </Grid>
      </Grid>
    </div>
    // <div>
    //   <MiniDrawer/>
      

    // </div>
  )
}

export default Home
