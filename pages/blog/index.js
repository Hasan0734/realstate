import Link from "next/link";
import AddComment from "../../src/components/client/Blog/AddComment/AddComment";
import BlogComents from "../../src/components/client/Blog/BlogComments/BlogComents";
import BlogMeta from "../../src/components/client/Blog/BlogMeta";
import BlogTagShare from "../../src/components/client/Blog/BlogTagShare";
import SingleBlogSidebar from "../../src/components/client/Blog/SingleBlogSidebar";
import Layout from "../../src/components/client/layout";
import { getData } from "../../__lib__/helpers/HttpService";

function Blog({ blog }) {

  return (
    <Layout>
      <div className="container mt-5 pt-5">
        <nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>
        <h1 className="h2 pb-3 text-capitalize" style={{ color: "grey" }}>
          {blog?.title}
        </h1>
        <img className="rounded-3" src={blog?.image} alt="Image" />
        <div className="row mt-4 pt-3">
          {/* Post content*/}
          <p>{blog?.body}</p>
          <div className="col-lg-8">
            {/* Post meta*/}
            <BlogMeta />
            {/* Tags + Sharing*/}
            <BlogTagShare tags={blog?.tags} />
            {/* Comments*/}
            <BlogComents/>
          </div>
          {/* Sidebar*/}
          <SingleBlogSidebar  />
        </div>
      </div>
      <AddComment blog={blog} />
    </Layout>
  );
}
export default Blog;

export async function getServerSideProps(context) {
  const blog = await getData(`/blog/${context.query.id}`);
  return {
    props: {
      blog: blog || {},
    },
  };
}
