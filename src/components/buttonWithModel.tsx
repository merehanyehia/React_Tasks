import React, { useState } from 'react';
import Modal from 'react-modal';
import { getComponentByname } from '../config/configComponent';


  

export interface CustomButtonInterface {
        button?: {
          onClick: () => void;
          children?: string;
        }[];
        model?:
        {
            id: string;
            img: string;
            paragraph: string;
            span: string; 
            componentName:string
 
        }
      
}

export interface modelInterface{
    id: string;
  img: string;
  paragraph: string;
  span: string;
  componentName:string
}


export interface ButtonModelInterface {
    props?: (CustomButtonInterface [] & modelInterface);

  }

// export interface CardProps {
//   props: CardInterface[];
//   button?: CustomButtonInterface[];
//   model?:modelInterface
// }

const ButtonWithModel: React.FC<any> = ({ props }) => {
    // console.log(props[0].model);
// const [DynamiComp, setDynamiComp] = useState<any>(null);
console.log(props[0].model.image);

    let DynamiComp :any
    if (props[0].model.componentName || props[0].model.image) {        
        DynamiComp=getComponentByname(props[0].model.componentName)
        
} 
// if(props[0].model){

// }
// console.log(DynamiComp);


  const [showState, setShowState] = useState(false);
//   const actions = props.map((prop)=>prop.button.map((btn)=>btn.onClick));

  const showModel = () => {
    // console.log(actions);
    // return actions;
    setShowState(true);
  };
  const functionMap:any = {
    showModel,
  };
  const handleClick = (actions:any) => {
    const onClickFunction = functionMap[actions];
    if (typeof onClickFunction === "function") {
      onClickFunction();
    }
  };

  const handleCloseModal = () => {
    setShowState(false);
  };

  return (
    <div className='bg-white rounded overflow-hidden shadow-md' style={{ width: 200 }}>
{props?.map((prop:any) => (
  <div>
    <button onClick={() => handleClick(prop.button?.map((btn:any)=>btn.onClick))}>{prop.button?.map((btn:any)=>btn.children)}</button>
  </div>
))}        <Modal isOpen={showState} onRequestClose={handleCloseModal}>
{DynamiComp && props[0]?.model ? (
  <div>
    {props[0].model.image && <img src={props[0].model.image} />}
    {props[0].model.props && (
      <DynamiComp props={props[0].model.props} />
    )}
  </div>
) : (
  <p>Component or props not found.</p>
)}

<div>
  <button onClick={handleCloseModal}>Close</button>
</div>
</Modal>
      
    </div>
  );
};

export default ButtonWithModel;
