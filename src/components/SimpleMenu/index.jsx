import React from 'react'
import './index.css'

function SimpleMenu() {
  return (
    <div className='oddiy'>
        <h2>"Oddiy menyu" Komponenti</h2>
        <nav>
            <ul className='li'>
                <li>
                    <a href="">Bosh sahifa</a>
                </li>
                <li>
                    <a href="">Biz haqimizda</a>
                </li>
                <li>
                    <a href="">Aloqa</a>
                </li>
                <li>
                    <a href="">Yangiliklar</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SimpleMenu