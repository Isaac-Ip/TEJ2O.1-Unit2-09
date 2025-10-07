/* Copyright (c) 2025 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Oct 2025
 * This program plays rock, paper, scissors.
*/

let randomNumber: number
let score = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//shake the microbit
input.isGesture(Gesture.Shake)


input.onGesture(Gesture.Shake, function() {
    //chooses rock, paper or scissors
    randomNumber = randint(0, 2) 
    
    if (randomNumber == 0) {
        //rock
        basic.showIcon(IconNames.SmallSquare)
    }
    if (randomNumber == 1) {
        //paper
        basic.showIcon(IconNames.Square)
    }
    if (randomNumber == 2) {
        //scissors
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.A, function () {
    //add 1 to score if you won
    score += 1
    basic.showIcon(IconNames.Yes)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    //show your score 
    basic.showString("Score: ")
    basic.showNumber(score)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})