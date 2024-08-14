const Clock = {
    hourHand: document.querySelector(".hour-hand"),
    minuteHand: document.querySelector(".minute-hand"),
    secondHand: document.querySelector(".second-hand"),
    digitalClock: document.querySelector(".digital-clock"),

    update: function() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondDegrees = ((seconds / 60) * 360) + 90;
        this.secondHand.style.transform = `rotate(${secondDegrees}deg)`;

        const minutes = now.getMinutes();
        const minuteDegrees = ((minutes / 60) * 360) + 90;
        this.minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

        const hours = now.getHours();
        const hourDegrees = ((hours / 60) * 360) + 90;
        this.hourHand.style.transform = `rotate(${hourDegrees}deg)`;

        this.digitalClock.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },

    init: function(){
        this.update();
        setInterval(function()
        {
            Clock.update();
        }, 1000);
    }
};

Clock.init();

