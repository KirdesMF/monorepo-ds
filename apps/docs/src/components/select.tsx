import { AFSelect, AFSelectItem } from "@af-library/react";
import { createListCollection } from "@ark-ui/react";

export function Select() {
  const collection = createListCollection({
    items: [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
      { label: "Solid", value: "solid" },
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
