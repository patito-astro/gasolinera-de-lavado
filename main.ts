input.onButtonPressed(Button.A, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 20)
    neZha.setMotorSpeed(neZha.MotorList.M2, -20)
    basic.pause(100)
    neZha.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 20)
    basic.pause(100)
    neZha.stopAllMotor()
})
