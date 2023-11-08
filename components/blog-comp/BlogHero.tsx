import React from 'react'
import "../styles/blog-hero.scss"
function BlogHero() {
    return (
        <div  className='blog-hero'>
            <div className='blog-search'>
                <div>
                <h1 className='main-heading'><span>Axle</span> Blogs</h1>
                <p>Here, you'll find the news and blogs related to the gaming.</p>
                </div>
                <input placeholder='Search Blog...'/>
            </div>
        </div>
    )
}

export default BlogHero