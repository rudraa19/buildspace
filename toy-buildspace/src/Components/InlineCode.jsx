import React from 'react';

const RobotoMonoStyle = () => (
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
        `}
    </style>
);

const InlineCode = ({ children, isCode }) => {
    if (isCode) {
        return (
            <span style={{ 
                fontFamily: 'Roboto Mono, monospace',
                backgroundColor: '#302c2c', 
                border: 'solid 1px #495057',
                padding: '0px 5px', 
                borderRadius: '2px' 
            }}>
                {children}
            </span>
        );
    } else {
        return <span>{children}</span>;
    }
};

export default InlineCode;
