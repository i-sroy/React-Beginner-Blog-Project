import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () =>
{   
        
    const [blogName,setName] = useState("");
    const [body,setBody] = useState("");
    const [authorName,setauthorName] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const blog = {blogName,body,authorName};
        setIsPending(true);
        console.log(blog);
        if(blogName && body && authorName){
            fetch("http://localhost:8000/blogs", {
                method:"POST", 
                headers: {"Content-Type": "application/json",}, 
                body:JSON.stringify(blog)})
            .then(response => {
                if(!response.ok){
                    throw Error (`Server Error : ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Post request successful!")
                setIsPending(false);
            })
            .catch(error => console.error("Error while creating post: ", error));
            
        }
        navigate("/");
    }
    return (
        <div className="create-new">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Name: </label>
                <input type="text" required value={blogName} onChange={(e) => setName(e.target.value)}/>
                <label>Blog Body: </label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog authorName: </label>
                <input type="text" required value={authorName} onChange={(e) => setauthorName(e.target.value)}/>
                {!isPending && <button>New Blog</button>}
                {isPending && <button disabled>Adding . . .</button>}

            </form>
        </div>
        );
    
    };

export default Create;


// ADD AN INPUT THROUGH PROMPT
// const { blogs, setBlogs } = useState({});
    //const [idCounter, setId] = useState(1);
    // const handleClickAgain = () =>
    // {
    //     const blogInput = prompt("Enter the blogname: ");
    //     const author = prompt("Enter the name of the author: ");

    //     if (blogInput && author)
    //     {
    //         const newBlog = {blogName: blogInput, authorName: author};
    //         // const updated = [...blogs,newBlog];
    //         //setId(idCounter + 1);
    //         //setBlogs(updated);
    //         //console.log(updated);
    //         fetch("http://localhost:8000/blogs", {
    //             method: "POST",
    //             headers: {
    //               "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(newBlog),  // Send only the new blog post, not the entire array
    //           })
    //             .then((response) => {
    //               if (!response.ok) {
    //                 throw new Error(`Server error: ${response.status}`);
    //               }
    //               return response.json();  // Parse response as JSON
    //             })
    //             .then((data) => {
    //               console.log("Post created:", data);
    //               // Optionally update state with response data, if needed
    //             })
    //             .catch((error) => {
    //               console.error("Error creating post:", error);
    //             });
    //         };
    //     }