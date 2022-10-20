// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// FATTO
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// FATTO
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// FATTO

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.


const person1 = {
    name: "Wayne Barnett",	
    role: "Founder & CEO",	        
    photo: "wayne-barnett-founder-ceo.jpg"
};

const person2 = {
    name: "Angela Caroll",
    role: "Chief Editor",	        
    photo: "angela-caroll-chief-editor.jpg"
};

const person3 = {
    name: "Walter Gordon",	
    role: "Office Manager",	        
    photo: "walter-gordon-office-manager.jpg"
};

const person4 = {
    name: "Angela Lopez",	
    role: "Social Media Manager",	
    photo: "angela-lopez-social-media-manager.jpg"
};

const person5 = {
    name: "Scott Estrada",
    role: "Developer",	            
    photo: "scott-estrada-developer.jpg"
};

const person6 = {
    name: "Barbara Ramos",	
    role: "Graphic Designer",	    
    photo: "barbara-ramos-graphic-designer.jpg"
};

const cardsCollector = document.getElementById("cards-collector");

const arrayTeam = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6
];


for(let i = 0; i < arrayTeam.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    const person = arrayTeam[i];
    card.innerHTML = `<div class="mb-1"><img src="img/${person.photo}"></div> <div class="text-center"><p>${person.name}</p><p>${person.role}</p></div>`;
    cardsCollector.append(card);
}