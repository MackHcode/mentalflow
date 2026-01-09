console.log("JavaScript file is linked successfully!");

// Therapist data
const therapists = [
   
    {name: "Janell Supanich",city: "Akron", zip: "44310", phone: "(330) 302-6224",link:"https://www.psychologytoday.com/us/therapists/janell-supanich-akron-oh/1314725"},
    {name: "Joseph White",city: "Akron", zip: "44310", phone: "(216) 369-6315",link:"https://www.psychologytoday.com/us/therapists/joseph-white-akron-oh/816741"},
    {name: "Janaya Narvaez",city: "Akron", zip: "44310", phone: "(380) 666-3122",link:"https://www.psychologytoday.com/us/therapists/janaya-narvaez-columbus-oh/1431004"},
    {name: "Elizabeth Manzetti",city: "Twinsburg", zip: "44087", phone: "(234) 334-3812",link:"https://www.psychologytoday.com/us/therapists/elizabeth-manzetti-twinsburg-oh/401167"},
    {name: "Rich Weisberg",city: "Twinsburg", zip: "44087", phone: "(216) 291-1010",link:"https://www.psychologytoday.com/us/therapists/rich-weisberg-twinsburg-oh/32832"},
    {name: "Victoria Riola",city: "Twinsburg", zip: "44087", phone: "(330) 921-4577",link:"https://www.psychologytoday.com/us/therapists/victoria-riola-twinsburg-oh/390503"},
    {name: "Jessica Acord",city: "Cleveland", zip: "44113", phone: "(440) 271-8121",link:"https://www.psychologytoday.com/us/therapists/jessica-acord-cleveland-oh/1161070"},
    {name: "Aaliyah Owens",city: "Cleveland", zip: "44113", phone: "(440) 294-8502",link:"https://www.psychologytoday.com/us/therapists/aaliyah-owens-rocky-river-oh/1162199"},
    {name: "Brooke H Kroto",city: "Cleveland", zip: "44113", phone: "(216) 245-3675",link:"https://www.psychologytoday.com/us/therapists/brooke-h-kroto-richmond-heights-oh/56178"},
    {name: "Alison Mack",city: "Cincinnati", zip: "45202", phone: "(513) 540-3888",link:"https://www.psychologytoday.com/us/therapists/alison-mack-cincinnati-oh/1433243"},
    {name: "Leah R. Chacko",city: "Garfield Heights", zip: "44125", phone: "(440) 493-1556",link:"https://www.psychologytoday.com/us/therapists/leah-r-chacko-garfield-heights-oh/1217520"},
    {name: "JB Wellness",city: "Garfield Heights", zip: "44125", phone: "(216) 859-1138",link:"https://www.psychologytoday.com/us/therapists/jb-wellness-garfield-heights-oh/1071455"},
    {name: "Caritas Treatment Wellness Center",city: "Garfield Heights", zip: "44125", phone: "(216) 633-1334",link:"https://www.psychologytoday.com/us/therapists/caritas-treatment-wellness-center-chagrin-falls-oh/710335"},
    {name: "Janice Stenson",city: "Youngstown", zip: "44502", phone: "(937) 828-5166",link:"https://www.psychologytoday.com/us/therapists/janice-stenson-youngstown-oh/1219847"},
    {name: "Evelyn Clark",city: "Youngstown", zip: "44515", phone: "(330) 748-3607",link:"https://www.psychologytoday.com/us/therapists/evelyn-clark-youngstown-oh/1652223"},
    {name: "Mason Boano",city: "Youngstown", zip: "44512", phone: "(330) 632-3447",link:"https://www.psychologytoday.com/us/therapists/mason-boano-youngstown-oh/1202390"},
    {name: "Carly Grabowski",city: "Brecksville", zip: "44141", phone: "(440) 276-5705",link:"https://www.psychologytoday.com/us/therapists/carly-grabowski-brecksville-oh/1318902"},
    {name: "Madeline Nash",city: "Brecksville", zip: "44141", phone: "(440) 595-6393",link:"https://www.psychologytoday.com/us/therapists/madeline-nash-brecksville-oh/1074500"},
    {name: "Andrew Tarr",city: "Brecksville", zip: "44141", phone: "(440) 664-1229",link:"https://www.psychologytoday.com/us/therapists/andrew-tarr-brecksville-oh/1255993"},
    {name: "Rachel N. Waggoner",city: "Lakewood", zip: "44107", phone: "(216) 238-5420",link:"https://www.psychologytoday.com/us/therapists/rachel-n-waggoner-lakewood-oh/356656"},
    {name: "Samantha Komertz",city: "Lakewood", zip: "44107", phone: "(216) 350-2062",link:"https://www.psychologytoday.com/us/therapists/samantha-komertz-lakewood-oh/1261418"},
    {name: "Jim Buccini",city: "Lakewood", zip: "44107", phone: "(440) 218-8233",link:"https://www.psychologytoday.com/us/therapists/jim-buccini-cleveland-oh/1606400"},
    {name: "Albert J McIntosh",city: "Beachwood", zip: "44122", phone: "(800) 642-4560 x800",link:"https://www.psychologytoday.com/us/therapists/albert-j-mcintosh-beachwood-oh/207289"},
    {name: "Dorian Mahulawde",city: "Beachwood", zip: "44122", phone: "(216) 400-8602 x800",link:"https://www.psychologytoday.com/us/therapists/dorian-mahulawde-beachwood-oh/421676"},
    {name: "Hina Ansari ",city: "Solon", zip: "44139", phone: "(216) 523-4278 ",link:"https://www.psychologytoday.com/us/therapists/hina-ansari-owner-the-healing-light-therapy-llc-solon-oh/766833"},
    {name: "Tanya D Wright",city: "Solon", zip: "44139", phone: "(440) 709-8075 ",link:"https://www.psychologytoday.com/us/therapists/tanya-d-wright-solon-oh/1162907"},
    {name: "",city: "Solon", zip: "44139", phone: "(216) 400-8602 ",link:""}]
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
    
        if (window.matchMedia("(max-width: 767px)").matches) {
    // Mobile devices
    filtered.forEach(t => {
        resultsDiv.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm border-0 rounded-4" style="background-color: #e8f0f8;">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title fw-bold text-primary">${t.name}</h5>
                        <p class="card-text mb-1">
                            <i class="bi bi-geo-alt-fill"></i> ${t.city}, ${t.zip}
                        </p>
                        <p class="card-text mb-3">
                            <i class="bi bi-telephone-fill"></i>
                            <a href="tel:${t.phone.replace(/\D/g, '')}" class="phone-link">
                                ${t.phone}
                            </a>
                        </p>
                        <a href="${t.link}" class="btn btn-outline-primary mt-auto">Contact</a>
                    </div>
                </div>
            </div>
        `;
    });
}

    else {
        filtered.forEach(t => {
        resultsDiv.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm border-0 rounded-4" style="background-color: #e8f0f8;">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title fw-bold text-primary">${t.name}</h5>
                        <p class="card-text mb-1"><i class="bi bi-geo-alt-fill"></i> ${t.city}, ${t.zip}</p>
                        <p class="card-text mb-3"><i class="bi bi-telephone-fill"></i> ${t.phone}</p>
                        <a href="${t.link}" class="btn btn-outline-primary mt-auto">Contact</a>
                    </div>
                </div>
            </div>
        `;
    });
    } 

});
