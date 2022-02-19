import React from 'react'
import { useHistory} from "react-router-dom";

function Aboutus() {
  let history = useHistory();
  history.push("./aboutus");
  return (
    <div>
              <div className="position-absolute top-50 start-50 translate-middle loginBody aboutus">
              <div> 
        <h1 className='h1'> About Us: </h1>
        <br/>
        <br/>
         <div className="aboutback">
            FlexiQuiz was founded in 2021. As a distributed team that had built software used by some of the world's largest companies, we knew how hard it was to foster a team culture when you don't share an office or see each other regularly. Thus, FlexiQuiz was born, to adjust to the new challenges imposed by the outbreak of the virus worldwide. FlexiQuiz was born to be a flexible platform for all types of scholars trying to quench their thirst for knowledge.
            Since then, tens of thousands of team ice breaker quizzes have been run using FlexiQuiz - bringing teams together all over the world. We're proud to be an independent, bootstrapped company that puts its customers first.
     
        </div>
        </div>



              </div>
    </div>
  )
}

export default Aboutus
