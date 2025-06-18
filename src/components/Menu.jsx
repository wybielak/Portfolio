import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Menu({ animSwitch, responsive = false }) {
    const url = useLocation()
    const currentPath = location.pathname

    return (
        <>
            <div className={`w-full ${responsive ? 'hidden md:flex' : 'flex'} flex-col md:flex-row flex-nowrap items-center justify-around ${animSwitch ? 'fade-in-slower-anim' : 'fade-in-slower-anim2'}`}>
                {currentPath !== "/" && (
                    <span>
                        <button type="button" className="text-3xl tracking-widest transition hover:opacity-70 hover:scale-110">
                            <NavLink to="/">HOME</NavLink>
                        </button>
                    </span>
                )}
                {currentPath !== "/dev" && (
                    <span>
                        <button type="button" className="text-3xl tracking-widest mt-6 md:m-0 transition hover:opacity-70 hover:scale-110">
                            <NavLink to="/dev">IT</NavLink>
                        </button>
                    </span>
                )}
                {currentPath !== "/workshop" && (
                    <span>
                        <button type="button" className="text-3xl tracking-widest mt-6 md:m-0 transition hover:opacity-70 hover:scale-110">
                            <NavLink to="/workshop">WORKSHOP</NavLink>
                        </button>
                    </span>
                )}
                {currentPath !== "/pizza" && (
                    <span>
                        <button type="button" className="text-3xl tracking-widest mt-6 md:m-0 transition hover:opacity-70 hover:scale-110">
                            <NavLink to="/pizza">PIZZA</NavLink>
                        </button>
                    </span>
                )}
            </div>

        </>
    )
}
