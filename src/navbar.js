import React,{useState} from "react";
import './navbarCss.css'
function Navbar(){
    return (
        <>
        <div className="top" style={{color:"black",display:"flex",justifyContent:"space-between", alignItems:"center",fontSize:"1.2em"}}>
            <span className="logo">logo</span>
            <ul className="navigation" style={{listStyle:"none",display:"flex",gap:"2em",marginRight:"1em",color:"black",marginRight:"50px"}}>
              
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
            </ul>
        </div>
        </>
    );
}
export default Navbar;