import React from 'react'
import { Heading, Paragraph } from '../base'

const Stack = () => {
    return (
        <div>
            <Heading>Favorite <s>Snack</s> Stack</Heading>
            <Paragraph>I’m not picky - I love learning whichever tool is the right one to get the job done. However, my go-to stack is to use React on the front end, Python and Django on the backend, GraphQL for querying and mutating a PostgreSQL database, and deploying the project to AWS.</Paragraph>
            <Paragraph size="sm"><em>Also, it's probably Sour Patch Kids, but I was recently introduced to beer brittle and I'm a little addicted.</em></Paragraph>
        </div>
    )
}

export { Stack }
