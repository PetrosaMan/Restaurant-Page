function renderMenu(){
    
    console.log("Menu module loaded");
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const sectionMenu = document.createElement('section')
    sectionMenu.classList.add('menu');

    const menuH1 = document.createElement('h1');
    menuH1.textContent = "Our Menu";
    sectionMenu.appendChild(menuH1);
    
    let title = document.createElement('h2');
    title.textContent = "Meat Specialties";
    sectionMenu.appendChild(title);
    
    let meat  = document.createElement('p'); 
    meat.textContent = "Turkish Trio: Flame grilled lamb chops, koftas & lamb kebab";
    sectionMenu.appendChild(meat);

    meat = document.createElement('p');
    meat.textContent = "Lamb Rump (320g)Flame grilled, then cooked in the oven & topped with a rosemary garlic butter"; 
    sectionMenu.appendChild(meat);

    meat = document.createElement('p');
    meat.textContent = "Sirloin Dolmasi (300g)Stuffed with a mixture of walnuts, blue cheese, preserved figs served with blue cheese sauce"; 
    sectionMenu.appendChild(meat);

    title = document.createElement('h2');
    title.textContent = "Vegetarian"
    sectionMenu.appendChild(title);
    
    let veg  = document.createElement('p');
    veg.textContent = "Vegetable Lasagne Layers of creamy spinach, mixed vegetables, pasta & tomato stew.Topped with cheese. Baked in the oven";
    sectionMenu.appendChild(veg);
    
    veg  = document.createElement('p');
    veg.textContent = "Vegetable Platter Two of each of the following: Spinach & feta boregi, halloumi cheese, tomato & mozzarella kebab drizzled with basil pesto, 1 vegetable phyllo cup, crumbed mushrooms served with tzatziki and hummus";
    sectionMenu.appendChild(veg);
    
    title = document.createElement('h2');
    title.textContent = "Desserts"
    sectionMenu.appendChild(title);
    
    let dessert  = document.createElement('p');
    dessert.textContent = "Baklava Traditional Turkish dessert made with layers of filo pastry, chopped nuts, butter & honey syrup";
    sectionMenu.appendChild(dessert);
    
    dessert  = document.createElement('p');
    dessert.textContent = "Kunefe Shredded filo pastry layered with a special cheese, baked in the oven & drizzled with rose syrup. Served with clotted cream";
    sectionMenu.appendChild(dessert);
    
    dessert  = document.createElement('p');
    dessert.textContent = "Rice Pudding Creamy rice pudding topped with cinnamon";
    sectionMenu.appendChild(dessert); 
    
    content.appendChild(sectionMenu);
    
}

export {renderMenu};