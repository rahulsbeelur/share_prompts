'use client';

import React from 'react';

const Post = ({ params: { postId } }: { params: { postId: string } }) => {
    return <div>{postId}</div>;
};

export default Post;
