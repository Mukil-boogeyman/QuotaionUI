import { Box, Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import "./unitdetails.css";
import { BiBed } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
import House from "../../assets/clogo.jpeg";
import Popup from "../../Popup";

export default function Unitdetails() {
  const [openPopup, setOpenPopup] = useState(false); // State to handle the popup visibility
  const [selectedEstate, setSelectedEstate] = useState(null); // Track which estate is being customized

  const handleClickOpenPopup = (estate) => {
    setSelectedEstate(estate); // Set the selected estate to customize
    setOpenPopup(true); // Open the popup
  };

  const handleClosePopup = () => {
    setOpenPopup(false); // Close the popup
    setSelectedEstate(null); // Reset the selected estate
  };

  const Estates = [
    {
      id: 1,
      house: House,
      name: "Jumeirah Estate",
      sale: 600,
      subname: "Jumeirah Golf Estate",
      area: "2000",
      bed: 2,
      tub: 2,
      bhk: 2,
    },
      {
        id: 1,
        house: House,
        name: "Jumeirah Estate",
        sale: 600,
        subname: "Jumeirah Golf Estate",
        area: "2000",
        bed: 2,
        tub: 2,
        bhk: 2,
      },
      {
        id: 1,
        house: House,
        name: "Jumeirah Estate",
        sale: 600,
        subname: "Jumeirah Golf Estate",
        area: "2000",
        bed: 2,
        tub: 2,
        bhk: 2,
      },
      {
        id: 1,
        house: House,
        name: "Jumeirah Estate",
        sale: 600,
        subname: "Jumeirah Golf Estate",
        area: "2000",
        bed: 2,
        tub: 2,
        bhk: 2,
      },
      {
        id: 1,
        house: House,
        name: "Jumeirah Estate",
        sale: 600,
        subname: "Jumeirah Golf Estate",
        area: "2000",
        bed: 2,
        tub: 2,
        bhk: 2,
      },
  ];
  return (
    <>
    <Box className="units-container">
      <Box className="units-title">Unit Details</Box>
      <Box className="unit-all-estates">
        {Estates.map((estate) => (
          <Box key={estate.id} className="unit-estate">
            <Box className="unit-img-container">
              <img src={estate.house} className="unit-img" alt="house"/>
              <HiOutlineTrash className="unit-trash" />
            </Box>
            <Box className="unit-details">
              <Box className="unit-estatename">
                <Box>{estate.name}</Box>
                <Box>$ {estate.sale}</Box>
              </Box>
              <Box className="unit-estate-subdetails">
                <Box>{estate.subname}</Box>
                <Box
                  sx={{
                    height: "5px",
                    width: "4.8px",
                    backgroundColor: "#CED3DD",
                    borderRadius: "50%",
                    marginLeft: "5px",
                  }}
                ></Box>
                <Box>{estate.area} Sq.Ft</Box>
              </Box>
              <Box className="unit-estate-quantities">
                <BiBed />
                <Box>{estate.bed}</Box>
                <Box
                  sx={{
                    height: "5px",
                    width: "4.8px",
                    backgroundColor: "#CED3DD",
                    borderRadius: "50%",
                  }}
                ></Box>
                <PiBathtubLight />
                <Box>{estate.tub}</Box>
                <Box
                  sx={{
                    height: "5px",
                    width: "4.8px",
                    backgroundColor: "#CED3DD",
                    borderRadius: "50%",
                  }}
                ></Box>
                <GoHome />
                <Box>{estate.bhk}BHK</Box>
              </Box>
              <Box className="estate-customise">
                <FaPlus />
                <Box>
                  <button
                    style={{ border: "none", backgroundColor: "white", color: "#5078E1", cursor: "pointer" }}
                    onClick={() => handleClickOpenPopup(estate)}
                  >
                    Customise
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Popup Dialog */}
      
    </Box>
    <Dialog open={openPopup} onClose={handleClosePopup} style={{height:"85%"}}>
        <DialogContent style={{padding:"0%",margin:"0%",width:"450px"}}>
          <Popup /> 
        </DialogContent>
      </Dialog>
      </>
  );
}

