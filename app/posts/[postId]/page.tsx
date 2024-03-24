'use client';

import React from 'react'

const Post = ({params: {postId}}: {params: {postId: string}}) => {
  console.log("Here", postId);
  return (
    <div>{postId}</div>
  )
}

export default Post;