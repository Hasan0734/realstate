import Link from "next/link";
import BlogCard2 from "../../../src/components/client/Blogs/BlogCard2";
import BlogSearch from "../../../src/components/client/Blogs/BlogSearch";
import BlogShorted from "../../../src/components/client/Blogs/BlogShorted";
import BlogCategory from "../../../src/components/client/Blogs/Category/BlogCategory";
import BlogFeturedPosts from "../../../src/components/client/Blogs/FeturedPost/BlogFeturedPosts";
import BlogPagination from "../../../src/components/client/Blogs/Pagination/BlogPagination";
import Subcriber from "../../../src/components/client/Blogs/Subcriber";
import BlogTags from "../../../src/components/client/Blogs/Tags/BlogTags";
import Layout from "../../../src/components/client/layout";
import { getData } from "../../../__lib__/helpers/HttpService";

function CategorySlug({ blogs }) {
  const shorted = blogs.slice(blogs?.length - 2, blogs?.length);
  const shorted2 = blogs.slice(1, blogs.length - 2)
  const reversed = shorted2.reverse()
  
  return (
    <Layout>
      <div className="container mt-5 mb-md-4 py-5">
        {/* Breadcrumb + Page title*/}
        <nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link href='/'>
                <a >Home</a>
                </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>
        <h1 className="pb-3" style={{ color: "grey" }}>
          Real estate journey
        </h1>
        <div className="row">
          {/* List of articles*/}
          <div className="col-lg-8">
            <div className="pt-4 pb-2 mt-2">
              {/* Item*/}
             {reversed.map((blog, i) =>  <BlogCard2 key={i} blog={blog}/>)}
            </div>
            {/* Pagination*/}
            <BlogPagination />
          </div>
          {/* Sidebar*/}
          <aside className="col-lg-4">
            <div
              className="offcanvas offcanvas-end offcanvas-collapse"
              id="blog-sidebar"
            >
              <div className="offcanvas-header shadow-sm mb-2">
                <h2 className="h5 mb-0">Sidebar</h2>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="offcanvas"
                />
              </div>
              <div className="offcanvas-body">
                {/* Sort*/}
                <BlogShorted blogs={blogs} />
                {/* Search*/}
                <BlogSearch />
                {/* Categories*/}
                <BlogCategory />
                {/* Tags*/}
                <BlogTags />
                {/* Fetured posts (carousel)*/}
                <BlogFeturedPosts />
                {/* Subscription form*/}
                <Subcriber />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
export default CategorySlug;

export async function getServerSideProps(context) {
const categorySlug = context.params?.categorySlug;
  const blogs = await getData(`/blogs/c/${categorySlug}`);
  return {
    props: {
      blogs: blogs || []
    },
  };
}
