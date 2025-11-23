function renderAbout(){ 

    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    //content.style.height = "500px";
    
    const sectionAbout = document.createElement('section');
    sectionAbout.classList.add('about');    

    const aboutH1 = document.createElement('h1');
    aboutH1.textContent = "Kafe Serefe";
    sectionAbout.appendChild(aboutH1);
        
    const address = document.createElement('p');
    address.textContent = "25 Kings Road, Neverland, 2345";
    sectionAbout.appendChild(address);
    
    const phone = document.createElement('p');
    phone.textContent = "phone: 078 555 1234  ";
    sectionAbout.appendChild(phone);
    
    const email = document.createElement('p');
    email.textContent = "email: serefe@kafeserefe.co.uk";
    sectionAbout.appendChild(email);
    
    const openingHours = document.createElement('p');
    openingHours.textContent = "Lunch: 12pm - 3pm (Tue - Sun) | Dinner: 6pm - 11pm (Tue - Sat)";
    sectionAbout.appendChild(openingHours);

    const footer = document.createElement('footer');
    footer.textContent = "By: PetrosaMan, Odin Project 2025";
    sectionAbout.appendChild(footer);

    content.appendChild(sectionAbout);
    
}

export {renderAbout};