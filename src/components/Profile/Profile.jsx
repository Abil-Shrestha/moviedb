/* eslint-disable react/function-component-definition */
import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);
  console.log(user);
  return (
    <div>
      
    </div>
  );
};

export default Profile;
