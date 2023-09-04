import React, { useState } from 'react';
import Modal from 'react-modal';

export interface CardInterface {
  id: string;
  img: string;
  paragraph: string;
  span: string;
  onClick: () => void;
  button:CustomButtonInterface[],
  model:modelInterface
}

export interface CustomButtonInterface {
  onClick: () => void;
  children?: string;
}

export interface modelInterface{
    id: string;
  img: string;
  paragraph: string;
  span: string;
}

export interface CardProps {
  props: CardInterface[];
  button?: CustomButtonInterface[];
  model?:modelInterface
}

const Card: React.FC<CardProps> = ({ props, button }) => {
  // console.log(props);
  
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
// console.log(props.map((prop)=>prop.button.map((btn)=>btn.onClick)));
// console.log();


  const handleCloseModal = () => {
    setShowState(false);
  };

  return (
    <div className='bg-white rounded overflow-hidden shadow-md' style={{ width: 200 }}>
      {props.map((prop) => (
        <div key={prop.id}>
          <img src={prop.img} alt='show' style={{ height: 200, width: 200 }} />
          <div className='m-4'>
            <p className='font-bold'>{prop.paragraph}</p>
            <span className='block text-gray-500 text-sm'>{prop.span}</span>
            <div>
              {prop.button && prop.button.map((btn) => (
                <button onClick={() => handleClick(btn.onClick)}>{btn.children}</button>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Modal isOpen={showState} onRequestClose={handleCloseModal}>
      {props.map((prop) => (
        <>
          <div className='m-4'>
          <img src={prop.model.img} alt='show' style={{ height: 800, width: 1000 }} />

            <p className='font-bold'>{prop.model.paragraph}</p>
            <span className='block text-gray-500 text-sm'>{prop.model.span}</span>
            <div>
            <button onClick={handleCloseModal}>Close</button>

            </div>
          </div>
          </>
      ))}
      </Modal>
    </div>
  );
};

export default Card;
