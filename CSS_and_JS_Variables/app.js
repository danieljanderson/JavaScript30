var cssVariables = (function(){
    var functionVariables = function(){
        const inputs = document.querySelectorAll('.controls input')
        function handleUpdate(){
            const suffix = this.dataset.sizing || ''
            document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
        }
     inputs.forEach(input => input.addEventListener('change',handleUpdate))
     inputs.forEach(input => input.addEventListener('mousemove',handleUpdate))
    }
var module ={
    'functionVariables':functionVariables
}
return module
})()
cssVariables.functionVariables()