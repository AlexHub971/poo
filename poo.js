// CLASSE MERE ANIMAL
class AbstractAnimal {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     */
    constructor(nom, couleur, sante = 100) {
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

    manger() {
        console.log("L'animal "+this.nom+" mange.");
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
    constructor(nom, couleur, sante = 100, longueurDesAiles) 
    {  
        super(nom, couleur, sante); // pour envoyer à la classe parent

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
    constructor(nom, couleur, sante=100, type) {
        super(nom, couleur, sante);

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
    constructor(nom, couleur, sante=100, longueurDesAiles) {
        super(nom, couleur, sante, longueurDesAiles);
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
    constructor(nom, couleur, sante=100, longueurDesAiles) {
        super(nom, couleur, sante, longueurDesAiles);
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
        super(nom, couleur, sante, typesPoisson.EAU_SALEE);
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
    constructor(nom, couleur,sante=100) {
        super(nom, couleur, sante, typesPoisson.EAU_SALEE);
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
        super(nom,couleur, sante, espece);

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

const mobyDick = new Baleine("Mody Dick", 0xDEDEDE, 90);
const flipper = new Dauphin("Fliper", 0xDEDEDE, 100);

const bruce = new Requin("Bruce", 0xDEDEDE, 100, especesRequin.BLANC);
const enclume = new Requin("Enclume", 0xDEDEDE, 80, especesRequin.MARTEAU);
const boule = new Requin("Boule", 0xDEDEDE, 100, especesRequin.BULLDOG);