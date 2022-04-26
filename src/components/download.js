import React from "react";
import { useState,useEffect } from "react";
import axios from "axios"
import  "../download.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./navbar";
import Footer from "./footer";
import { useParams } from "react-router-dom";

import {Helmet} from 'react-helmet'

const icon = require('../images/upper.png')
const Download=()=>{
   
    const Params = useParams()
    const {id} = Params
    const [data,setdata]=useState([])


    const getData=async ()=>{
      await axios.get(`https://onlinetoolscave.in/576f5b62-e850-4071-84fa-6a05d5cf0d6e/${id}`).then((resp)=>{
         setdata(resp.data)
       })
       
    }

   useEffect(()=>{
      getData()
        },[])

        
return(
   <>
   <Helmet>
   <meta name="apple-mobile-web-app-capable" content="yes" />
   <title>KatMovies.tk |KatMovies | Kat Movies | KatMovies-300mb Movies, 480p Movies</title>
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="robots" content="noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
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
{data.map((Movies)=>{
    const{story}= Movies
    return(
        <div className="download">
			
        <div dangerouslySetInnerHTML={{__html:story}}></div>
</div>
    )
})
}

<Footer />
</>
) 
}

export default Download