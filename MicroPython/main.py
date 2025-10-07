"""
Copyright (c) 2025 Isaac Ip All rights reserved
Created by: Isaac Ip
Created on: Oct 2025
This program plays rock, paper, scissors.
"""

from microbit import *
import random

score = 0

# clear screen and show happy face
display.clear()
display.show(Image.HAPPY)

while True:
    # shake gesture = play rock, paper, scissors
    if accelerometer.was_gesture("shake"):
        randomNumber = random.randint(0, 2)

        if randomNumber == 0:
            # rock
            display.show(Image.SMALL_SQUARE)
        if randomNumber == 1:
            # paper
            display.show(Image.SQUARE)
        if randomNumber == 2:
            # scissors
            display.show(Image.SCISSORS)

        sleep(5000)
        display.show(Image.HAPPY)

    # button A = add 1 to score and show check mark
    if button_a.was_pressed():
        score += 1
        display.show(Image.YES)
        sleep(5000)
        display.show(Image.HAPPY)

    # button B = show score
    if button_b.was_pressed():
        display.scroll("Score: ")
        display.show(str(score))
        sleep(5000)
        display.show(Image.HAPPY)
