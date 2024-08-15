'use client'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import DropdownList from '@/components/UI/DropdownList/ui/DropdownList'


const Navigation = () => {

    const pathname = usePathname()
    

    const navlinks = [
        {label: 'About', path: '/about'},
        {label: 'Career', path: '/career'},
    ]

    const dropdownLinks = [
        {mainItem: {
                label: 'Market', path: '/market'
            },
            items: [
                {label: 'Market1', path: '/m1'},
                {label: 'Market2', path: '/m2'},
            ]
        },
        {mainItem: {
                label: 'Trade', path: '/trade'
            },
            items: [
                {label: 'Trade1', path: '/t1'},
                {label: 'Trade2', path: '/t2'},
            ]
        },
        {mainItem: {
                label: 'Earn', path: '/earn'
            },
            items: [
                {label: 'Earn1', path: '/e1'},
                {label: 'Earn2', path: '/e2'},
            ]
        }
    ]
    

    const classNameBuilder = (arg: string) => (
        cn(styles.link, 
            {[styles.link_active]: pathname === arg}
        )
    )

    
    return (
        <nav>
            <ul className={styles.navList}>
                {dropdownLinks.map((link) => (
                    <li key={link.mainItem.label}>
                        <DropdownList
                            className={classNameBuilder(link.mainItem.path)} 
                            mainItem={link.mainItem}
                            items={link.items}
                        />
                    </li>
                ))}
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