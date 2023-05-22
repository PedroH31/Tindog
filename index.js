import Dog from "./Dog.js"
import dogs from "./data.js"

function getNewDog(){
    const newDog = dogs.shift()
    return newDog ? new Dog(newDog) : {}
}

function render(){
    document.getElementById("main-container").innerHTML = currentDog.getDogHtml()
}

document.addEventListener("click", function(e){
    e.preventDefault()
    if (!currentDog.hasBeenLiked && !currentDog.hasBeenSwiped){
        if (e.target.dataset.cross){
            currentDog.swipeDog()
            if (dogs.length > 0){
                setTimeout(function(){
                currentDog = getNewDog()
                render()
                }, 1000)
            }
            
        }  
        else if (e.target.dataset.heart){
            currentDog.likeDog()
            if (dogs.length > 0){
                setTimeout(function(){
                currentDog = getNewDog()
                render()
                }, 1000)
            }
        }
        
    }
})

let currentDog = getNewDog()
render()






