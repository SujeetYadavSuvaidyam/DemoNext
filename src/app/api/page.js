import React from 'react'
import Navbar from '../router/navbar/page'

const Api = ({posts}) => {
    console.log(posts)
    return (
        <>
            <Navbar />
            <div>page</div>
            <div>
                {
                    posts.map((e)=>
                    <p>{e.title}</p>
                    )
                }
            </div>
        </>
    )
}

export default Api;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    // console.log(posts)
    return {
        props: {
            posts
        }
    }
}