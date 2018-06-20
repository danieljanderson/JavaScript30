var myClock = (function(){
  var functionClock = function(){
  const secondHand = document.querySelector('.second-hand')
  const minHand=document.querySelector('.min-hand')
  const hourHand=document.querySelector('.hour-hand')
    function setDate(){
      const now = new Date()
      const seconds = now.getSeconds()
      const secondsDegrees = ((seconds / 60) * 360)+90
      if (secondsDegrees===300){
        secondHand.style.transition= 0
      }
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`
      const mins = now.getMinutes()
      const minsDegrees = ((mins / 60) * 360)+90
      minHand.style.transform = `rotate(${minsDegrees}deg)`
      const hour = now.getHours()
      const hourDegrees = ((hour / 12) * 360)+90
      hourHand.style.transform = `rotate(${hourDegrees}deg)`
      console.log(seconds)
      console.log(mins)
      console.log(hour)
      if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
      else secondHand.style.transition = 'all 0.05s';
      if (minsDegrees === 90) minHand.style.transition = 'all 0s';
      else minHand.style.transition = 'all 0.1s';
    }
  setInterval(setDate,1000)
  }






var module ={
  'functionClock':functionClock
}
return module
})()

myClock.functionClock()
