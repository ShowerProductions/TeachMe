import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Profile = ({ children, width, height, borderRadius, ...props }) => {
  const tempImage = 'https://dummyimage.com/500x500.png';
  return (
    <>
      <img src={tempImage} {...props} />
      <style jsx>{`
        img {
          width: ${width || '100%'};
          height: ${height || '100%'};
          border-radius: ${borderRadius || 'none'};
        }
      `}</style>
    </>
  );
};

Profile.propTypes = {};

export default Profile;
