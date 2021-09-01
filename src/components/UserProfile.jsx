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

import { Icon } from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';
import { ImLinkedin } from 'react-icons/im';
import { FaGlobe } from 'react-icons/fa';

import UserImage from './UserImage';
import Link from './Link';

const SocialProfiles = ({ data }) => (
  <HStack>
    <Link href={data.Linkedin} target="_blank">
      <Icon boxSize="1.5em" as={ImLinkedin} color="blue" />
    </Link>

    <Link href={data.Github} target="_blank">
      <Icon boxSize="1.5em" as={GoMarkGithub} />
    </Link>

    <Link href={data.Website} target="_blank">
      <Icon boxSize="1.5em" as={FaGlobe} color="green" />
    </Link>
  </HStack>
);

const UserProfile = ({ data }) => {
  console.log(data.skills);
  return (
    <Container mt={4}>
      <UserImage pic={data.pic} name={data.name} />
      <Center>
        <VStack>
          <Heading>{data.name}</Heading>
          <Text color="gray">
            {data.profileTagLine} {', '} {data.location}
          </Text>
          <SocialProfiles data={data.socialProfiles} />
          <Text>{data.bio}</Text>
          <HStack>
            {data.skills.map(skill => (
              <Tag colorScheme="blue" key={skill}>
                {skill}
              </Tag>
            ))}
          </HStack>
        </VStack>
      </Center>
    </Container>
  );
};

export default UserProfile;
