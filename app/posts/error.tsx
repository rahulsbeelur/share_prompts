'use client';

import React, { useEffect } from 'react';

const PostError = ({ error }: { error: string }) => {
    useEffect(() => {
        console.log(error);
    }, []);
    return (
        <div>
            <h2>Something went wrong!</h2>
        </div>
    );
};

export default PostError;
