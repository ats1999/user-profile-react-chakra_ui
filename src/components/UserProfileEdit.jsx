import React from 'react';
import {
  Container,
  Image,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Tag
} from '@chakra-ui/react';
import UserImage from './UserImage';
import Link from './Link';
const UserProfileEdit = ({ initialData }) => {
  return (
    <Container mt={4}>
      <UserImage pic={initialData.pic} name={initialData.name} />
    </Container>
  );
};

export default UserProfileEdit;
