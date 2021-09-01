# A User profile component created in react and chakra-ui

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-pngjsn)

We are going to create a user profile component, where we can show user's personal details with skills, social links, etc..

## What we are going to use?
- `react`
- `@chakra-ui/react`
- `@chakra-ui/icons`
- `react-icons`

## Data
We will use this JSON file to display data
```json
{
  "_id": "ats1999",
  "pic": "https://res.cloudinary.com/practicaldev/image/fetch/s--nh8zSFgY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/285604/94170c66-2590-4002-90e0-ec4dc94ed7b5.png",
  "name": "Rahul kumar",
  "profileTagLine": "Software engineer @MERN",
  "location": "India",
  "bio": "Inside your React project directory, install Chakra UI by running either of the following,Inside your React project directory, install Chakra UI by running either of the following.",
  "skills": [
    "nodejs",
    "reactjs",
    "java",
    "c++"
  ],
  "socialProfiles": {
    "Linkedin": "https://www.linkedin.com/in/rahul-kumar-36b05a189",
    "Github": "https://github.com/ats1999",
    "Website": "https://dsabyte.com"
  }
}
```

## Let's begin
I have created a root component `UserProfile` which will accept the above user's data and render the UI.

## `UserProfile` component structure
- Container
    - UserImage
    - Center
        - VStack
            - Heading (User name)
            - Text (profileTagLine)
            - SocialProfiles
            - Text
            - HStack (skills)
                - Tag (skill)


## Components description
Container, Center,VStack,Heading,Text,HStack,Tag are [chakra-ui](https://chakra-ui.com) components.


**UserImage :** This component will render user image into exact center of it's parent and it'll be rounded.

**SocialProfiles :** This component will render social profiles of the user horizontally and centered.

## `UserImage`
Display user profile
```js
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
```

## `Link`
Render it's children inside `a` tag.
```js
import React from 'react';
const Link = ({ children, href, target }) => (
  <a href={href} target={target}>
    {children}
  </a>
);

export default Link;
```
## `UserProfile`
```js
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
```
## Final result
![Rahul-kumar-ats1999](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rubkrtfwp45l2lu5tql0.png)


## Live
- [Live](https://sad-leavitt-8c8b5d.netlify.app/)
- [Code-Github](https://github.com/ats1999/user-profile-react-chakra_ui)


