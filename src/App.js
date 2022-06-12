import './scss/main.css';
import React,{useState,useEffect} from 'react';
import DividerDesk from './images/pattern-divider-desktop.svg';
import iconDice from './images/icon-dice.svg';


function Advice({newAdvice2}) {
  const [advice,newAdvice]= useState(null);
  
    useEffect(() => {
      fetch(`https://api.adviceslip.com/advice`)
      .then(res=>res.json())
      .then(newAdvice)
       .catch(console.error);
     },[newAdvice2])

  if(advice){

    setTimeout(()=>{
      document.getElementsByClassName("App")[0].classList.add("collapse");
      document.getElementsByClassName("header")[0].classList.add("hide");
      document.getElementsByClassName("main")[0].classList.add("hide");
      document.getElementsByClassName("divider")[0].classList.add("hide");
      document.getElementsByClassName("header")[0].classList.remove("show");
      document.getElementsByClassName("main")[0].classList.remove("show");
      document.getElementsByClassName("divider")[0].classList.remove("show");
    },1)
    

    setTimeout(()=>{
      document.getElementsByClassName("App")[0].classList.remove("collapse");
      document.getElementsByClassName("header")[0].classList.remove("hide");
      document.getElementsByClassName("main")[0].classList.remove("hide");
      document.getElementsByClassName("divider")[0].classList.remove("hide");
      document.getElementsByClassName("header")[0].classList.add("show");
      document.getElementsByClassName("main")[0].classList.add("show");
      document.getElementsByClassName("divider")[0].classList.add("show");
    },2000)


    return (
      <>
        <h3 className='header'>ADVICE #{advice.slip.id}</h3>
        <h1 className='main'>"{advice.slip.advice}"</h1>
      </>
    );
  }

  return null
  
}

function App(){
  const[advice2,newAdvice2]=useState(null)
  return(
    <div className="App">
        <Advice newAdvice2={advice2}/>
        <img className='divider' src={DividerDesk} alt='Divider'/>
        <div className='diceContainer' onClick={()=>newAdvice2(Math.random)}>
          <img className='dice' src={iconDice} alt='Dice'/>
        </div>
        
    </div>  
  )
 
}

export default App;
