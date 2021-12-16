import React from 'react';
import { Component } from "react";
import KlasKomp from './KlasKomp';
import FuncKompPrva from './FuncKompPrva';
import FuncKompDruga from './FuncKompDruga';

const korisnici = [
    { 
      ime: "Ana",
      godine: 24
  
    },
    {
      ime: "Ivo",
      godine: 34  
    },
    {
      ime: "Đuro",
      godine: 36  
    }
  
  ];
  class Apps extends Component {
    render() {
      return (
        <div className="app">
          
          <FuncKompPrva ime={korisnici[0].ime} godine={korisnici[0].godine} />
          <KlasKomp ime={korisnici[1].ime} godine={korisnici[1].godine} />
          <FuncKompDruga>
              Treća osoba je {korisnici[2].ime} i ima {korisnici[2].godine} godina.
          </FuncKompDruga>

        </div>
      );
    }
  }

  export default Apps;