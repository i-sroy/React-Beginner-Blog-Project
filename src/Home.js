//import { useState } from "react";
import BlogList from "./BlogList";
//import { BlogContext } from "./useCreate";
import useFetch from "./useFetch";
//import Create from "./ create";

const Home = () =>
{
    const {data:blogs, isPending, error, setData:setBlogs} = useFetch("http://localhost:8000/blogs");

    const handleClickDelete = (id) => {
        console.log(`ID-> ${id}`);

        setBlogs((blogs) => blogs.filter((blog) => blog.id !== id));
        fetch(`http://localhost:8000/blogs/${id}`, { method:"DELETE"})
        .then(res => {
            if(!res.ok){
                throw Error (`Server Error: ${res.status}`);
            }
            console.log(`Post with ${id}ID deleted successfully!`);
        })
        .catch(error => {
            console.error("Error while deleting blogs");
        })
            
        };

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            { error && <div>{error}</div> }
            { isPending && <div>Loading . . .</div> }
            <BlogList blogs={blogs} title="All blogs" handleClickDelete={handleClickDelete}/>
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.authorName==="Linkin Park")} title="LP's Blogs" /> */}
            {/* <button onClick={() => setName("MArio")}> Change </button> */}
        </div>
    );
}

export default Home;