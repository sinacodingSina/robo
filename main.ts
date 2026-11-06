bluetooth.onBluetoothConnected(function () {
    bluetooth.uartWriteNumber(7)
    keyboard.releaseKeys()
    keyboard.sendString("w")
    Roboter.driveTime(1000, Roboter.Dir.CW)
    keyboard.sendString("S")
    Roboter.driveTime(1000, Roboter.Dir.CCW)
    keyboard.sendString("D")
    Roboter.turnRight90()
    keyboard.sendString("A")
    Roboter.turnLeft90()
})
basic.setLedColor(0x00ff00)
while (keyboard.isEnabled()) {
    bluetooth.setTransmitPower(7)
    keyboard.startKeyboardService()
}
