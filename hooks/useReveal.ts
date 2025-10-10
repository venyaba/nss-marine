"use client";
import {useEffect} from "react";
export function useReveal(){
  useEffect(()=>{
    const els=Array.from(document.querySelectorAll(".reveal, .revealRight, .revealDown, .revealScale"));
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add("in");
        } else {
          e.target.classList.remove("in");
        }
      })
    },{threshold:.12});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);
}
