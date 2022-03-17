import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Profile = ({ children, ...props }) => {
  const tempImage = 'https://dummyimage.com/500x500.png';
  return (
    <>
      <img src={tempImage} {...props} />
      <style jsx>{`
        img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

Profile.propTypes = {};

export default Profile;
