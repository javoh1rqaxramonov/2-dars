import React from 'react'
import './index.css'

function SeasonColors() {
  return (
    <div className='fasl'>
        <h2>"Fasl ranglari" Komponenti</h2>
        <div className="frang">
            <div style={{width:60,height:60,background:"green",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <h3>Bahor</h3>
            </div>
            <div style={{width:60,height:60,background:"yellow",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <h3>Yoz</h3>
            </div>
            <div style={{width:60,height:60,background:"orange",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <h3>Yoz</h3>
            </div>
            <div style={{width:60,height:60,background:"lightblue",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <h3>Qish</h3>
            </div>
        </div>
    </div>
  )
}

export default SeasonColors