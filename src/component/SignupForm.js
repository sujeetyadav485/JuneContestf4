import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors([]);

    // Basic form validation
    const newErrors = [];
    if (!email) newErrors.push('Email field is required.');
    if (!name) newErrors.push('Name field is required.');
    if (!password) newErrors.push('Password field is required.');
    if (password !== confirmPassword)
      newErrors.push('Passwords do not match.');

    // Display errors if any
    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      // Submit form logic here
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
