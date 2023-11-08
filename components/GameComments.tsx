"use client";

import React, { useEffect, useState } from 'react'
import StarRating from './ui/rating'
import { Button } from './ui/button'
import CommentsGrid from './CommentsGrid'
import axios from 'axios'
import PostReview from './PostReview';


function GameComments({slug}:any) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(comments)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://kind-pear-puffer-tie.cyclic.cloud/api/comments/getall/${slug}`);
        setComments(response.data.comments);
        setLoading(false);
      } catch (error:any) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
          <div className='flex justify-between items-center'>
        <div className='flex gap-2 text-5xl'>4.9 <StarRating rating={5}/></div>
        <PostReview slug={slug}/>
    </div>
    <div className="mt-5">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : comments.length === 0 ? (
          <p>No comments found.</p>
        ) : (
          <ul>
            {comments.map((comment: any) => (
              <div key={comment._id}>
                 <CommentsGrid username={comment?.user_info?.userName} rating={comment?.rating} date={comment?.createdAt} comment={comment?.comment}/>
              </div>
            ))}
          </ul>
        )}
 
     
    </div>
    </div>
  )
}

export default GameComments