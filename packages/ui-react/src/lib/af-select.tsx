'use client';

import { cn } from '@af-library/utils';
import {
  ListCollection,
  Portal,
  Select,
  SelectItemGroupProps,
  SelectItemProps,
} from '@ark-ui/react';

type AFSelectProps<T> = {
  placeholder: string;
  children: React.ReactNode;
  collection: ListCollection<T>;
  hasClearButton?: boolean;
};

export function AFSelect<T>(props: AFSelectProps<T>) {
  return (
    <Select.Root collection={props.collection} className="w-[min(100%,20rem)]">
      <Select.Control className="border rounded-md flex items-center justify-between gap-2 focus-within:outline focus-within:outline-af-grey-700 h-10">
        <Select.Trigger className="flex items-center justify-between gap-2 w-full px-2 py-1 outline-none">
          <div className="flex items-center gap-2">
            <SearchIcon className="w-4 h-4" />
            <Select.ValueText placeholder={props.placeholder} className="text-sm" />
          </div>

          <Select.Indicator>
            <ChevronUpDownIcon className="w-4 h-4" />
          </Select.Indicator>
        </Select.Trigger>

        {props.hasClearButton && (
          <Select.ClearTrigger>
            <ClearIcon className="w-4 h-4" />
          </Select.ClearTrigger>
        )}
      </Select.Control>

      <Portal>
        <Select.Positioner className="w-[min(100%,20rem)]">
          <Select.Content
            className={cn([
              'border rounded-md shadow-sm bg-white w-full',
              'data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out',
              'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
            ])}
          >
            {props.children}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}

interface AFSelectItemProps extends SelectItemProps {
  children: React.ReactNode;
}

export function AFSelectItem(props: AFSelectItemProps) {
  return (
    <Select.Item
      item={props.item}
      className="px-2 py-1 data-[highlighted]:bg-af-grey-200/20 aria-selected:bg-af-grey-200/20 flex items-center justify-between gap-2 font-light text-sm"
    >
      <Select.ItemText>{props.children}</Select.ItemText>
      <Select.ItemIndicator>
        <CheckIcon className="w-4 h-4" />
      </Select.ItemIndicator>
    </Select.Item>
  );
}

interface AFSelectItemGroupProps extends SelectItemGroupProps {
  children: React.ReactNode;
  label: string;
}

export function AFSelectItemGroup(props: AFSelectItemGroupProps) {
  return (
    <Select.ItemGroup>
      <Select.ItemGroupLabel className="px-2 py-1 bg-af-grey-100/25 text-sm">
        {props.label}
      </Select.ItemGroupLabel>
      {props.children}
    </Select.ItemGroup>
  );
}

function ChevronUpDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ClearIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
