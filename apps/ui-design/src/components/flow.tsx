import FlowDesign from './design';
import React from 'react';

const FlowDesignWapper: React.FC = () => {
    return (
        <div style={{ height: 'calc(100vh - 50px)' }}>
            <FlowDesign />
        </div>
    );
};

export default FlowDesignWapper;