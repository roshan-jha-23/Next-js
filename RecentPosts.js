import React from 'react'
import { sortBlogs } from '@/src/utils';

const RecentPosts = ({blogs}) => {
    const sortedBlogs=sortBlogs(blogs);
  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center ' >
        <h2 className='w-full inline-block font-bold capitalize text-4xl '>Recent Posts</h2>
       
    </section>
  )
}

export default FeaturedPost