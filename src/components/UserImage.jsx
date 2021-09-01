import React from 'react';
import { Image } from '@chakra-ui/react';
const UserImage = ({ pic, name }) => (
  <Image
    src={
      pic ||
      'https://res.cloudinary.com/dsabyte/image/upload/v1630411853/users/user-svgrepo-com_vdq4rw.svg'
    }
    alt={name}
    boxSize="200px"
    borderRadius="full"
    fallbackSrc="hhttps://res.cloudinary.com/dsabyte/image/upload/v1630411853/users/user-svgrepo-com_vdq4rw.svg"
    mx="auto"
  />
);

export default UserImage;
