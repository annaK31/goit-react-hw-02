import css from './Options.module.css'


const Options = ( {onCaunt, totalFeedback, onReset} ) =>{

return (
    <ul className={css.btn_list}>
        <li><button  onClick={() =>{onCaunt("good")}}  className={css.btn_option} type="button" >Good</button></li>
        <li><button   onClick={() =>{onCaunt("neutral")}} className={css.btn_option}  type="button" >Neutral</button></li>
        <li><button   onClick={() =>{onCaunt("bad")}}  className={css.btn_option}  type="button" >Bad</button></li>
        {totalFeedback > 0 && (
        <button  onClick={onReset}   className={css.btn_option} type="button">
          Reset
        </button>
      )}
    </ul>
)
}

export default Options;