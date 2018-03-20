import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import '../css/Map.css';

class VehicleModal extends Component {

  render() {
    const vehicles = [
      "6460 CBW",
      "7730 JYJ",
      "7322 HMP",
      "8009 DVC",
      "5761 BHW",
      "4458 HGH",
      "5550 BCV"
    ]
    const colors = [
      "#f00",
      "#3c0",
      "#00f",
      "#fc3",
      "#609",
      "#3ff",
      "#f90"
    ]
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Body>
            <div>
              <div className="vColor" style={{backgroundColor:colors[0]}}></div>
              <div className="vInfo">{vehicles[0]}</div>
            </div>
            <div>
              <div className="vColor" style={{backgroundColor:colors[1]}}></div>
              <div className="vInfo">{vehicles[1]}</div>
            </div>
            <div>
              <div className="vColor" style={{backgroundColor:colors[2]}}></div>
              <div className="vInfo">{vehicles[2]}</div>
            </div>
            <div>
              <div className="vColor" style={{backgroundColor:colors[3]}}></div>
              <div className="vInfo">{vehicles[3]}</div>
            </div>
            <div>
              <div className="vColor" style={{backgroundColor:colors[4]}}></div>
              <div className="vInfo">{vehicles[4]}</div>
            </div>
            <div>
              <div className="vColor" style={{backgroundColor:colors[5]}}></div>
              <div className="vInfo">{vehicles[5]}</div>
            </div>
            <div>
              <div className="vColor" style={{backgroundColor:colors[6]}}></div>
              <div className="vInfo">{vehicles[6]}</div>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

export default VehicleModal;
