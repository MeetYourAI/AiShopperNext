import BlogPostCard from '@/components/blog/BlogPostCard';
import BlogCard from '@/components/BlogCard';
import { blogs } from '@/data/content';

const SectionBlogs = () => {
  return (
    <section>
      <div className="container pb-24">
        <ul className="grid grid-cols-12 gap-4 lg:gap-2">
          {blogs?.slice(0, 3).map((blog) => (
            <li
              key={blog.title}
              className="group col-span-12 lg:col-span-6 lg:first:col-span-12 xl:col-span-4 xl:first:col-span-8 xl:first:row-span-2"
            >
              <BlogPostCard {...blog} />
            </li>
          ))}
          {blogs?.slice(3).map((blog) => (
            <li
              key={blog.slug}
              className="col-span-12 pt-6 md:col-span-4 lg:col-span-2"
            >
              <BlogCard
                coverImage={blog.coverImage}
                // brief={blog.brief}
                title={blog.title}
                // tag={blog.tag}
                // date={blog.date}
                slug={blog.slug}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionBlogs;
