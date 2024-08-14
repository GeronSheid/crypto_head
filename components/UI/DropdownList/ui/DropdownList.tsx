'use client'
import React, { FC } from 'react'
import type { IDropdownList } from '../schemas/interface'
import Link from 'next/link'
import styles from './style.module.scss';
import { motion } from 'framer-motion';

// const mockData: IDropdownList = {
//     isLoading: false,
//     isActive: false,
//     items: [
//         {label: '1', path: '/1'},
//         {label: '2', path: '/2'},
//         {label: '3', path: '/3'},
//     ]
// }

const DropdownList: React.FC<IDropdownList> = ({isActive, isLoading, items, mainItem}) => {
    
    return (
        <div className={styles.list} role='dropdown'>
            <Link href={mainItem.path}>{mainItem.label}</Link>
            <motion.ul>
                
            </motion.ul>
            {/* {isActive
                ?
                <ul>
                    {items.map(item => (
                        <li key={item.label}>
                            <Link href={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                :
                null
            } */}
        </div>
    )
}

export default DropdownList