import React from 'react';
import { Row, Col } from 'react-bootstrap';
import loganship from '../../Assets/loganship.PNG';
import ianship from '../../Assets/ianship.PNG';
import leoship from '../../Assets/leoship.PNG';
import '../../styles/ship.css';

export default function About() {
  return (
    <div className='about-background' style={{color: 'white', fontFamily: "'Press Start 2P', cursive"}}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 className='fade-in-out'>Click on the ship you want to know about!!</h1>
      </div>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col md={6} lg={4}>
          <div className="ship">
            <img src={loganship} alt="loganship" className='img-fluid' style={{ width: '40%', height: 'auto' }} />
            <div className="overlay">
              <div className="text">
                <a href="https://codedevlogan.github.io/React-Portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  Logan Peterson 
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="ship">
            <img src={ianship} alt="ianship" className='img-fluid' style={{ width: '40%', height: 'auto' }} />
            <div className="overlay">
              <div className="text">
                <a href="https://igurgoze.github.io/React_Portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  Ian Gurgoze
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="ship">
            <img src={leoship} alt="leoship" className='img-fluid' style={{ width: '40%', height: 'auto' }} />
            <div className="overlay">
              <div className="text">
                <a href="https://lsegura06.github.io/SeguraReactPortfolio/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  Leo Segura
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
