class AbstractNourriture {
    /**
     * 
     * @param {Number} ptsDeVie 
     */
    constructor(ptsDeVie = 10) {
        this.ptsDeVie = ptsDeVie;
    }
}

// CLASSE MERE ANIMAL
class AbstractAnimal extends AbstractNourriture {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     * @param {Number} ptsDeVie 
     */
    constructor(nom, couleur, sante = 100, ptsDeVie = 10) {
        super(ptsDeVie);

        if(this.constructor === AbstractAnimal) {
            throw new TypeError("Abstract class AbstractAnimal cannot be instantiated directly");
        }
        this.nom = nom;
        this.couleur = couleur;
        this.sante = sante;
    }

    dormir() {
        console.log("L'animal "+this.nom+" dort.");
    }

    manger(nourriture) {
        console.log("L'animal "+this.nom+" mange " + nourriture.nom +".");
        this.sante += nourriture.ptsDeVie;
    }

    attaquer() {
        console.log("L'animal "+this.nom+" attaque.");
    }

    seDeplacer() {
        console.log("L'animal "+this.nom+" se déplace.");
    }

    communiquer() {
        console.log("L'animal "+this.nom+" communique.");
    }

}

// CLASSE MERE OISEAU, FILLE DE ANIMAL
class AbstractOiseau extends AbstractAnimal {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     * @param {Number} longueurDesAiles 
     */
    constructor(nom, couleur, sante = 100, ptsDeVie = 10, longueurDesAiles) 
    {  
        super(nom, couleur, sante, ptsDeVie); // "super" pour renvoyer à la propriété de la classe parent

        if(this.constructor === AbstractOiseau) {
            throw new TypeError("Abstract class Oiseau cannot be instantiated directly");
        }

        this.longueurDesAiles = longueurDesAiles;
    }

    voler() {
        super.seDeplacer();
        console.log("L'oiseau "+this.nom+" vole.");
    }

    chanter() {
        super.communiquer();
        console.log("L'oiseau "+this.nom+" chante.");
    }

}

const typesPoisson = {
    EAU_DOUCE: 1,
    EAU_SALEE: 2,
    EAU_DOUCE_ET_SALEE: 3
}

// CLASSE MERE POISSON, FILLE DE ANIMAL
class AbstractPoisson extends AbstractAnimal {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     * @param {String} type 
     */
    constructor(nom, couleur, sante=100, ptsDeVie = 15, type) {
        super(nom, couleur, sante, ptsDeVie);

        this.type = type;
    }

    nager() {
        console.log("Le poisson " + this.nom + " nage.");
        super.seDeplacer();
    }
}

// LES FILLES DE OISEAU
class Pie extends AbstractOiseau {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     * @param {Number} longueurDesAiles 
     */
    constructor(nom, couleur, sante=100, ptsDeVie = 10, longueurDesAiles) {
        super(nom, couleur, sante, ptsDeVie, longueurDesAiles);
    }

    chaparder() {
        console.log("La pie "+this.nom+" chaparde.");
    }
}

class Perroquet extends AbstractOiseau {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     * @param {Number} longueurDesAiles 
     */
    constructor(nom, couleur, sante=100, ptsDeVie = 10, longueurDesAiles) {
        super(nom, couleur, sante, ptsDeVie, longueurDesAiles);
    }

    parler() {
        console.log("Le perroquet "+this.nom+" parle.");
        super.communiquer();
    }

    communiquer() {
        console.log("Le perroquet "+this.nom+" communique.");
    }
}

/// LES FILLES DE POISSONS

class Dauphin extends AbstractPoisson {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     */
    constructor(nom, couleur, sante=100) {
        super(nom, couleur, sante, 15, typesPoisson.EAU_SALEE);
    }
    
    surfer() {
        console.log("Le dauphin "+this.nom+ "surfe.");
    }
}

class Baleine extends AbstractPoisson {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     */
    constructor(nom, couleur,sante=10) {
        super(nom, couleur, sante, 25, typesPoisson.EAU_SALEE);
    }

    plonger() {
        console.log("La baleine "+this.nom+" plonge.");
    }
}

const especesRequin = {
    BLANC: 1,
    BULLDOG: 2,
    MARTEAU: 3
}

class Requin extends AbstractPoisson {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     */
    constructor(nom, couleur, sante=100) {
        super(nom,couleur, sante, 20, espece);

        this.type = this.espece == especesRequin.BULLDOG ? typesPoisson.EAU_DOUCE_ET_SALEE : typesPoisson.EAU_SALEE;

        this.sante = this.espece == especesRequin.MARTEAU ? 50 : this.sante;

    }

    communiquer() {
        console.log("Le requin ne communique pas.");
    }

    devorer() {
        super.manger();
    }

    manger() {
        console.log("Un requin ne mange pas; il dévore...");
    }

}


// DECLARATION DES INSTANCES DE CLASSES

const pieQuiChante = new Pie("Marcel", 0x000000, 100, 50);
// pieQuiChante.chaparder();
// pieQuiChante.chanter();

/* Si le code suivant est activé, un message d'erreur s'affiche car la classe Animal est abstraite et ne peut pas être instanciée*/
// const animal = new AbstractAnimal("Pikachu", "0x00");
// console.log(animal);

const coco = new Perroquet("Coco", 0xFF0000, 100, 80);
// console.log(coco);
// coco.parler();
// coco.communiquer();

const mobyDick = new Baleine("Mody Dick", 0xDEDEDE, 90, 20);
const flipper = new Dauphin("Fliper", 0xDEDEDE, 100, 15);

const bruce = new Requin("Bruce", 0xDEDEDE, 100, 20, especesRequin.BLANC);
const enclume = new Requin("Enclume", 0xDEDEDE, 80, 10, especesRequin.MARTEAU);
const boule = new Requin("Boule", 0xDEDEDE, 100, 20, especesRequin.BULLDOG);


console.log(bruce);
console.log(enclume);
console.log(boule);