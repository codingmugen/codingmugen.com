import type { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

import type { IFrontmatter } from '@/types/IFrontMatter';

type IPostContentProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const PostContent = (post: IPostContentProps) => (
  <div className="mx-auto mt-5 max-w-prose">
    <div className="aspect-w-3 aspect-h-2">
      <img
        className="h-full w-full rounded-lg object-cover object-center"
        src={post.content.image?.fields.file.url || '/assets/images/tashan.jpg'}
        alt={post.content.image?.fields.title || 'tay and coding mugen logo'}
        loading="lazy"
      />
    </div>

    <div className="prose prose-invert mt-8 prose-img:rounded-lg">
      <ReactMarkdown
        children={post.content.content}
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ ...props }) {
            return <>{props.children}</>;
          },
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={a11yDark}
                language={match[1]}
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
      ,
    </div>
  </div>
);

export { PostContent };
