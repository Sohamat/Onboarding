import React from 'react';
import { Input } from '@mantine/core';

function FirstName() {
  return (
    <Input.Wrapper label="" withAsterisk description="First name" >
      <Input placeholder="Tom" />
    </Input.Wrapper>
  );
}

export default FirstName;
