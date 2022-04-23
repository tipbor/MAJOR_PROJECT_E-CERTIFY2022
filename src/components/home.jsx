import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import instilogo from '../instilogo.jpg';
import stulogo from '../stulogo.jpg';
import thirdlogo from '../thirdlogo.png';
import block1 from "../block1.jpg";
import '../App.css';
const Home = () => {
return (
	<div 
    style={{
        height: "100vh%",
        //backgroundImage: `url(${b1})`,
        background: `url(${block1}) no-repeat `,
        backgroundSize: "cover"
      }}>
	<h1 class="App-link" id="h1">E-CERTIFICATION</h1>
	<br />
	<p>
		
		{/* Endpoint to route to Home component */}
		<Link to="/"></Link>
		
        <div class="split left">
        <div class="centered">
		{/* Endpoint to route to Institute component */}
		<Link to="/institute"><img src={instilogo}/></Link>
		</div>
        </div>
		
        
        <div class="centered">
		{/* Endpoint to route to student component */}
		<Link to="/student"><img src={stulogo}/></Link>
		</div>
        
        
        <div class="split right">
        <div class="centered">
        {/* Endpoint to route to thirdparty component */}
        <Link to="/thirdparty"><img src={thirdlogo}/></Link>
        </div>
        </div>
        </p>
	</div>
);
};

export default Home;
