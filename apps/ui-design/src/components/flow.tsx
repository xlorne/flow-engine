import { Editor } from '@flow-engine/flow-design/src/editor';
import React from 'react';

const FlowDesign: React.FC = () => {
    return (
        <div style={{ height: 'calc(100vh - 100px)' }}>
            <Editor />
        </div>
    );
};

export default FlowDesign;