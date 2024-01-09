import React from 'react';

const SignUpForm = () => {
  const formStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: 'auto',
  };

  const inputStyles = {
    margin: '10px 0',
    padding: '12px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#333',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  };

  const submitButtonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <form style={formStyles}>
      <input type="text" placeholder="Full Name" style={inputStyles} />
      <input type="email" placeholder="Email" style={inputStyles} />
      <input type="text" placeholder="Username" style={inputStyles} />
      <input type="password" placeholder="Password" style={inputStyles} />
      <input type="submit" value="Sign Up" style={submitButtonStyles} />
    </form>
  );
};

export default SignUpForm;
