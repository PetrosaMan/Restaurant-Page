function renderAbout(){
    console.log("About module loaded");
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const aboutH1 = document.createElement('h1');
    aboutH1.textContent = "Kafe Serefe";
    content.appendChild(aboutH1);
    
    const address = document.createElement('p');
    address.textContent = "25 Kings Road, Neverland, 2345";
    content.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = "phone: 078 555 1234  ";
    content.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = "email: serefe@kafeserefe.com";
    content.appendChild(email);

    const openingHours = document.createElement('p');
    openingHours.textContent = "Lunch: 12pm - 3pm (Tue - Sun) | Dinner: 6pm - 11pm (Tue - Sat)";
    content.appendChild(openingHours);



}

export {renderAbout};