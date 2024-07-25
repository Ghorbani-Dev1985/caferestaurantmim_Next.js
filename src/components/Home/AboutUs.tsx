"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import AboutUsItems from "src/app/(users)/aboutus/AboutUsItems";



const AboutUs = () => {
    
    return(
     <div className="container"><AboutUsItems /></div>
    )
}

export default AboutUs;