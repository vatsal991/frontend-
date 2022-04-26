import React from "react";
import { useState,useEffect } from "react";
import axios from "axios"
import "../style.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./navbar";
import Footer from "./footer";
import {Helmet} from 'react-helmet'

const icon = require('../images/upper.png')


const Home=()=>{
   
    const [data,setdata]=useState([])
    const [page,setpage] = useState(1)
    const [loading,setloading]=useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [show,setshow]=useState(true)

 
    const getData=async()=>{
     await axios.get(`https://onlinetoolscave.in/9138ed02-c179-4e32-a04e-b004beb52f77/${page}`).then((resp)=>{
        setdata(resp.data)
      })
      setloading(true)
    }

    const Checker=()=>{
      if(searchTerm===null){
         alert("Fill data")
      }
   }
   
   useEffect(()=>{
      getData()
        },[])

        const handleChange = event => {
          setSearchTerm(event.target.value);
        };
        console.log(searchTerm)
      
        
return(
   <>
   <div className="Bottomads">
        <iframe
          data-aa="1960936"
          src="//ad.a-ads.com/1960936?size=468x60"
          style={{
            width: "468px",
            height: "60px",
            border: "0",
            padding: "0",
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
        ></iframe>
      </div>
   <Helmet>
   <meta name="apple-mobile-web-app-capable" content="yes" />
   <title>KatMovies.tk |KatMovies | Kat Movies | KatMovies-300mb Movies, 480p Movies</title>
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="icon" href={icon} type="image/x-icon"></link>
<meta name="description" content="katmovies,ktmovieshd,kat movies ,MoviesFlix,moviesflix.com,moviesflixpro,moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co,themoviesflix.in,themoviesflix.net,tamilrockers,moviesverse,movies verse,vegamovies,vega movies,KatMovieHd.sx,MovieskiDuniya,Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies" />
<meta property="og:locale" content="en_US"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="KatMovies.tk |KatMovies | Kat Movies | KatMovies-300mb Movies, 480p Movies"/>
<meta property="og:description" content="katmovies,ktmovieshd,kat movies ,MoviesFlix,moviesflix.com,moviesflixpro,moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co,themoviesflix.in,themoviesflix.net,tamilrockers,moviesverse,movies verse,vegamovies,vega movies,KatMovieHd.sx,MovieskiDuniya,Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies"/>
<meta property="og:url" content="http://katmovies.tk/"/>
<meta property="og:site_name" content="KatMovies.tk |KatMovies | Kat Movies | KatMovies-300mb Movies, 480p Movies"/>
   </Helmet>
<Navbar />
      <div className="maincontainer">
   {loading?
   data.map((Movies)=>{
      const {title,image,id} =Movies
      return(
         <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="container1">
            <img className="image1" src={image} 
            onError={({ currentTarget }) => {
               currentTarget.onerror = null;
               currentTarget.src="https://cdn.dribbble.com/users/841193/screenshots/4109909/media/c8f817c63e688fe303705c35c9ef46ae.gif";
               }} />
            <div className="tester"> <a style={{ textDecoration: 'none' }} href={`/post/${id}`}><text className="text">{title}</text></a></div>
            </div>

         </div>
      )
      }):
      <div className="loadingcontainer">
    <div class="spinner-grow text-primary" role="status">
    </div>
    <div class="spinner-grow text-secondary" role="status">
    </div>
    <div class="spinner-grow text-success" role="status">
    </div>
    <div class="spinner-grow text-danger" role="status">
    </div>
    <div class="spinner-grow text-warning" role="status">
    </div>
    <div class="spinner-grow text-info" role="status">
    </div>
    <div class="spinner-grow text-light" role="status">
    </div>
    <div class="spinner-grow text-dark" role="status">
    </div>
    </div> 
   }
</div>
<div className="ButtonContainer">
<a href="/"><button type="button" class="btn btn-danger" disabled>Previous Page</button></a>
<a href="/page/2"><button type="button" class="btn btn-danger">Next Page</button></a>
</div>
<Footer />
</>
) 
}

export default Home