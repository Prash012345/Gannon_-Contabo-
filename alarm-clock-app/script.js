// Constant Variables
const alarmInput = document.getElementById('alarm-input');
const setAlarmButton = document.getElementById('set-alarm');
const stopAlarmButton = document.getElementById('stop-alarm');
const alarmTimeDisplay = document.getElementById('alarm-time');
const alarmSound = document.getElementById('alarm-sound');
const alarmNotifDisplay = document.getElementById('alarm-notif');
let alarmTimeout;

// Set Alarm Button Fucntion
setAlarmButton.addEventListener('click', () => {
    const alarmTime = alarmInput.value;
    if (!alarmTime) {
        alert('Please enter a valid alarm time.');
        return;
    }

    const now = new Date();
    const [hours, minutes] = alarmTime.split(':');
    const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

    const timeUntilAlarm = alarmDate - now;

    if (timeUntilAlarm < 0) {
        alert('Please select a future time for the alarm.');
        return;
    }

    setAlarmButton.style.display = 'none';
    stopAlarmButton.style.display = 'block';

    alarmTimeDisplay.innerText = `Alarm set for ${alarmTime}`;

    alarmTimeout = setTimeout(() => {
        playAlarmSound();
        alarmNotifDisplay.innerText = 'Alarm! Tme to wake up! Stop the alarm Now!'
    }, timeUntilAlarm);
});

// Stop Alarm Click Event
stopAlarmButton.addEventListener('click', () => {
    stopAlarm();
});

// Alarm Sound Function
function playAlarmSound() {
    alarmSound.play();
}

// Stop Alarm Button Function
function stopAlarm() {
    clearTimeout(alarmTimeout);
    setAlarmButton.style.display = 'block';
    stopAlarmButton.style.display = 'none';
    alarmTimeDisplay.innerText = '';
    alarmNotifDisplay.innerText = '';
    alarmInput.value = '';
    alarmSound.pause();
    alarmSound.currentTime = 0;
}