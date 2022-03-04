var monster = $('#monster')
console.log(monster)

function show() {
    monster.fadeIn(2000)
    //monster.slideDown()
}

function hide() {
    monster.fadeIn(1000)
}

function moveRight() {
    monster.animate({left: 300}, 300)
}

function moveLeft() {
    monster.animate({left: 0}, 300)
}

function moveUp() {
    monster.animate({top: 50}, 300)
}

function moveDown() {
    monster.animate({top: 300}, 300)
}

function moveSequence() {
}