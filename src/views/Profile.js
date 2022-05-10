import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Profile() {
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: '/' } };
  console.log(from);

  const handleBack = () => {
    history.replace(from);
  };

  return (
    <>
      <div>Profile</div>
      <button onClick={handleBack}>Back to Characters</button>
    </>
  );
}
