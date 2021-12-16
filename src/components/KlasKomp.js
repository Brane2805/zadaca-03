import React from 'react';
import { Component } from "react";

class KlasKomp extends Component {
    render() {
    const { 
        ime, 
        godine
    } = this.props;
      return (
        <div>
            <h2> Komponenta definirana Klasom:</h2>
        <p>Druga osoba je {ime} i ima {godine} godina.</p>
        </div>
      );
    }
  }
  export default KlasKomp;