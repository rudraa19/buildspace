import React from 'react';

const SeeFile = ({ children, name, language }) => {
    if (name) {

        return (
            <a href={`https://github.com/rudraa19/${language.toUpperCase()}-Projects/tree/main/${name}`} target='_blank'><button style={{ backgroundColor: 'black', border: 'white solid 1px', borderRadius: '100px', padding: '5px 9px', marginLeft: '5px', fontSize: '14px', cursor: 'pointer', color: 'white'}}>
                {children}
            </button></a>
        );
    } else {
        return <button>{children}</button>;
    }
};

export default SeeFile;
