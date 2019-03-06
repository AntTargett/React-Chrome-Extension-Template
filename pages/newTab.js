import Link from 'next/link'
import React from 'react'

function Home(){return(   <div>     Click
        <Link href={{ pathname: 'https://github.com/', query: { name: 'Zeit' } }}>
        here
        </Link>
        to read more
</div>)}
export default Home