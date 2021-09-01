import React from 'react';
const Link = ({ children, href, target }) => (
  <a href={href} target={target}>
    {children}
  </a>
);

export default Link;
