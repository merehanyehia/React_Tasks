import React, { ReactElement } from 'react';
import Header from "../components/Header";
import Table from "../components/Table";
import Form from "../components/Form";
import Error from '../components/error';
import Card from '../components/Card';

const pageComponentMap: { [key: string]: React.FC<ReactElement> } = {
  "Header": Header,
  "Table": Table,
  "Form": Form,
  "Card":Card
};



export const getComponentByname = (name: string): React.FC<ReactElement> => {
  const pageComponent = pageComponentMap[name];
  if (pageComponent) {
    return pageComponent;
  } else {
    return  Error; 
  }
};

