import React from 'react'
import './index.css'

function ColorList() {
  return (
    <div className='color'>
        <h2> "Ranglar ro'yxati" Komponenti</h2>
        <div className="rang">
            <div style={{width:60,height:60,background:"red",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <h3>Qizil</h3>
            </div>
            <div style={{width:60,height:60,background:"green",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <h3>Yashil</h3>
            </div>
            <div style={{width:60,height:60,background:"blue",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <h3>Moviy</h3>
            </div>
            <div style={{width:60,height:60,background:"yellow",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <h3>Sariq </h3>
            </div>
            <div style={{width:60,height:60,background:"maroon",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <h3>T qizi</h3>
            </div>
        </div>
    </div>
  )
}

export default ColorList