import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <div className='m-6 w-screen flex flex-col md:flex-row flex-nowrap items-center justify-around fade-in-slower-anim'>
                <span><button type='button' className="text-3xl tracking-widest mt-6 md:m-0 transition hover:opacity-70 hover:scale-110"><NavLink to="/dev">DEV</NavLink></button></span>
                <span><button type='button' className="text-3xl tracking-widest mt-6 md:m-0 transition hover:opacity-70 hover:scale-110"><NavLink to="/workshop">WORKSHOP</NavLink></button></span>
                <span><button type='button' className="text-3xl tracking-widest mt-6 md:m-0 transition hover:opacity-70 hover:scale-110"><NavLink to="/pizza">PIZZA</NavLink></button></span>
            </div>
        </>
    )
}
