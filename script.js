document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('refresh-data').addEventListener('click', function() {
        fetchWaterBottleData();
    });

    document.getElementById('set-reminder').addEventListener('click', function() {
        setDrinkReminder();
    });

    function fetchWaterBottleData() {
        const mockData = {
            remainingWater: "750ml",
            waterTemperature: "22°C",
            phLevel: "7.0",
            waterQuality: "Good" // Change this to "Bad" to test the warning
        };

        document.getElementById('remaining-water').innerText = `Remaining Water: ${mockData.remainingWater}`;
        document.getElementById('water-temperature').innerText = `Water Temperature: ${mockData.waterTemperature}`;
        document.getElementById('ph-level').innerText = `pH Level: ${mockData.phLevel}`;
        document.getElementById('water-quality').innerText = `Water Quality: ${mockData.waterQuality}`;

        // Check water quality and show warning if necessary
        if (mockData.waterQuality === "Bad") {
            document.getElementById('water-warning').style.display = 'block';
        } else {
            document.getElementById('water-warning').style.display = 'none';
        }
    }

    function setDrinkReminder() {
        alert("Reminder set! You'll be notified to drink water every hour.");
        setInterval(() => {
            alert("Time to drink water! Stay hydrated!");
        }, 3600000);
    }
});