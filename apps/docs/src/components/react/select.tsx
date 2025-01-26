import { AFSelect, AFSelectItem } from "@kirdes-org/react-ui";
import { createListCollection } from "@ark-ui/react";
import { Select as ArkSelect } from "@ark-ui/react";

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

export function SelectAvatar() {
  const collection = createListCollection({
    items: [
      {
        label: "Marcel Lino",
        value: "marcel",
        src: `https://i.pravatar.cc/150?img=${getRandomNumber()}`,
      },
      {
        label: "John Wick",
        value: "john",
        src: `https://i.pravatar.cc/150?img=${getRandomNumber()}`,
      },
      {
        label: "Jane Jungle",
        value: "jane",
        src: `https://i.pravatar.cc/150?img=${getRandomNumber()}`,
      },
      {
        label: "Sven Poliski",
        value: "sven",
        src: `https://i.pravatar.cc/150?img=${getRandomNumber()}`,
      },
      {
        label: "Polly Toy",
        value: "polly",
        src: `https://i.pravatar.cc/150?img=${getRandomNumber()}`,
      },
      {
        label: "Bertrand Chabot",
        value: "bertrand",
        src: `https://i.pravatar.cc/150?img=${getRandomNumber()}`,
      },
    ],
  });

  return (
    <AFSelect placeholder="Select an user" collection={collection}>
      {collection.items.map((item) => (
        <AFSelectItem key={item.value} item={item}>
          <div className="flex items-center gap-4">
            <img
              src={item.src}
              alt={item.label}
              className="w-8 h-8 rounded-full"
            />
            <ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
          </div>
        </AFSelectItem>
      ))}
    </AFSelect>
  );
}

function getRandomNumber(min: number = 1, max: number = 50) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
