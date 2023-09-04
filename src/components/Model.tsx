import React, { useState } from 'react';
import Modal from 'react-modal';

// export interface CardInterface {
//   id: string;
//   img: string;
//   paragraph: string;
//   span: string;
//   onClick: () => void;
//   button:CustomButtonInterface[],
//   model:modelInterface
// }

// export interface CustomButtonInterface {
//   onClick: () => void;
//   children?: string;
// }

export interface modelInterface{
    id: string;
  img: string;
  paragraph: string;
  span: string;
  button:CustomButtonInterface[],

}

export interface CardProps {
  props: modelInterface;
}

export interface CustomButtonInterface {
    onClick: () => void;
    children?: string;
  }

const Model: React.FC<CardProps> = ({ props }) => {
  const [closeState, setCloseState] = useState(false);
//   const actions = props.map((prop)=>prop.button.map((btn)=>btn.onClick));

  const hideModel = () => {
    // console.log(actions);
    // return actions;
    setCloseState(true);
  };
  const functionMap:any = {
    hideModel,
  };
  const handleClick = (actions:any) => {
    const onClickFunction = functionMap[actions];
    if (typeof onClickFunction === "function") {
      onClickFunction();
    }
  };
// console.log(props.map((prop)=>prop.button.map((btn)=>btn.onClick)));
// console.log();


  const handleCloseModal = () => {
    setCloseState(true);
  };

  return (
    <div className='bg-white rounded overflow-hidden shadow-md' style={{ width: 200 }}>
      <Modal isOpen={closeState} onRequestClose={handleCloseModal}>

          <img src={props.img} alt='show' style={{ height: 800, width: 1000 }} />
          <div className='m-4'>
            <p className='font-bold'>{props.paragraph}</p>
            <span className='block text-gray-500 text-sm'>{props.span}</span>
            <div>
            {props.button && props.button.map((btn) => (
                <button onClick={() => handleClick(btn.onClick)}>{btn.children}</button>
              ))}
            </div>
          </div>
      </Modal>
    </div>
  );
};

export default Model;
