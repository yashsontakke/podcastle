'use client'
import React from 'react'
import { sidebarLinks } from '../../constants'
import Link from 'next/link';
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import { clsx } from 'clsx';
// import cn from '@lib/utils'

const LeftSidebar = () => {

    const pathname = usePathname();
    console.log(pathname);

    return (

        <section>
            <nav className='flex flex-col gap-6'>
            <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
                <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
                    <h1 className='text-white-1 font-extrabold max-lg:hidden'>Podcastle</h1>
                </Link>
                {sidebarLinks.map(({ imgURL, route, label }) => {
                   
                    const isActive = route === pathname ;
                    return (
                        <Link className={clsx('flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start',{'bg-nav-focus border-r-4 border-orange-1': isActive})} href={route} key={label}>
                            <Image src={imgURL} width={24} height={24} alt={label} />
                            <p className='text-white-1' >{label}</p>
                        </Link>
                    )
                })}
            </nav>
        </section>

    )
}

export default LeftSidebar