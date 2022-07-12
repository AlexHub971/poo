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
    }
}

const pieQuiChante = new Pie("Marcel", 0x000000, 100, 50);
pieQuiChante.chaparder();

/* Si le code suivant est activé, un message d'erreur s'affiche car la classe Animal est abstraite et ne peut pas être instanciée*/
// const animal = new AbstractAnimal("Pikachu", "0x00");
// console.log(animal);