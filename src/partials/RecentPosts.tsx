import { BlogGallery, GradientText, Section } from '@/components';
import type { PostProps } from '@/types/BlogPost';

interface RecentPostsProps {
  posts: PostProps[];
}

const RecentPosts = (props: RecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.posts} />
  </Section>
);
export { RecentPosts };
