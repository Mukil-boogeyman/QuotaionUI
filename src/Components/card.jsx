import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import clogo from "../assets/clogo.jpeg"
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import binicon from "../assets/binlogo.png"
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth:"222px", maxHeight:"244px" ,borderRadius:"4px"}}>
      <CardMedia
        sx={{ height: "100px",margin:"12px",borderRadius:"4px",marginBottom:"-4px" }}
        image={clogo}
        title="green iguana"
      >
        <div style={{height:"27px", width:"27px", backgroundColor:"white",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"100%",marginLeft:"164px",marginTop:"7px"}}>
        <img src={binicon} alt="BinIcon" style={{backgroundColor:"white",height:"20px",padding:"2px",borderRadius:"10%"}} />
        </div>
          
          </CardMedia>
      <CardContent>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",fontSize:"14px"}}>
            <div>
                <p>Jumeirah Estate</p>  
            </div>
            <div>
                <p style={{color:"#FF9340"}}>$ 900.00</p>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"start",gap:"2px",fontSize:"11px",color:"#98A0AC",marginTop:"4px"}}>
            <div>
                 <p>Jumeirah Golf Estate</p>                
            </div>
            <div>
            <FiberManualRecordIcon style={{height:"10px",color:"#CED3DD"}}/>

            </div>
           
            <div>
            <p>2000 Sq.Ft</p>
            </div>

        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"start",gap:"2.5px",fontSize:"15px",color:"#98A0AC",marginTop:"20px"}}>
            <div>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15" color='#98A0AC'><path d="M14.5 4v11M.5 0v15M0 10.5h15m-15-3h15m-13-2h4" stroke="currentColor"></path></svg>
            </div>

            <div>
            <p style={{marginLeft:"4px"}}>2</p>
            </div>

            <div>
            <FiberManualRecordIcon style={{height:"10px",color:"#CED3DD"}}/>
            </div>
            
            <div>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="19" height="16" color='#98A0AC'><path d="M0 7.5h15m-10.5 5h6m-6 0a3 3 0 01-3-3v-6a3 3 0 013-3h2V2m-2 10.5V15m6-2.5a3 3 0 003-3v-2m-3 5V15M5 3.5h3" stroke="currentColor"></path></svg>
            </div>

            <div>
            <p style={{marginLeft:"4px"}}>2</p>
            </div>

            <div>
            <FiberManualRecordIcon style={{height:"10px",color:"#CED3DD"}}/>

            </div>

            <div>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="19" height="15" color='#98A0AC'><path d="M7.5.5l.325-.38a.5.5 0 00-.65 0L7.5.5zm-7 6l-.325-.38L0 6.27v.23h.5zm5 8v.5a.5.5 0 00.5-.5h-.5zm4 0H9a.5.5 0 00.5.5v-.5zm5-8h.5v-.23l-.175-.15-.325.38zM1.5 15h4v-1h-4v1zm13.325-8.88l-7-6-.65.76 7 6 .65-.76zm-7.65-6l-7 6 .65.76 7-6-.65-.76zM6 14.5v-3H5v3h1zm3-3v3h1v-3H9zm.5 3.5h4v-1h-4v1zm5.5-1.5v-7h-1v7h1zm-15-7v7h1v-7H0zM7.5 10A1.5 1.5 0 019 11.5h1A2.5 2.5 0 007.5 9v1zm0-1A2.5 2.5 0 005 11.5h1A1.5 1.5 0 017.5 10V9zm6 6a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1z" fill="currentColor"></path></svg>
            </div>

            <div>
                <p style={{marginLeft:"4px"}}>2BHK</p>
            </div>
        </div>
        
      </CardContent>
      <CardActions style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-20px"}}>
        <AddIcon style={{ color: '#5078E1',marginRight:"-10px" }}/>
        <Button size="small" ></Button>
      </CardActions>
    </Card>
  );
}
