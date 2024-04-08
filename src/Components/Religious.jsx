import React from 'react';
import { NativeSelect } from '@mantine/core';

function Religious() {
  return <NativeSelect variant="filled" radius="md" description="Religious Belief" data={['Hindu', 'Muslim', 'Sindhi','Parsi','Christian']} />;
}

export default Religious;
