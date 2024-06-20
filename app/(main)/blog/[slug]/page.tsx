interface SlugPageProps {
    params: {
      slug: string;
    };
  }
  
  const BlogDetails: React.FC<SlugPageProps> = ({ params }) => {
    const { slug } = params;
  
    return (
      <div>
        <h1>Slug Page</h1>
        <p>The slug is: {slug}</p>
      </div>
    );
  };

  export default BlogDetails