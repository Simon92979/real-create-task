controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 2 2 2 2 1 . . . . . 
        . . . . 1 2 2 2 2 2 2 1 . . . . 
        . . . . 1 2 2 2 2 2 2 1 . . . . 
        . . . . . 1 2 2 2 2 1 . . . . . 
        . . . . . 1 2 2 2 2 1 . . . . . 
        . . . . . . 1 2 2 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 100)
})
let enemyShip: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 2 1 1 2 . . . . . . 
    . . . . . 2 1 1 1 1 2 . . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . 2 1 1 1 1 1 1 1 1 2 . . . 
    . . . 2 1 1 1 2 2 1 1 1 2 . . . 
    . . 2 1 1 1 1 2 2 1 1 1 1 2 . . 
    . . 2 1 1 1 2 . . 2 1 1 1 2 . . 
    . 2 1 1 1 1 2 . . 2 1 1 1 1 2 . 
    . 2 1 1 1 1 2 . . 2 1 1 1 1 2 . 
    2 1 1 1 1 2 . . . . 2 1 1 1 1 2 
    2 1 1 1 1 2 . . . . 2 1 1 1 1 2 
    2 1 1 1 2 . . . . . . 2 1 1 1 2 
    . 2 2 2 . . . . . . . . 2 2 2 . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    enemyShip = sprites.create(img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    enemyShip.x = scene.screenWidth()
    enemyShip.vx = -20
    enemyShip.y = randint(10, scene.screenWidth() - 1)
})
