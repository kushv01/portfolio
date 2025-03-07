import React from 'react';

const LogoGenerator = () => {
  return (
    <div 
      style={{
        width: '512px',
        height: '512px',
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '200px',
          fontWeight: 'bold',
          color: 'white',
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          borderRadius: '100px',
          letterSpacing: '-0.05em'
        }}
      >
        KV
      </div>
    </div>
  );
};

export default LogoGenerator; 