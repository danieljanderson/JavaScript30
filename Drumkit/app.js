(function(){
    window.addEventListener('keydown',function(e){
      const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
      console.log(audio)
      //stops the function from running all together
      if(!audio)return
      audio.play()
      })
}())
