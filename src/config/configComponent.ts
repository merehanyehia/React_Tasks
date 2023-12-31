import React, { ReactElement } from 'react';
import Header from "../components/Header";
import Table from "../components/Table";
import Form from "../components/Form";
import Error from '../components/error';
import Card from '../components/Card';
import Navbar from '../components/navBar';
import Footer from '../components/Footer';
import Model from '../components/Model';
import ButtonWithModel from '../components/buttonWithModel';

const pageComponentMap: { [key: string]: React.FC<any> } = {
  "Header": Header,
  "Table": Table,
  "Form": Form,
  "Card":Card,
  "navBar":Navbar,
  "Footer":Footer,
  "Model":Model,
  "ButtonWithModel":ButtonWithModel
};



export const getComponentByname = (name: string): React.FC<ReactElement> => {
  const pageComponent = pageComponentMap[name];
  if (pageComponent) {
    return pageComponent;
  } else {
    return  Error; 
  }
};

