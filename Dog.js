class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    swipeDog(){
        this.hasBeenSwiped = true
        document.getElementById("main-container").innerHTML = `
            <div class="badge-container">
                <img src="images/badge-nope.png" class="badge">
            </div>
            ${this.getDogHtml()}
        `
    }
    
    likeDog(){
        this.hasBeenLiked = true
        document.getElementById("main-container").innerHTML = `
            <div class="badge-container">
                <img src="images/badge-like.png" class="badge">
            </div>
            ${this.getDogHtml()}
        ` 
    }
    
    getDogHtml(){
        const { name, avatar, age, bio } = this
        document.getElementById("main-container").style.backgroundImage = `url(${avatar})`
        return ` 
            <h2>${name}, ${age}</h2>
            <h3>${bio}</h3>
        `
    }
}

export default Dog