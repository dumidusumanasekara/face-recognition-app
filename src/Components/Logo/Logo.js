import React from 'react';
import Brain from './brain.png';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
    return (
            <Tilt className="Tilt pa3 br4 shadow-1 ma4" options={{ max : 25, perspective : 200, speed : 100 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner">
                    <img alt='brain-logo' src={Brain} />
                </div>
            </Tilt>
    );
}

export default Logo