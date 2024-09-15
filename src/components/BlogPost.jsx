import React from 'react';
import Addphoto from '../assets/Addphoto';

const BlogPost = ({ title, content }) => {
  return (
    <div class="flex space-x-4">
      <article className="mb-6 bg-sky-200  shadow-lg rounded-lg sm:w-96 h-64 p-6 w-1/2">
      <h2 className="text-2xl font-bold mb-2"><Addphoto/>{title}</h2>
      <p>{content}</p>
    </article>
    <article className="mb-6 bg-sky-200  shadow-lg rounded-lg sm:w-96 h-64 p-6 w-1/2">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </article>
    <article className="mb-6 bg-sky-200  shadow-lg rounded-lg sm:w-96 h-64 p-6 w-1/2">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </article>
    <article className="mb-6 bg-sky-200  shadow-lg rounded-lg sm:w-96 h-64 p-6 w-1/2">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </article>
    </div>
     
  );
};

export default BlogPost;
