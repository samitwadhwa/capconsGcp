"use client"
import BlogCard from "@/components/Landing/BlogsCard";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription, CardMedia } from "@/components/ui/card";
// import useWindowWidth from "@/hooks/useWindowWidth";
import { blogData } from "@/lib/data";
import Image from 'next/image';
import { useState } from "react";
// import {Spinner} from '@/components/ui/spinner';

interface BlogSectionProps {
  title: string;
  blogs: typeof blogData.latestBlogs;
}
interface TrendingBlogSectionProps {
  title: string;
  TrendingBlogs: typeof blogData.trendingBlogs;
}

interface EditorsPickSectionProps {
  title: string;
  editorsPick: typeof blogData.editorsPick;
}
interface AllBlogsSectionProps {
  title: string;
  allblogs: typeof blogData.allBlogsData;
}

const BlogSection: React.FC<BlogSectionProps> = ({ title, blogs }) => {

  // const windowWidth = useWindowWidth();
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return <Spinner size='medium'/>; // Or return a loading spinner if preferred
  // }
  
  if (!blogs || blogs.length === 0) {
    return null; // Don't render anything if blogs are undefined or empty
  }

  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="md:col-span-2 h-full md:h-[486.11px] relative">
  <Card imageUrl={blogs[0].imageUrl} className="w-full h-full shadow-lg relative bg-cover bg-center bg-no-repeat">
    <Image 
      src={blogs[0].imageUrl} 
      alt={blogs[0].title} 
      layout="fill" 
      objectFit="cover" 
      className="rounded-lg bg-cover bg-center bg-no-repeat" 
    />
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end h-full">
      <CardHeader className="text-white mb-auto md:mb-0">
        <div className="bg-[#62447D] px-2 py-1 mb-2 rounded w-28">{blogs[0].category}</div>
        <CardTitle>{blogs[0].title}</CardTitle>
        {blogs[0].description && <CardDescription className="text-foreground">{blogs[0].description}</CardDescription>}
      </CardHeader>
      <CardFooter className="flex justify-between text-white mt-4">
        <span>{blogs[0].username}</span>
        <span>{blogs[0].date}</span>
      </CardFooter>
    </div>
  </Card>
</div>


        <div className="md:col-span-3 grid grid-cols-2 gap-4">
          {blogs.slice(1).map((blog, index) => (
            <div key={index} className="h-[235px]">
              <Card imageUrl={blog.imageUrl} className="w-full h-full shadow-lg relative">
                <CardHeader className="absolute top-4 md:rounded rounded  bg-[#62447D] text-white p-2">
                  {blog.category}
                </CardHeader>
                <CardFooter className="absolute bottom-0 -mb-1.5 left-0 w-full bg-gradient-to-t bg-black bg-opacity-50 from-black via-transparent to-transparent p-4 flex flex-col justify-between">
                  <span>{blog.title}</span>
                  <div className="flex flex-row justify-between w-full">
                    <div>
                      {blog.username}
                    </div>
                    <div>
                      {blog.date}
                    </div>
                  </div>
                </CardFooter>

              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const TrendingBlogSection: React.FC<TrendingBlogSectionProps> = ({ title, TrendingBlogs }) => {
  
  const [showAllCards, setShowAllCards] = useState(false);
  
  if (!TrendingBlogs || TrendingBlogs.length === 0) {
    return null; // Don't render anything if blogs are undefined or empty
  }


  const toggleCardVisibility = () => {
    setShowAllCards((prevState) => !prevState);
  };

  const visibleCards = showAllCards ? blogData.trendingBlogs.length : 3;

  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex justify-between items-center gap-4 flex-wrap w-full">
        {TrendingBlogs.slice(0,visibleCards).map((blog, index) => (
          <div key={index} className="h-[235px]">
            <Card imageUrl={blog.imageUrl} className="w-full h-full shadow-lg relative">
              <CardHeader className="absolute top-4 rounded bg-[#62447D] text-foreground p-2">
                {blog.category}
              </CardHeader>
              <CardFooter className="absolute bottom-0 -mb-1.5 left-0 w-full bg-gradient-to-t bg-black bg-opacity-50 from-black via-transparent to-transparent p-4 flex flex-col justify-between">
                <span>{blog.title}</span>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {blogData.trendingBlogs.length > 3}
        <Button className="bg-primary text-foreground px-4 py-2 rounded" onClick={toggleCardVisibility}>{showAllCards ? "View Less" : "View More"}</Button>
      </div>
    </section>
  );
};

const EditorsPickSection: React.FC<EditorsPickSectionProps> = ({ title, editorsPick }) => {
 

  const [showAllCards, setShowAllCards] = useState(false); // Ensure useState is not called conditionally

  if (!editorsPick || editorsPick.length === 0) {
    return null; // Don't render anything if blogs are undefined or empty
  }

  const toggleCardVisibility = () => {
    setShowAllCards((prevState) => !prevState);
  };

  const visibleCards = showAllCards ? blogData.editorsPick.length : 6;

  return (
    <section className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div>
          <select className="bg-[#2A2A2E] p-2 rounded">
            <option value="">Category</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {editorsPick.slice(0,visibleCards).map((pick, index) => (
          <Card key={index} className="w-full shadow-lg flex flex-row height-50 items-center pt-0" noPadding>
            <div className="flex items-center">
              <Image src={pick.imageUrl} alt={pick.title} width={150} height={150} className="object-cover rounded-l-lg ml-4" />
              <div className="flex-1">
                <CardHeader>
                  <CardTitle>{pick.title}</CardTitle>
                  {pick.description && <CardDescription>{pick.description}</CardDescription>}
                </CardHeader>
                <CardFooter className="flex justify-between items-center text-gray-500 mt-2">
                  <span>{pick.date}</span>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {blogData.editorsPick.length > 6}
        <Button className="bg-primary text-foreground px-4 py-2 rounded" onClick={toggleCardVisibility}>{showAllCards ? "View Less" : "View More"}</Button>
      </div>
    </section>
  );

};
const AllBlogsSection: React.FC<AllBlogsSectionProps> = ({ title, allblogs }) => {
  
  const [showAllCards, setShowAllCards] = useState(false); // Ensure useState is not called conditionally

  if (!allblogs || allblogs.length === 0) {
    return null; // Don't render anything if blogs are undefined or empty
  }

  const toggleCardVisibility = () => {
    setShowAllCards((prevState) => !prevState);
  };

  const visibleCards = showAllCards ? blogData.editorsPick.length : 6;

  return (
    <section className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div>
          <select className="bg-[#2A2A2E] p-2 rounded">
            <option value="">Category</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">

        {allblogs.slice(0,visibleCards).map((item, index) => {
          return (
            <BlogCard
              key={index}
              imageUrl={item.imageUrl}
              description={item.description}
              title={item.title}
              href={item.href}
            />
          );
        })}

      </div>
      <div className="flex justify-center mt-8">
        {blogData.allBlogsData.length > 6}
        <Button className="bg-primary text-foreground px-4 py-2 rounded" onClick={toggleCardVisibility}>{showAllCards ? "View Less" : "View More"}</Button>
      </div>
    </section>
  );
};
const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center mb-8 mt-8 flex-wrap">
        <h1 className="text-2xl font-bold">CapCons. Blog</h1>
        <div className="flex items-center flex-nowrap mt-2 md:mt-0">
          <input type="text" placeholder="Search keywords" className="bg-[#2A2A2E] p-2 w-full min-w-[16rem] sm:min-w-[18rem] md:min-w-[25rem] lg:min-w-[25rem]" />
          <Button>
            <img className="w-7 h-6" src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/SearchIcon.webp" alt="" />
          </Button>
        </div>
      </header>
      <BlogSection title="Latest Blogs" blogs={blogData.latestBlogs} />
      <TrendingBlogSection title="Trending Blogs" TrendingBlogs={blogData.trendingBlogs} />
      <EditorsPickSection title="Editor's Pick" editorsPick={blogData.editorsPick} />
      <AllBlogsSection title="All Blogs" allblogs={blogData.allBlogsData} />
    </div>
  );
};

export default BlogPage;