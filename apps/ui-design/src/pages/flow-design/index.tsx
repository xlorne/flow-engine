import Workflow from '@/components/workflow';
import React from 'react';
import { useLocation } from 'react-router';

const FlowDesign: React.FC = () => {

    const { state } = useLocation();
    console.log(state);

    return (
        <Workflow />
    );
};

export default FlowDesign;