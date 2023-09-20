import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Profile() {
    const [name, setname] = useState("Sahil Lodu");
    const [mbnum, setmbnum] = useState("7878787878");
    // async function getUserdata() {
    //     console.log("chala")
    //     try {
    //         const user = await axios.get("http://localhost:8000/getuser", {
    //             withCredntials: true,
    //             credentials: 'include'
    //         })
    //         // const data = user.json();
    //         console.log(user);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }
    // useEffect(() => {

    //     getUserdata();
    // }, [])
    return (
        <div className='profile'>
            <div className='personaldata'>

                <div className='name'>
                    Name : {name}
                </div>
                <div className='number'>
                    Mobile Number : {mbnum}
                </div>
            </div>
        </div>
    )
}
