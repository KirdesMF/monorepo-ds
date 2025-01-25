import { Combobox, createListCollection } from '@ark-ui/react';

export function AFCombobox() {
  const collection = createListCollection({ items: [{ label: 'First Item', value: '1' }] });

  return (
    <Combobox.Root collection={collection}>
      <Combobox.Control>
        <Combobox.Trigger></Combobox.Trigger>
      </Combobox.Control>
    </Combobox.Root>
  );
}
