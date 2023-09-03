import React, { ReactElement } from 'react';
import Actions from '../components/Actions';




const actionComponentMap: { [key: string]: React.FC<ReactElement> } = {
"Action":Actions
  };


export const getActionByname = (name: string) => {
  const actionComponent = actionComponentMap[name];
  if (actionComponent) {
    return actionComponent;
  } else {
    console.log(Error);
    ; 
  }
};

