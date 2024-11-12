import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () =>
{
    const {id} = useParams()
    const {data:blog, error, isPending} = useFetch("http://localhost:8000/blogs/"+id);
    return (
        <div className="blog-details">
            <h2>Blog Details</h2>
            { isPending && <div> Loading ... </div>}
            { error && <div>{error}</div>}
            {blog && (
                <article>
                    <h3>{blog.id} : {blog.blogName}</h3>
                    <p> Written by - {blog.authorName}</p>
                    <p>{blog.body}</p>
                </article>
            )}
        </div>);
}

export default BlogDetails;