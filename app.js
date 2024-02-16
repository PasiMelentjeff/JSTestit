const computerChoiceDisplay=document.getElementById("computer-choice")
const userChoiceDisplay=document.getElementById("user-choice")
const resusltDisplay =document.getElementById('result')
const bossibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let result


bossibleChoices.forEach(erkki => erkki.addEventListener('click',(k) => {

   

   userChoice= k.target.id


userChoiceDisplay.innerHTML=userChoice

  gnerateComputerChoice()
   
}))

function gnerateComputerChoice(){

const randomNumber =Math.floor(Math.random()*3)+1

console.log(randomNumber)

if (randomNumber===1){

computerChoice='rock'

}

if (randomNumber===2){

   computerChoice='scissors'
   
   }
   if (randomNumber===3){

      computerChoice='paper'
      
      }
      

      computerChoiceDisplay.innerHTML=computerChoice
      GetResult()

   }

   function GetResult(){


if (computerChoice===userChoice){

result='It is a draw!'
}

   

   if (computerChoice==='rock'&&userChoice=='paper'){

result='You win!!!'


   }

   if (computerChoice==='rock'&&userChoice=='scissors'){

      result='You lose!'
      
      
         }

         if (computerChoice==='scissors'&&userChoice=='paper'){

            result='You lose!'
            
            
               }

               if (computerChoice==='scissors'&&userChoice=='rock'){

                  result='You win!!!'
                  
                  
                     }
      
                     if (computerChoice==='paper'&&userChoice=='scissors'){

                        result='You win!!!'
                        
                        
                           }
      
                           if (computerChoice==='paper'&&userChoice=='rock'){

                              result='You lose!'
                              
                              
                                 }
      
                        resusltDisplay.innerHTML=result
      
                  }