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
    //rock
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }
    if (randomNumber == 1) {
        //paper
        basic.showIcon(IconNames.Square)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }
    if (randomNumber == 2) {
        //scissors
        basic.showIcon(IconNames.Scissors)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }
})

input.onButtonPressed(Button.A, function () {
    //add 1 to score if you won
    score += 1
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    //show your score 
    basic.showNumber(score)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})