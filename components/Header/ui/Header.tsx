import { Navigation } from '@/components/Navigation'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'

const Header = () => {





    return (
        <header className={styles.header}>
            <div className={cn('container', styles.header__container)}>
                    <Link className={styles.logoLink} href='#'>
                        <Image 
                            src={'/images/logo.svg'}
                            height={24}
                            width={150}
                            alt='logo' 
                        />
                    </Link>
                    <Navigation/>
                    <div>
                        <button>
                            Log In
                        </button>
                        <button>
                            Sign Up
                        </button>
                    </div>
                </div>
        </header>
    )
}

export default Header