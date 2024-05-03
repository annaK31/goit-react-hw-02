import './App.css'
import Description from './components/description/Description'
import Options from './components/options/Options'
import Feedback from './components/feedback/Feedback'
import {useState, useEffect  } from 'react'
import Notification from './components/notification/Notification'

const state ={
	good: 0,
	neutral: 0,
	bad: 0
}

function App() {
  const [feedback, setFeedback ] = useState(()=>{
   const savedFeedback = localStorage.getItem("saved-feedback");
   console.log(savedFeedback)
   if(savedFeedback !== null){
    return JSON.parse(savedFeedback)
   }
    return state;
  })
  const updateFeedback = (feedbackType) => {
    setFeedback({...feedback, 
               [feedbackType]: feedback[feedbackType] + 1})
    }

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback  = Math.round((feedback.good / totalFeedback) * 100);

    const updateReset = () =>{
    setFeedback({good: 0, neutral: 0, bad: 0})
   }
   useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback))
  },  [feedback])
  
  return (
    <>
      <Description/>
      <Options onCaunt={updateFeedback} 
               totalFeedback={totalFeedback}
               onReset={updateReset}/>
      {totalFeedback > 0 ? 
  (<Feedback
          good={feedback.good}
          bad={feedback.bad} 
          neutral={feedback.neutral}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          />) : (<Notification>No feedback yet</Notification>)
          
      }
          </>
  )
}

export default App;
