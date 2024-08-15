'use client'
import React, { useState } from 'react'
import type { IDropdownList } from '../schemas/interface'
import Link from 'next/link'
import styles from './style.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames'


const DropdownList: React.FC<IDropdownList> = ({ isLoading, items, mainItem, className }) => {

    const [isActive, setAcitve] = useState(false);
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        setAcitve(!isActive)
    };

    const variants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: 50, opacity: 0 }
    }

    const btnCS = cn(styles.btn, {[styles.btn_active]: isActive})

    return (
        <div className={styles.listWrap} role='dropdown'>
            <div className={cn(styles.mainItem, className)}>
                <Link href={mainItem.path}>{mainItem.label}</Link>
                <button className={btnCS} onClick={handleClick}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1L5 5L9.5 1" stroke="#CFD3DA" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <AnimatePresence>
                {isActive
                    ?
                    <motion.ul
                        className={styles.list}

                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        transition={{ duration: 0.2 }}
                        variants={variants}
                    >
                        {items.map(item => (
                            <li key={item.label}>
                                <Link href={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </motion.ul>
                    :
                    null
                }
            </AnimatePresence>
        </div>
    )
}

export default DropdownList