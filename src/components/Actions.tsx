import React, { useState } from 'react';
import Button from './button';


export interface actionInterface {
    onClick: () => void; 
  }
  
  
const Actions = ({ action }: any) => {
    const [showState, setShowState] = useState(false);
  
    const showModel = () => {
       setShowState(true);
    };
  
    switch (action) {
      case "showModel":
        return <Button onClick={showModel}>show</Button>
      default:
        return null;
    }
  };

export default Actions;