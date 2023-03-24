import Link from 'next/link'
import React from 'react'

export default function MenuItem(menu:Menu) {
  return (
    <div>
        <Link href={menu.url} className='mx-4 lg:mx-6 hover:text-amber-600'>
            <menu.Icon className="text-2xl sm:hidden mx-4" />
            <p className='hidden sm:inline my-2 text-sm'>{menu.title}</p>  
        </Link>
    </div>
  )
}

type Menu = {
  title:string;
  url:string;
  Icon:any;
}
