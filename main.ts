/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: sophie
 * Created on: Oct 2023
 * This program adds 1 point when a button pressed
*/

basic.clearScreen()
basic.showIcon(IconNames.Heart)
basic.pause(1000)

// variable
let numberOfClicks: number

input.onButtonPressed(Button.A, function () {
  numberOfClicks = numberOfClicks + 1
  basic.showNumber(numberOfClicks)
})

input.onButtonPressed(Button.B, function () {
  numberOfClicks = 0
  basic.showNumber(numberOfClicks)
})