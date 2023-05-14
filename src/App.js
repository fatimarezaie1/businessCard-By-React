import  React from 'react'
import style from './style.css'
import Picture from './picture'
import Btn from './btns'
import Content from './content'
import Footer from './footer'
import Data from './data'
export default function App(){
    const contentElement = Data.map( text =>{
        return <Content title ={text.title} matan={text.matan}/>
    }  )

    return(
  

        <div className='container'>
             <Picture />
             <Btn />
             {contentElement }
             <Footer />
        </div>

       
    )
}