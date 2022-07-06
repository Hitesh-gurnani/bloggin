import { useState } from 'react'
import Link from 'next/link'
import { auth } from '../firebase'
export default function about() {



    return (
        <div className="container center" style={{ color: 'white' }}>

            <h1 style={{ textAlign: 'center', color: 'white' }}>Feedly</h1>
            <h4 style={{ fontFamily: 'serif', opacity: '0.7' }}>This is a one stop platform for a user to get accurate and legitimate news</h4>

            <br></br><br></br><br></br><br></br>
            <h8>Created by:-</h8>
            <p>Arav arora (191b057)</p>
            <p>Arpit vashistha (191b066)</p>
            <p>Hitesh Gurnani (191b126)</p>
        </div>
    )
}
