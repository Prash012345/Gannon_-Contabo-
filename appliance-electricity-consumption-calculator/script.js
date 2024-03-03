function calculateElectricity(event) {
    event.preventDefault();

    var applianceName = document.getElementById('applianceName').value;
    var appliancePower = parseFloat(document.getElementById('appliancePower').value);
    var powerUnit = document.getElementById('powerUnit').value;
    var usage = parseFloat(document.getElementById('usage').value);
    var usageUnit = document.getElementById('usageUnit').value;
    var electricityPrice = parseFloat(document.getElementById('electricityPrice').value);

    if (powerUnit === 'w') {
        appliancePower /= 1000;
    }

    if (usageUnit === 'mpDay') {
        usage *= 60;
    }

    var electricityConsumption = appliancePower * usage;

    var totalCost = electricityConsumption * electricityPrice;

    var resultMessage = 'Appliance Name: ' + applianceName + '<br>' +
                        'Electricity Consumption: ' + electricityConsumption.toFixed(2) + ' kWh per day<br>' +
                        'Total Cost: $' + totalCost.toFixed(2) + ' per day';

    document.querySelector('.result').style.display = "";
    document.getElementById('resultMessage').innerHTML = resultMessage;
}