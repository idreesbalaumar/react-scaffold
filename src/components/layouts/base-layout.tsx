import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const BaseLayout = (props: Props) => {
  return (
    <div>
       <aside>side bar</aside>
        <section className='overflow-auto' >
        <Outlet/>
        </section>
        
    </div>
  )
}

export default BaseLayout