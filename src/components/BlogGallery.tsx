import type { PostProps } from '@/types/BlogPost';

import { BlogCard } from './BlogCard';

interface BlogGalleryProps {
  postList: PostProps[];
}

const BlogGallery = (props: BlogGalleryProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((post) => (
      <BlogCard key={post.slug} instance={post} />
    ))}
  </div>
);

export { BlogGallery };
