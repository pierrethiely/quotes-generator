const subject = ["« Stephen Curry ", "« Nabil Fekir ", "« Usain Bolt ", "« Nikola Karabatic ", "« Sébastien Chabal ", "« Rafael Nadal ", "« Lewis Hamilton ", "« Tiger Woods "]; 
const verb = ["shoote ", "dribble ", "court ", "contre ", "raffûte ", "smashe ", "pilote ", "vise "];
const adv = ["totalement ", "encore ", "tellement ", "certainement ", "radicalement ", "vachement ", "beaucoup ", "légèrement "]; 
const comp = ["plus vite, ", "moins vite, ", "plus, ", "moins bien, ", "mieux, ", "plus mal, ", "moins, "]; 
const link = ["même s'", "alors qu'", "mais ", "vu qu'", "puisqu'", "car "]; 
const end = ["il est malade. »", "il suit un régime. »", "il est blessé. »", "il prendra sa retraite. »", "il viellit. »", "il est expérimenté. »", "il débute. »", "il est jeune. »"];

const subject2 = ["« Les Français ", "« Les Américains ", "« Les Allemands ", "« Les Anglais ", "« Les Italiens ", "« Les Espagnols ", "« Les Suisses ", "« Les Marocains "];
const verb2 = ["adorent manger ", "aiment s'engloutir ", "raffolent ", "dévorent ", "dégustent ", "préparent ", "cuisinent ", "concoctent "]; 
const name = ["des croissants, ", "des burgers, ", "de la choucroute, ", "du pudding, ", "des pizzas, ", "de la paëlla, ", "de la fondue, ", "du tajine, "]; 
const comp2 = ["même si ", "alors que ", "puisque ", "parce que ", "car ", "vu que ", "mais "]; 
const link2 = ["cet aliment ", "ce plat ", "ce condiment ", "ceci ", "ce produit ", "ce vivre "]; 
const end2 = ["est lourd. »", "est gras. »", "est délicieux. »", "est mauvais. »", "est infâme. »", "est moyen. »", "est spécial. »", "est trop sec. »"]; 

const authFirst = ["Bernard ", "Lisa ", "Paul ", "Lucie ", "Francis ", "Bastien ", "Fleur ", "Jimmy ", "Judith ", "Patrick "]; 
const authLast = ["Leblanc", "Dumont", "Schwartz", "Kennedy", "Costa", "Borrego", "Walton", "Durant", "Capela", "Perret"]; 

function randomWord(tab) {
    return tab[Math.floor(Math.random() * tab.length)];
}

let contenu = document.getElementById("contenu"); 
let generation = document.getElementById("generate");
let endProgram = document.getElementById("endProgram");
let content = document.getElementById("content");
let citations = document.getElementById("citations");
let open = document.getElementById("open");

open.addEventListener("click", function(openProgram) {

    if (openProgram.target.textContent==="Ouvrir le générateur") {
        openProgram.target.textContent="Fermer le générateur";
        endProgram.textContent="";
        content.style.display="block";
    }

    else {
        openProgram.target.textContent="Ouvrir le générateur";
        endProgram.textContent="A bientôt !";
        content.style.display="none";
        contenu.style.display="none";
        citations.textContent="";
    }
});

function clear(section) {
    while (section.firstChild !== null) {
        section.removeChild(section.firstChild);
    }
}

function verify(number, type) {
    if (number > 5 || number < 1) {
        alert("Choisissez un nombre entre 1 et 5.");
        throw new Error("Choisissez un nombre entre 1 et 5.");            
    }

    if (type !== "sport" && type !== "gastro") {
        alert("Choisissez un type de citation.");
        throw new Error("Choisissez un type de citation.");            
    }
}

function generate(number, type) {
    for (var i=0; i<number; i++) {
        if (type === "sport") {
            const block = document.createElement("blockquote");
            block.textContent = randomWord(subject) + randomWord(verb) + randomWord(adv) + randomWord(comp) + randomWord(link) + randomWord(end);
            block.innerHTML += "<br /> <br />- "+ randomWord(authFirst) + randomWord(authLast);
            citations.appendChild(block);                
        }
        
        if (type === "gastro") {
            const block = document.createElement("blockquote");
            block.textContent = randomWord(subject2) + randomWord(verb2) + randomWord(name) + randomWord(comp2) + randomWord(link2) + randomWord(end2);
            block.innerHTML += "<br /> <br />- "+ randomWord(authFirst) + randomWord(authLast);
            citations.appendChild(block);
        }
    }
}

generation.addEventListener("click", function() {  
    if (document.querySelector("input[name=number]:checked")) {
        let number = parseInt(document.querySelector("input[name=number]:checked").value);
        let type = document.getElementById("type").value;
        contenu.style.display="block";
        citations.style.display="block";      

        verify(number, type);

        clear(citations);

        generate(number, type);
    }     
});




