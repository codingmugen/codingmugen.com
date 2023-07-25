import type { ReactNode } from 'react';

import type { Values } from '@/types/TypeUnion';

export const ColorTags = {
  SLATE: 'SLATE',
  GRAY: 'GRAY',
  ZINC: 'ZINC',
  NEUTRAL: 'NEUTRAL',
  STONE: 'STONE',
  RED: 'RED',
  ORANGE: 'ORANGE',
  AMBER: 'AMBER',
  YELLOW: 'YELLOW',
  LIME: 'LIME',
  GREEN: 'GREEN',
  EMERALD: 'EMERALD',
  TEAL: 'TEAL',
  CYAN: 'CYAN',
  SKY: 'SKY',
  BLUE: 'BLUE',
  INDIGO: 'INDIGO',
  VIOLET: 'VIOLET',
  PURPLE: 'PURPLE',
  FUCHSIA: 'FUCHSIA',
  PINK: 'PINK',
  ROSE: 'ROSE',
} as const;

type ITagsProps = {
  color: Values<typeof ColorTags>;
  children: ReactNode;
};

const colorToClassMap = {
  [ColorTags.SLATE]: 'bg-slate-300 text-slate-900',
  [ColorTags.GRAY]: 'bg-gray-300 text-gray-900',
  [ColorTags.ZINC]: 'bg-zinc-300 text-zinc-900',
  [ColorTags.NEUTRAL]: 'bg-neutral-300 text-neutral-900',
  [ColorTags.STONE]: 'bg-stone-300 text-stone-900',
  [ColorTags.RED]: 'bg-red-300 text-red-900',
  [ColorTags.ORANGE]: 'bg-orange-300 text-orange-900',
  [ColorTags.AMBER]: 'bg-amber-300 text-amber-900',
  [ColorTags.YELLOW]: 'bg-yellow-300 text-yellow-900',
  [ColorTags.LIME]: 'bg-lime-300 text-lime-900',
  [ColorTags.GREEN]: 'bg-green-300 text-green-900',
  [ColorTags.EMERALD]: 'bg-emerald-300 text-emerald-900',
  [ColorTags.TEAL]: 'bg-teal-300 text-teal-900',
  [ColorTags.CYAN]: 'bg-cyan-300 text-cyan-900',
  [ColorTags.SKY]: 'bg-sky-300 text-sky-900',
  [ColorTags.BLUE]: 'bg-blue-300 text-blue-900',
  [ColorTags.INDIGO]: 'bg-indigo-300 text-indigo-900',
  [ColorTags.VIOLET]: 'bg-violet-300 text-violet-900',
  [ColorTags.PURPLE]: 'bg-purple-300 text-purple-900',
  [ColorTags.FUCHSIA]: 'bg-fuchsia-300 text-fuchsia-900',
  [ColorTags.PINK]: 'bg-pink-300 text-pink-900',
  [ColorTags.ROSE]: 'bg-rose-300 text-rose-900',
};

const Tags = (props: ITagsProps) => (
  <div
    className={`rounded-md px-2 py-1 text-xs font-semibold ${
      colorToClassMap[props.color]
    }`}
  >
    {props.children}
  </div>
);

export { Tags };
