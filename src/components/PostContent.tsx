import HTMLReactParser from 'html-react-parser';
import type { ReactNode } from 'react';

import type { IFrontmatter } from '@/types/IFrontMatter';

type IPostContentProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const PostContent = (props: IPostContentProps) => (
  <div className="mx-auto mt-5 max-w-prose">
    <div className="aspect-w-3 aspect-h-2">
      <img
        className="h-full w-full rounded-lg object-cover object-center"
        src={
          props.content.image?.fields.file.url || '/assets/images/tashan.jpg'
        }
        alt={props.content.image?.fields.title || 'tay and coding mugen logo'}
        loading="lazy"
      />
    </div>

    <div className="prose prose-invert mt-8 prose-img:rounded-lg">
      {typeof props.content.content === 'string'
        ? HTMLReactParser(props.content.content)
        : props.content.content}
    </div>
  </div>
);

export { PostContent };
