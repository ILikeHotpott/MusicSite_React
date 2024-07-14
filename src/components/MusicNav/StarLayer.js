import React from 'react';
import './StarLayer.css';
import '@/components/LoginForm/star.scss'

const StarLayer = () => {
    return (
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 100, pointerEvents: 'none'}}>
            <div className="layer1 star-layer"></div>
            <div className="layer2 star-layer"></div>
            <div className="layer3 star-layer"></div>
            <div className="layer4 star-layer"></div>
            <div className="layer5 star-layer"></div>
        </div>
    );
};

export default StarLayer;
