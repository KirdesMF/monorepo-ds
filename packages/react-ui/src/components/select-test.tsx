import { createListCollection } from '@ark-ui/react';
import { AFSelect, AFSelectItem, AFSelectItemGroup } from '../lib/af-select';

export function MySelect() {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Solid', value: 'solid' },
    ],
  });

  return (
    <AFSelect placeholder="Select a framework" collection={collection}>
      {collection.items.map((item) => (
        <AFSelectItem key={item.value} item={item}>
          {item.label}
        </AFSelectItem>
      ))}
    </AFSelect>
  );
}

export function MySelectItemGroup() {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Solid', value: 'solid' },
    ],
  });

  return (
    <AFSelect placeholder="Select a framework" collection={collection}>
      <AFSelectItemGroup label="Frameworks">
        {collection.items.map((item) => (
          <AFSelectItem key={item.value} item={item}>
            {item.label}
          </AFSelectItem>
        ))}
      </AFSelectItemGroup>
    </AFSelect>
  );
}
