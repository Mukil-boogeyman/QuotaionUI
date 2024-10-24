import React from 'react';
import { Card, List, Button } from 'antd';
import { RightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './pages/Popup.css';
import { RxCross1 } from 'react-icons/rx';


const data = [
  { key: 1, title: 'Primary', className: 'primary' },
  { key: 2, title: 'Secondary', className: 'secondary' },
  { key: 3, title: 'One Time Charges', className: 'one-time-charges' },
  { key: 4, title: 'Refundables', className: 'refundables' },
  { key: 5, title: 'Inventory Item', className: 'inventory-item' },
  { key: 6, title: 'Parking Slot', className: 'parking-slot' },
];

const Popup = () => {
  return (
    <Card title="Pricing Table" extra={<Button type="text" icon={<RxCross1 />} />}>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item className={`pricing-item ${item.className}`}>
            <div className={`item-index ${item.className}`}>{item.key.toString().padStart(2, '0')}</div>
            <div className= {`item-content ${item.className}`}>
              <span>{item.title}</span>
            </div>
            <div style={{display:"flex",gap:"20px"}}>
            <InfoCircleOutlined className="info-icon" />
            <RightOutlined className={`arrow-icon ${item.className}`} />
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Popup;
