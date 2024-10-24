import { Box, Divider } from "@mui/material";
import React from "react";
import Profile from "../../assets/male.jpg";

export default function Leaddetails() {
  return (
    <Box
      sx={{
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '24px',
        marginBottom: '30px',
       paddingTop:"20px"
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: '#4E5A6B',
          fontSize: '15px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}
      >
        Lead Details
      </Box>

      <Box
        sx={{
          height: '60px',
          width: '100%',
          border: '1px solid #E4E8EE',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <Box>
          <img
            src={Profile}
            alt="Profile"
            style={{ height: "40px", width: '40px',marginLeft:"15px",marginRight:"15px",borderRadius:"5px" }}
          />
        </Box>

        <Box
          sx={{
            width: '100%',
            height: '70%',
            display: 'flex',
            flexDirection: 'column',
            gap:"2px"
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '50%',
              justifyContent: 'space-between',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#091B29'
            }}
          >
            <Box>Tom Cruise</Box>
            <Box
              sx={{
                fontSize: '10px',
                backgroundColor: '#5078E11E',
                borderRadius: '4px',
                padding: '1.5% 3%',
                height:"19px",
                marginTop:"-1px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              Prospect
            </Box>
          </Box>

          <Box
            sx={{
              width: '100%',
              justifyContent: 'start',
              gap:"10px",
              display: 'flex',
              fontSize: '13px',
              color: '#5078E1',
              alignItems: 'center',
           
              marginTop:"-10px"
            }}
          >
            <Box><p style={{color:"#4E5A6B",fontSize:"12px"}}>+91 9090808012</p></Box>
            <Box
              sx={{
                height: '5px',
                width: '4.8px',
                backgroundColor: '#CED3DD',
                borderRadius: '50%'
              }}
            ></Box>
            <Box><p style={{color:"#4E5A6B",fontSize:"12px"}}>Tomcruise2515@mail.com</p></Box>
          </Box>
        </Box>
      </Box>

      <Divider
        sx={{
          height: '3%',
          width: '100%'
        }}
      />

      <Box
        sx={{
          padding: '3% 0%',
          height: '55%'
        }}
      >
        <Box
          sx={{
            color: '#4E5A6B',
            fontSize: '14px',
            fontWeight: '600'
            
          }}
        >
          Quotation Details
        </Box>

        <Box
          sx={{
            paddingTop: '3%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '20px',
          }}
        >
          {[
            { title: 'LEASE START DATE', date: '30 Jan 22' },
            { title: 'LEASE END DATE', date: '30 Jan 23' },
            { title: 'RENT START DATE', date: '30 Jan 23' },
            { title: 'GRACE PERIOD', date: '90 Days',beg:'(Beginning)' }
          ].map((item, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <Box sx={{ fontSize: '8px', color: '#98A0AC', fontWeight: '600' }}>
                {item.title}
              </Box>
              <Box sx={{ fontSize: '12px', color: '#091B29', fontWeight: '600', display:"flex",flexDirection:"row" }}>
                {item.date}  <div style={{color:"#98A0AC"}}>{item.beg}</div>
              </Box>
           
            </Box>
            
          ))}
        </Box>
      </Box>
    </Box>
  );
}
