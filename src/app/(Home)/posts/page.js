"use client";
import React, { useState, useEffect } from "react";
import SuspenceComp from "@/components/SuspenceComp";
import { Suspense } from "react";

export default function Page() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   try {
  //     async function fetchData() {
  //       const res = await fetch("https://dummyjson.com/products");
  //       const data = await res.json();
  //       setPosts(data.products); // ✅ fixed
  //     }

  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);
  // console.log("client side");

  // if(loading) return <div>Loading.....</div>
  // return (
  //   <div>
  //     {posts.map((post) => (
  //       <div key={post.id}>
  //         <h3>{post.title}</h3>
  //       </div>
  //     ))}
  //   </div>
  // ); 


  return (
    <div>
      <h1>Posts Page</h1> 

      <Suspense fallback={<div>Loading.......</div>}>
      <SuspenceComp />
      </Suspense>

      <h2>Hey Heloo All going good</h2>

    </div>
  )
}
