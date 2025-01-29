document.addEventListener("DOMContentLoaded", () => {
    const packagesContainer = document.getElementById("packages-container");

    function fetchPackages() {
        fetch("http://localhost:3000/packages") // Fetch from Admin Panel
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(packages => {
                packagesContainer.innerHTML = ""; // Clear old content

                if (packages.length === 0) {
                    packagesContainer.innerHTML = "<p>No packages available.</p>";
                    return;
                }

                packages.forEach(pkg => {
                    const packageCard = document.createElement("div");
                    packageCard.classList.add("package-card");

                    packageCard.innerHTML = `
                        <h3>${pkg.name}</h3>
                        <p>${pkg.details}</p>
                        <p class="price">₹${pkg.price}</p>
                        <a href="#" class="btn">View Details</a>
                    `;

                    packagesContainer.appendChild(packageCard);
                });
            })
            .catch(error => {
                console.error("Error fetching packages:", error);
                packagesContainer.innerHTML = "<p>Failed to load packages. Please try again later.</p>";
            });
    }

    fetchPackages(); // Load packages initially

    // Auto-refresh packages every 30 seconds
    setInterval(fetchPackages, 30000);
});
