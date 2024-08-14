'use client'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'


const Navigation = () => {

    const pathname = usePathname()
    

    const navlinks = [
        {label: 'About', path: '/about'},
        {label: 'Career', path: '/career'},
    ]
    

    const classNameBuilder = (arg: string) => (
        cn(styles.link, 
            {[styles.link_active]: pathname === arg}
        )
    )

    
    return (
        <nav>
            <ul>
                {navlinks.map((link) => (
                    <li key={link.label}>
                        <Link 
                            className={classNameBuilder(link.path)} 
                            href={link.path}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation