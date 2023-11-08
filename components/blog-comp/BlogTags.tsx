import React from 'react'
import "../styles/blog-tags.scss"
import { Facebook, Linkedin, Share2, Twitter } from 'lucide-react'
function BlogTags() {
  return (
    <div className='blog-tags container text-xl font-bold py-5'>
        
        <div className='tags-list'>
        <div>Tags:</div>
        <div className='mr-5'>
        {gamesTags.map((tag, index) => (
          <span key={index} className='tag'>
            {tag}
          </span>
        ))}
        </div>
        </div>
        <div className='flex gap-3'>
        Share:
        <Facebook />
        <Twitter />
        <Linkedin />
        </div>
        
    
    </div>
  )
}

export default BlogTags


const gamesTags = [
    "Action",
    "Adventure",
    "Role-Playing (RPG)",
    "Strategy",
    "Simulation",
    "Sports",
    "Shooter",
    "Platformer",
    "Racing",
    "VR",
  ];