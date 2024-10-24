import React, { useState } from "react";
import { Button, Radio, Select, Input, Slider } from "antd";
import "./PricingTable.css";
import { RightOutlined, InfoCircleOutlined } from '@ant-design/icons';


const PricingTable = () => {
  const [revenueType, setRevenueType] = useState("Lease");
  const [pricingComponent, setPricingComponent] = useState("Pricing Component");
  const [taxGroup, setTaxGroup] = useState("GST");
  const [componentBasedOn, setComponentBasedOn] = useState("Amount");
  const [uomValue, setUomValue] = useState(200);

  const handleRevenueChange = (e) => {
    setRevenueType(e.target.value);
  };

  const handleComponentBasedOnChange = (value) => {
    setComponentBasedOn(value);
  };

  return (
    <div className="pricing-table">
      <div className="title">
        <p>Primary Pricing Component</p>
        <InfoCircleOutlined className="info-icon" />
        </div>

      <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{marginRight:"60px"}}>
        <p style={{fontSize:"12px"}}>Revenue Type</p>
      <div className="row">
        <Radio.Group
          className="radio-group"
          value={revenueType}
          onChange={handleRevenueChange}
        >
          <Button value="Lease" className="rdbut">Lease</Button>
          <Button value="Sales" className="rdbut">Sales</Button>
          <Button value="Manage" className="rdbut">Manage</Button>
        </Radio.Group>
      </div>
      </div>
       <div>
        <p style={{fontSize:"12px"}}>Pricing Component</p>
        <div className="row">
        <Select
          className="select"
          defaultValue={pricingComponent}
          onChange={setPricingComponent}
        >
          <Select.Option value="Pricing Component">Pricing Component</Select.Option>
         
        </Select>
      </div>
       </div>
      </div>

    
<div style={{display:"flex",flexDirection:"row"}
} >
    <div style={{marginRight:"17px"}}>
    <p style={{fontSize:"12px"}}>Tax Group For Pricing Component</p>
      <div className="row">
        <Select
          className="select"
          defaultValue={taxGroup}
          onChange={setTaxGroup}
        >
          <Select.Option value="GST">GST</Select.Option>
          {/* Add more options as needed */}
        </Select>
      </div>
      </div>
      <div className="row">
    <p style={{fontSize:"12px"}}>Component Based On</p>
        
        <Button.Group style={{display:"flex",gap:"12px"}}>
          <Button
          style={{borderRadius:"6px"}}
            type={componentBasedOn === "Amount" ? "primary" : "default"}
            onClick={() => handleComponentBasedOnChange("Amount")}
          >
            Amount
          </Button>
          <Button
          style={{borderRadius:"6px"}}
            type={componentBasedOn === "UOM" ? "primary" : "default"}
            onClick={() => handleComponentBasedOnChange("UOM")}
          >
            UOM
          </Button>
        </Button.Group>
      </div>

      </div>

      
      

      

      <div className="actions">
        <Button className="back-button">Back</Button>
        <Button type="primary" className="primary-button">
          Create Pricing Component
        </Button>
      </div>
    </div>
  );
};

export default PricingTable;
