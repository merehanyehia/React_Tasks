import React, { useState } from 'react';
import Button from './button';


export interface actionInterface {
    onClick: () => void; 
  }
  
  
const Actions = ({ action }: any) => {
    const [showState, setShowState] = useState(false);
    const [closeState, setCloseState] = useState(false);

  
    const showModel = () => {
       setShowState(true);
    };
    const handleCloseModal = () => {
      setCloseState(true);
    };
  
    switch (action) {
      case "showModel":
        return <Button onClick={showModel}>show</Button>
      case "hideModel":
        return <Button onClick={handleCloseModal}>close</Button>
      default:
        return null;
    }
  };

export default Actions;