import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function ResponsiveMenu() {

    return (
        <>
            <div className='bg-gradient-darkbrown-olivegreen w-screen h-screen flex flex-col items-center justify-center'>
                <div className='w-full flex flex-col flex-nowrap items-center justify-around fade-in-slower-anim2'>

                    <span>
                        <button type="button" className="text-3xl tracking-widest transition hover:opacity-70 hover:scale-110">
                            <NavLink to="/">HOME</NavLink>
                        </button>
                    </span>

                    <span>
                        <button type="button" className="text-3xl tracking-widest mt-8 transition hover:opacity-70 hover:scale-110">
                            <NavLink to="/dev">DEV</NavLink>
                        </button>
                    </span>

                    <span>
                        <button type="button" className="text-3xl tracking-widest mt-8 transition hover:opacity-70 hover:scale-110">
                            <NavLink to="/workshop">WORKSHOP</NavLink>
                        </button>
                    </span>

                    <span>
                        <button type="button" className="text-3xl tracking-widest mt-8 transition hover:opacity-70 hover:scale-110">
                            <NavLink to="/pizza">PIZZA</NavLink>
                        </button>
                    </span>

                </div>
            </div>

        </>
    )
}
