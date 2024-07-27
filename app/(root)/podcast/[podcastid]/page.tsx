import React from 'react'

const page = ({ params }: {
    params: {
        podcastid: string
    }
}) => {

    console.log(params);
    return (
        <div>Podcast home page{params.podcastid}</div>
    )
}

export default page