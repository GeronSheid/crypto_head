import Navigation from '@/components/Navigation/ui/Navigation'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {





  return (
    <header>
        <div className={cn('container')}>
            <div>
                <Link href='#'>
                    <Image 
                        className=''
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
        </div>
    </header>
  )
}

export default Header