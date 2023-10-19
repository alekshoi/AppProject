import React, { useState } from 'react'
import Post from './posts/Post'
import Suggestions from './Suggestions'
import "./Timeline.css"


function Timeline() {
    const [posts, setPosts] = useState([

        {
            user: "ola.nordmann",
            postImage: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc16cb4c1-862b-49ab-b3f1-73b9ce6c2c36_3528x2871.jpeg",
            likes: 12,
            timestamp: "2 days",
        },
        {
            user: "erik.johanse",
            postImage: "https://austinhenley.com/blog/images/designofeverydaythings.jpg",
            likes: 16,
            timestamp: "4 days",
        },
        {
            user: "alex.harp",
            postImage: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc16cb4c1-862b-49ab-b3f1-73b9ce6c2c36_3528x2871.jpeg",
            likes: 1,
            timestamp: "6 days",
        },
        {
            user: "tuird_nielsen",
            postImage: "https://austinhenley.com/blog/images/predictablyirrational.jpg",
            likes: 120,
            timestamp: "5 days",
        },
    ]);


    const [suggestions, setSuggestions] = useState([
        {
            user: "erik.andersen",
            relation: "New to bookster",
        },
        {
            user: "silje.noresen",
            relation: "You follow thore.den.hellige",
        },

        {
            user: "fatima.olsen",
            relation: "New to bookster",
        },

    ])

    return (
        <div className='timeline'>
            <div className='timeline__left'>
                <div className='timeline__posts'>
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            user={post.user}
                            postImage={post.postImage}
                            likes={post.likes}
                            timestamp={post.timestamp}
                        />
                    ))}
                </div>
            </div>
            <div className='timeline__right'>
                <div className='suggestions__title'>Suggestions for you</div>
                <div className='suggestions-container'>
                    {suggestions.map((suggestion, index) => (
                        <Suggestions
                            key={index}
                            user={suggestion.user}
                            relation={suggestion.relation}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline;