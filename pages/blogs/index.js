import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCard2 from "../../src/components/client/Blogs/BlogCard2";
import BlogCard from "../../src/components/client/Blogs/BlogCard";
import BlogSearch from "../../src/components/client/Blogs/BlogSearch";
import BlogShorted from "../../src/components/client/Blogs/BlogShorted";
import BlogCategory from "../../src/components/client/Blogs/Category/BlogCategory";
import FeturedPosts from "../../src/components/client/Blogs/FeturedPost/BlogFeturedPosts";
import BlogPagination from "../../src/components/client/Blogs/Pagination/BlogPagination";
import Subcriber from "../../src/components/client/Blogs/Subcriber";
import BlogTags from "../../src/components/client/Blogs/Tags/BlogTags";
import Layout from "../../src/components/client/layout";
import { getData } from "../../__lib__/helpers/HttpService";

function Blogs({ blogs, tags }) {
  const [search, setSearch] = useState(null);
  const shorted = blogs.slice(blogs?.length - 2, blogs?.length);
  const shorted2 = blogs.slice(0, blogs.length - 2);
  const reversed = shorted2.reverse();
  const [selectedTag, setSelectedTag] = useState(null)
  const [selectedSort, setSelectedSort] = useState([])

  const handleSearch = (e) => {
    setSelectedTag(null)
    setSearch(e);
 
  };


  const filtered = blogs?.filter((val) => {
    if (!search) {
      return [];
    } else if (
      val.title.toLowerCase().includes(search?.toLowerCase()) ||
      val.category?.categoryName.toLowerCase().includes(search?.toLowerCase())
    ) {
      return val;
    }
  });
  
  const tagFilter = blogs?.filter((val) => {
    if (!selectedTag) {
      return [];
    } else if (val.tags.includes(selectedTag)) {
      return val;
    }
  });
  const handleSelected = (e) => {
    if (e === "oldest") {
      setSelectedSort(blogs);
    } else if (e === "newest") {
      const reversed = [...blogs].reverse()
      setSelectedSort(reversed);
    }else{
      setSelectedSort([])
    }
  };


  const [pageNumber, setPageNumber] = useState(0);
  const blogPerPage = 5;
  const pagesVisited = pageNumber * blogPerPage;

  const reversedData = Math.ceil(reversed.length / blogPerPage);
  const searchData = Math.ceil(filtered.length / blogPerPage);
  const tagFilterData = Math.ceil(tagFilter.length / blogPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



  return (
    <Layout>
      <div className="container mt-5 mb-md-4 py-5">
        {/* Breadcrumb + Page title*/}
        <nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
               <Link href="/">
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
          {blogs.length === 0 && <div>No blog available</div>}
          {/* List of articles*/}
          <div className="col-lg-8">
            {!search && !selectedTag && selectedSort.length === 0 && (
              <div className="border-bottom pb-2">
                <div className="row">
                  {/* Item*/}
                  {shorted.reverse().map((short, i) => (
                    <BlogCard key={i} blog={short} />
                  ))}
                </div>
              </div>
            )}
            <div className="pt-4 pb-2 mt-2">
              {/* Item*/}
              {!search && !selectedTag && selectedSort.length === 0 &&
                reversed.slice(pagesVisited, pagesVisited + blogPerPage).map((blog, i) => <BlogCard2 key={i} blog={blog} />)}
                
              {!search && !selectedTag && selectedSort.length > 0 &&
                selectedSort.slice(pagesVisited, pagesVisited + blogPerPage).map((blog, i) => <BlogCard2 key={i} blog={blog} />)}

              {search && !selectedTag &&
                (filtered.length === blogs.length || filtered.length === 0 ? (
                  <div>Blog not found</div>
                ) : (
                  filtered.slice(pagesVisited, pagesVisited + blogPerPage).map((blog, i) => <BlogCard2 key={i} blog={blog} />)
                ))}

              {selectedTag && !search &&
                (tagFilter.length === blogs.length || tagFilter.length === 0 ? (
                  <div>Blog not found</div>
                ) : (
                  tagFilter.slice(pagesVisited, pagesVisited + blogPerPage).map((blog, i) => <BlogCard2 key={i} blog={blog} />)
                ))}

            </div>
            {/* Pagination*/}
            {!search && !selectedTag && reversed.length > 0  && <BlogPagination  pageCount={reversedData} changePage={changePage} />}
            {search && !selectedTag && <BlogPagination  pageCount={searchData} changePage={changePage} />}
            {!search && selectedTag && <BlogPagination  pageCount={tagFilterData} changePage={changePage} />}
         
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
                <BlogShorted handleSelected={handleSelected}/>
                {/* Search*/}
                <BlogSearch handleSearch={handleSearch} />
                {/* Categories*/}
                {/* <BlogCategory categories={categories} blogs={blogs} /> */}
                {/* Tags*/}
                <BlogTags setSelectedTag={setSelectedTag} tags={tags} />
                {/* Fetured posts (carousel)*/}
                {/* <FeturedPosts /> */}
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
export default Blogs;

export async function getServerSideProps() {
  const blogs = await getData("/blogs");
  const tags = await getData("/tags");
  return {
    props: {
      blogs: blogs || [],
      tags: tags || [],
      // categories
    },
  };
}
