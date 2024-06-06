import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

function Social(){
  return (
    <div className='mt-3'>
      <FaInstagram size={30} style={{ marginRight: '10px' }} />
      <FaTwitter size={30} style={{ marginRight: '10px' }} />
      <FaFacebook size={30} />
    </div>
  );
};

export default Social;
