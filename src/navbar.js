import {Link} from 'react-router-dom';
//Link tag instead of anchor tag shows the same effect in browser but Link tag prevents the request to th server. It instead
// is intercepted by the react router and instead of resending an entire html page, it looks at the path and injects the necessary component
//This makes the app faster. 
const Navbar = () =>
{
    return (
        <nav className="Navbar">
            <h1>Blogs</h1>
            <div className="links">
                
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </nav>
    )
}
export default Navbar;