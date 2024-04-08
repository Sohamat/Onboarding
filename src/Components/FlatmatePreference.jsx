import { MultiSelect } from '@mantine/core';

function FlatmatePreference() {
  return (
    <MultiSelect
      label=""
      placeholder="Flatmate preference"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
      className='pt-7'
    />
  );
}

export default FlatmatePreference;
