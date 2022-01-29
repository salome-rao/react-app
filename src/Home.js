import React from 'react';
import {Aside} from "./Aside";
import {Topright} from "./Topright";
import {Topbottom  } from "./Topbottom";
import './home.css';
export const Home = () => {
  return(

<div>
  <header>
    <h1>
    Astra
    </h1>
   
  </header>
    <Aside/>
   <Topright name="John"/>
   <Topbottom/>
</div>
  ) 
};
