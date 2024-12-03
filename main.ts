let I5 = 0
let I4 = 0
let I3 = 0
let I2 = 0
let I1 = 0
basic.showIcon(IconNames.Angry)
basic.forever(function () {
    I1 = pins.digitalReadPin(DigitalPin.P16)
    I2 = pins.digitalReadPin(DigitalPin.P15)
    I3 = pins.digitalReadPin(DigitalPin.P14)
    I4 = pins.digitalReadPin(DigitalPin.P13)
    I5 = pins.digitalReadPin(DigitalPin.P12)
    if (I1 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, 200)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
    } else if (I2 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 200)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
    } else if (I3 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
    } else if (I4 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 200)
    } else if (I5 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, 200)
    } else {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, 200)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, 200)
    }
})
