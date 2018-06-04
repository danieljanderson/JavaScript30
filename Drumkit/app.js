(function(){
  function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //stops the function from running all together
    if(!audio)return
    // this will allow you to play sounds multiple times.
      audio.currentTime = 0
      audio.play()
      key.classList.add('playing')

    }
  function removeTransition(e){
    //skip it if it's not a transform
    if(e.propertyName !=='transform')return
      this.classList.remove('playing')
      return

    }
  const keys= document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend',removeTransition))
  window.addEventListener('keydown',playSound)
}())
