import React, { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
import classes from "./ImageUpload.module.css"

function ImageUpload() {
  const [file, setFile] = useState(null);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}

export default ImageUpload;
