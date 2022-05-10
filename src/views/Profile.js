import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Profile() {
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  console.log(from);

  return (
    <>
      <div>Profile</div>;
    </>
  );
}
