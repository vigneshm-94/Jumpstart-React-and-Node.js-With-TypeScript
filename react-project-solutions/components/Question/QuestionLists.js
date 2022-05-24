import React from 'react'
import {CardContainer,OptionContainer} from './QuestionLists.styled'
import QuestionData from "../../data/sample.json"
const QuestionLists = () => {
  return (
    <div>
    <h3>Questions:</h3>
    { QuestionData?.length=== 0 && 'no question found'}
      {
        QuestionData?.length > 0 &&
        QuestionData?.map((Question,index) =>{
          
          return (
            <CardContainer>
           <h4>{Question.question}</h4>
           {
          Question.options.map((option,index) =>{
            return (
              <OptionContainer>
              <input type="radio" id={option.value} value={option.text}/>
              <label>{option.text}</label>
              
              </OptionContainer>
            )
          })
           }
           
            </CardContainer>
            

          )
        })
      }
   </div>
    
  )
}

export default QuestionLists