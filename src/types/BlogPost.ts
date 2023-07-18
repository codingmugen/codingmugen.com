import type * as Contentful from 'contentful';

export type BlogPostSkeleton = {
  contentTypeId: 'cmBlog';
  fields: {
    headline: Contentful.EntryFieldTypes.Symbol;
    date: Contentful.EntryFieldTypes.Date;
    summary: Contentful.EntryFieldTypes.Text;
    content: Contentful.EntryFieldTypes.RichText;
    slug: Contentful.EntryFieldTypes.Symbol;
    postImage: {
      fields: {
        title: Contentful.EntryFieldTypes.Symbol;
        file: {
          url: Contentful.EntryFieldTypes.Symbol;
        };
      };
    };
  };
};

export type PostProps = {
  headline: string;
  slug: string;
  summary: string;
  date: string;
  postImage: {
    fields: {
      title: string;
      file: {
        url: string;
      };
    };
  };
};
