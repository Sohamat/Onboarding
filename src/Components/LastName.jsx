import React from 'react';
import { Input } from '@mantine/core';

function LastName() {
  return (
    <Input.Wrapper label="" withAsterisk description="Last name" >
      <Input placeholder="Singh" />
    </Input.Wrapper>
  );
}

export default LastName;
