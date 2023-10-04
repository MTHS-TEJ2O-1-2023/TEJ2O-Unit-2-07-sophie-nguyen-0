"""
Created by: Sophie
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

display.clear()
display.show(Image.HEART)

# variable
number_of_clicks = 0

while True:
    if button_a.is_pressed():
        number_of_clicks = number_of_clicks + 1
        display.show(str(number_of_clicks))
    if button_b.is_pressed():
        number_of_clicks = 0
        display.show(str(number_of_clicks))
