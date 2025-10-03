"""
Copyright (c) 2025 Isaac Ip All rights reserved
Created by: Isaac Ip
Created on: Oct 2025
This program plays rock, paper, scissors.
"""

from microbit import *
import random

score = 0

display.clear()
display.show(Image.HAPPY)

while True:
    # shake the microbit
    if accelerometer.was_gesture("shake"):
        # chooses rock, paper or scissors
        randomNumber = random.randint(0, 2)

        if randomNumber == 0:
            # rock
            display.show(Image.SMALL_SQUARE)
            sleep(5000)
            display.show(Image.HAPPY)

        if randomNumber == 1:
            # paper
            display.show(Image.SQUARE)
            sleep(5000)
            display.show(Image.HAPPY)

        if randomNumber == 2:
            # scissors
            display.show(Image.SCISSORS)
            sleep(5000)
            display.show(Image.HAPPY)

    # button A = add 1 to score
    if button_a.was_pressed():
        score += 1
        sleep(5000)
        display.show(Image.HAPPY)

    # button B = show score
    if button_b.was_pressed():
        display.show(str(score))
        sleep(5000)
        display.show(Image.HAPPY)
