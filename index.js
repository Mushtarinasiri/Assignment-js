let username = prompt("Enter username:");
let password = prompt("Enter password:");
let role = "";
let access = "";

if ((username === "admin" || username === "guest") && password === "0000") {

    if (username === "admin") {
        role = "admin";
        access = "full";
    } else {
        role = "guest";
        access = "limited";
    }

    alert("Login successful! Access level: " + access);

} else {
    alert("Invalid login");
    throw new Error("Stop program");
}

let name = prompt("Enter your name:");
let movieType = prompt("Choose movie type (standard / 3D / IMAX):");
let tickets = Number(prompt("Enter number of tickets:"));

let pricePerTicket = 0;

switch (movieType.toLowerCase()) {
    case "standard":
        pricePerTicket = 5; 
        break;
    case "3d":
        pricePerTicket = 7; 
        break;
    case "imax":
        pricePerTicket = 10; 
        break;
    default:
        alert("Invalid movie type");
        throw new Error("Stop program");
}

let ticketCost = tickets * pricePerTicket;

let snackChoice = prompt("Do you want snacks? (yes/no)");
let snackCost = 0;

if (snackChoice.toLowerCase() === "yes") {
    snackCost = tickets * 3; 
}

let discount = 0;

if (tickets > 3) { 
    discount = (ticketCost + snackCost) * 15%; 
}

let total = ticketCost + snackCost - discount;

let people = Number(prompt("Split between how many people? (1 / 2 / 4):"));
let feeType = prompt("Service fee (none / small / high):");

let feePercent = 0;

switch (feeType.toLowerCase()) {
    case "none":
        feePercent = 0;
        break;
    case "small":
        feePercent = 5; 
        break;
    case "high":
        feePercent = 10; 
        break;
    default:
        alert("Invalid service fee");
        throw new Error("Stop program");
}

let serviceFee = total * feePercent;
let finalTotal = total + serviceFee;
let perPerson = finalTotal / people;

alert(
    "Hello " + name + "!\n\n" +
    "You selected " + movieType.toUpperCase() + " movie.\n\n" +
    "Tickets: " + tickets + " × $" + pricePerTicket + " = $" + ticketCost.toFixed(2) + "\n" +
    "Snacks: $" + snackCost.toFixed(2) + "\n" +
    "Discount: $" + discount.toFixed(2) + "\n\n" +
    "Service Fee: $" + serviceFee.toFixed(2) + "\n" +
    "Total: $" + finalTotal.toFixed(2) + "\n\n" +
    "Each person pays: $" + perPerson.toFixed(2)
);