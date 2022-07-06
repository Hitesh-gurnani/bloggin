import { useState } from 'react'
import Link from 'next/link'
import { auth } from '../firebase.js'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        // console.log(email, name, password)
        // e.preventDefault()
        // try {
        //     const result = await auth.createUserWithEmailAndPassword(email, password)
        //     // await result.user.updateProfile({
        //     //     displayName: name
        //     // })
        //     if (result) {
        //         // M.toast({ html: `welcome to feedly`, classes: "green" })
        //         alert('Welcome back to feedly')

        //     }
        // } catch (err) {
        //     M.toast({ html: err.message, classes: "red" })
        // }
        e.preventDefault()
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password)
            await result.user.updateProfile({
                displayName: name
            })
            M.toast({ html: `welcome ${result.user.displayName}`, classes: "green" })
        } catch (err) {
            M.toast({ html: err.message, classes: "red" })
        }

    }
    // const redirect = (e) => {
    //     // e.preventDefault();
    //     // const formdata = {};
    //     // formdata["name"] = name;
    //     // formdata["email"] = email;
    //     // formdata["password"] = password;
    //     // console.log(formdata)
    //     // if (formdata) {
    //     //     M.toast({ html: `welcome to feedly`, classes: "green" })
    //     // }
    //     handleSubmit(e);

    // }
    return (
        <div className="container center">
            <h2 style={{ color: 'white', fontFamily: 'sans-serif' }}><b>SIGN-UP PAGE</b></h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-field">
                    <input type="text" style={{ color: 'white' }} placeholder="type your name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" style={{ color: 'white' }} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" style={{ color: 'white' }} placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn #fb8c00 orange darken-1">Signup</button>


                <Link href="/login"><a><h5 style={{ color: 'white' }} >Already have an account?</h5></a></Link>
            </form>

        </div>
    )
}
