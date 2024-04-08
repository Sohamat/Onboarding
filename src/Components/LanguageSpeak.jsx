import { MultiSelect } from '@mantine/core';

function LanguageSpeak() {
  return (
    <MultiSelect
      label=""
      placeholder="Languages I can speak"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
      className='pt-8'
    />
  );
}

export default LanguageSpeak;
