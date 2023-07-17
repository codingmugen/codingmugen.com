export interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
}

// Workaround to import Astro type. Otherwise, it'll have some compilation errors
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type Page<T> = import('astro').Page<T>;
export type MarkdownInstance<T extends Record<string, any>> =
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  import('astro').MarkdownInstance<T>;

export type FrontmatterPage = Page<MarkdownInstance<IFrontmatter>>;
