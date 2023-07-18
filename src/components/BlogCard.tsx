import type { PostProps } from '@/types/BlogPost';

interface BlogCardProps {
  instance: PostProps;
}
const BlogCard = (props: BlogCardProps) => {
  const { headline, slug, summary, date, postImage } = props.instance;
  return (
    <a className="hover:translate-y-1" href={slug}>
      <div className="overflow-hidden rounded-md bg-slate-800">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="h-full w-full object-cover object-center"
            src={postImage?.fields.file.url}
            alt={postImage?.fields.title}
            loading="lazy"
          />
        </div>

        <div className="px-3 pt-4 pb-6 text-center">
          <h2 className="text-xl font-semibold">{headline}</h2>

          <div className="mt-1 text-xs text-gray-400">{date}</div>

          <div className="mt-2 text-sm">{summary}</div>
        </div>
      </div>
    </a>
  );
};

export { BlogCard };
