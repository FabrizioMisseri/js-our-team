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
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


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

const arrayTeam = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6
];

for(let i = 0; i < arrayTeam.length; i++) {
    let person = arrayTeam[i];
    for(let key in person) {
        console.log(person[key]);
    }
}