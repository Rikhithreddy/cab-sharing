const rides = [
    { name: "Alice", destination: "Airport", date: "2024-10-29", time: "10:00 AM", hostel: "A", contact: "123-456-7890" },
    { name: "Bob", destination: "Railway Station", date: "2024-10-29", time: "11:00 AM", hostel: "B", contact: "987-654-3210" },
    { name: "Charlie", destination: "City Center", date: "2024-10-30", time: "2:00 PM", hostel: "C", contact: "456-789-1230" }
];

function displayRides(ridesToDisplay) {
    const rideList = document.getElementById("rideList");
    rideList.innerHTML = ""; 

    ridesToDisplay.forEach((ride) => {
        const rideCard = document.createElement("div");
        rideCard.classList.add("card");

        rideCard.innerHTML = `
            <div class="card-details">
                <h3>${ride.name}</h3>
                <p><strong>Destination:</strong> ${ride.destination}</p>
                <p><strong>Date:</strong> ${ride.date}</p>
                <p><strong>Time:</strong> ${ride.time}</p>
                <p><strong>Hostel:</strong> ${ride.hostel}</p>
                <p><strong>Contact:</strong> ${ride.contact}</p>
            </div>
            <button>Join Ride</button>
        `;
        rideList.appendChild(rideCard);
    });
}

function filterRides() {
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const filteredRides = rides.filter((ride) => {
        return (!destination || ride.destination === destination) &&
            (!date || ride.date === date) &&
            (!time || ride.time === time);
    });

    displayRides(filteredRides);
}

displayRides(rides);
