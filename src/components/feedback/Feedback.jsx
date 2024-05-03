import css from './Feedback.module.css'


const Feedback = ({good, neutral, bad, totalFeedback, positiveFeedback }) =>{
return(
 <ul className={css.result_list}>
   <li>
       <span className={css.rezult_span}>Good:&nbsp;</span>
       <span className={css.rezult_span}>{good}</span>
   </li>
   <li>
       <span className={css.rezult_span}>Neutral:&nbsp;</span>
       <span className={css.rezult_span} >{neutral}</span>
   </li>
   <li>
       <span className={css.rezult_span} >Bad:&nbsp;</span>
       <span  className={css.rezult_span}>{bad}</span>
   </li>
   <li>
       <span className={css.rezult_span} >Total:&nbsp;</span>
       <span  className={css.rezult_span}>{totalFeedback}</span>
   </li>
   <li>
       <span className={css.rezult_span} >Positive:&nbsp;</span>
       <span  className={css.rezult_span}>{positiveFeedback}%</span>
   </li>
 </ul>
)
}

export default Feedback;