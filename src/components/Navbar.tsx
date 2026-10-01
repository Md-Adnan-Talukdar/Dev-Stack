import React from 'react';



const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-50 justify-between bg-white border-b py-3 ">

    <div className=" max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
            <img src="/logo-text.png" alt="Logo" />
        </div>
         <ul className="flex items-center gap-6 text-lg font-semibold">           
             <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <div className="flex items-center gap-3">
             <button className="btn btn-active btn-success border-b-black rounded-b-md">Sign In</button>
<button className="btn btn-active btn-success border-b-black rounded-b-md">Sign Up</button>
    </div>
         </div>
 
</nav>

        </div>
    );
};

export default Navbar;