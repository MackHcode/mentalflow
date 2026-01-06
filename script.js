console.log("JavaScript file is linked successfully!");

// Therapist data
const therapists = [
    { name: "Dr. Sarah Johnson", city: "New York", zip: "10001", phone: "(212) 555-1234" },
    { name: "MindCare Therapy", city: "Brooklyn", zip: "11201", phone: "(718) 555-5678" },
    { name: "Dr. Alex Lee", city: "Queens", zip: "11375", phone: "(718) 555-9012" },
    { name: "Wellness Clinic", city: "New York", zip: "10002", phone: "(212) 555-3456" },
    {name: "Janell Supanich",city: "Akron", zip: "44310", phone: "(330) 302-6224"},
    {name: "Elizabeth Manzetti",city: "Twinsburg", zip: "44087", phone: "(234) 334-3812"},
    {name: "Jessica Acord",city: "Cleveland", zip: "44113", phone: "(440) 271-8121"},
    {name: "Alison MAck",city: "Cincinnati", zip: "45202", phone: "(513) 540-3888"},
    {name: "Leah R. Chacko",city: "Garfield Heights", zip: "44125", phone: "(440) 493-1556"},
    {name: "Janice Stenson",city: "Youngstown", zip: "44502", phone: "(937) 828-5166"},
    {name: "Carly Grabowski",city: "Brecksville", zip: "44141", phone: "(440) 276-5705"},
    {name: "Rachel N. Waggoner",city: "Lakewood", zip: "44107", phone: "(216) 238-5420"},
    


];

// Search button event
document.getElementById("searchBtn").addEventListener("click", () => {
    const input = document.getElementById("locationInput").value.toLowerCase().trim();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (input === "") {
        resultsDiv.innerHTML = `<p class="text-danger">Please enter a city or ZIP code.</p>`;
        return;
    }

    const filtered = therapists.filter(t => 
        t.city.toLowerCase().includes(input) || t.zip.includes(input)
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = `<p class="text-muted">No therapists found in your area.</p>`;
        return;
    }

    // Improved card design
    filtered.forEach(t => {
        resultsDiv.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm border-0 rounded-4" style="background-color: #e8f0f8;">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title fw-bold text-primary">${t.name}</h5>
                        <p class="card-text mb-1"><i class="bi bi-geo-alt-fill"></i> ${t.city}, ${t.zip}</p>
                        <p class="card-text mb-3"><i class="bi bi-telephone-fill"></i> ${t.phone}</p>
                        <a href="#" class="btn btn-outline-primary mt-auto">Contact</a>
                    </div>
                </div>
            </div>
        `;
    });
});
