import React from 'react';
import { NativeSelect } from '@mantine/core';

function Gender() {
  return <NativeSelect variant="filled" radius="md" description="Gender" data={['Male', 'Female', 'other']} />;
}

export default Gender;
