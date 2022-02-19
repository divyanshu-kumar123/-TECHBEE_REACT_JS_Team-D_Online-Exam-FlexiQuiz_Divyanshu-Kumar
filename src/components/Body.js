import React from 'react'
import Buttons from './Buttons'
export default function Body() {
  return (
    <div>

        <div className="container">
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className='h1'>FlexiQuiz</h1>
                <h2 className='h2'>“If you don’t do your revision properly, you know what’ll happen? YOU SHALL NOT PASS!”</h2>
                <Buttons/>
                <br/>
                </div>
        </div>
      
    </div>
  )
}
