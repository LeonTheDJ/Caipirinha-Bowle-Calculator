/**
 * Central collection of available cocktails (11 total).
 */
const COCKTAILS_DATA = [
    new Cocktail({
        id: 'caipirinha-bowle',
        name: 'Caipirinha - Bowle',
        subtitle: 'mit und ohne Alkohol',
        category: 'Party Bowle',
        image: 'images/caipirinha.jpg',
        filename: 'caipirinha.html',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Der erfrischende Klassiker aus Brasilien neu interpretiert als spritzige Bowle für jede Party.',
        ingredients: [
            new Ingredient('Limetten', 1, 'Stück', 'both'),
            new Ingredient('Zucker', 2, 'TL', 'both'),
            new Ingredient('Cachaça ', 50, 'ml', 'alc'),
            new Ingredient('Mineralwasser', 50, 'ml', 'non-alc'),
            new Ingredient('Crushed Ice', 300, 'g', 'both'),
        ]
    }),
    new Cocktail({
        id: 'mojito',
        name: 'Classic Mojito',
        subtitle: 'Virgin & Alcoholic Version',
        category: 'Klassiker',
        image: 'images/mojito.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Kuba in einem Glas: Frische Minze, erfrischende Limetten und feiner Rohrzucker auf Crushed Ice.',
        ingredients: [
            new Ingredient('Limetten', 1, 'Stück', 'both'),
            new Ingredient('Frische Minzzweige', 2, 'Stück', 'both'),
            new Ingredient('Rohrzucker', 2, 'TL', 'both'),
            new Ingredient('Crushed Ice', 100, 'g', 'both'),
            new Ingredient('Weißer Rum', 50, 'ml', 'alc'),
            new Ingredient('Sodawasser', 100, 'ml', 'alc'),
            new Ingredient('Sprite / Ginger Ale', 125, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'pina-colada',
        name: 'Piña Colada',
        subtitle: 'Cremiger Tropentraum',
        category: 'Cremig & Süß',
        image: 'images/pina-colada.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Verführerische Kombination aus sonnengereifter Ananas, exotischer Kokosnusscreme und frischer Sahne.',
        ingredients: [
            new Ingredient('Ananassaft', 150, 'ml', 'both'),
            new Ingredient('Cream of Coconut', 40, 'ml', 'both'),
            new Ingredient('Schlagsahne', 20, 'ml', 'both'),
            new Ingredient('Ananasscheiben zum Garnieren', 1, 'Stück', 'both'),
            new Ingredient('Weißer Rum', 60, 'ml', 'alc'),
            new Ingredient('Kokossirup', 10, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'aperol-spritz',
        name: 'Aperol Spritz',
        subtitle: 'Italienisches Lebensgefühl',
        category: 'Aperitif',
        image: 'images/aperol-spritz.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Fruchtig-bitterer Sommerdrink aus Italien mit spritzigem Prosecco und saftigen Orangenscheiben.',
        ingredients: [
            new Ingredient('Orangenscheiben', 1, 'Stück', 'both'),
            new Ingredient('Eiswürfel', 4, 'Stück', 'both'),
            new Ingredient('Prosecco', 90, 'ml', 'alc'),
            new Ingredient('Aperol', 60, 'ml', 'alc'),
            new Ingredient('Sodawasser', 30, 'ml', 'alc'),
            new Ingredient('Alkoholfreier Bitter (Crodino / Sanbitter)', 90, 'ml', 'non-alc'),
            new Ingredient('Alkoholfreier Sekt', 90, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'hugo',
        name: 'Hugo',
        subtitle: 'Spritziger Holunder-Traum',
        category: 'Erfrischend',
        image: 'images/hugo.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Leichter Sommerdrink mit süßem Holunderblütensirup, frischer Minze und kühlem Prosecco.',
        ingredients: [
            new Ingredient('Holunderblütensirup', 20, 'ml', 'both'),
            new Ingredient('Frische Minzblätter', 5, 'Stück', 'both'),
            new Ingredient('Limetten (in Scheiben)', 0.5, 'Stück', 'both'),
            new Ingredient('Sodawasser', 50, 'ml', 'both'),
            new Ingredient('Prosecco', 150, 'ml', 'alc'),
            new Ingredient('Alkoholfreier Sekt', 150, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'long-island-ice-tea',
        name: 'Long Island Ice Tea',
        subtitle: 'Stark & Erfrischend',
        category: 'Highball',
        image: 'images/long-island-ice-tea.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Der legendäre Longdrink mit einer kraftvollen Mischung von fünf Spirituosen, abgerundet mit Cola und Zitrone.',
        ingredients: [
            new Ingredient('Zitronensaft', 20, 'ml', 'both'),
            new Ingredient('Zuckersirup', 20, 'ml', 'both'),
            new Ingredient('Cola', 100, 'ml', 'both'),
            new Ingredient('Zitronenscheiben zum Garnieren', 1, 'Stück', 'both'),
            new Ingredient('Wodka', 15, 'ml', 'alc'),
            new Ingredient('Weißer Rum', 15, 'ml', 'alc'),
            new Ingredient('Tequila', 15, 'ml', 'alc'),
            new Ingredient('Gin', 15, 'ml', 'alc'),
            new Ingredient('Triple Sec / Cointreau', 15, 'ml', 'alc'),
            new Ingredient('Alkoholfreier Eistee-Sirup / Citrus-Mix', 60, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'tequila-sunrise',
        name: 'Tequila Sunrise',
        subtitle: 'Fruchtiges Farbspiel',
        category: 'Fruchtig',
        image: 'images/tequila-sunrise.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Der optische Hingucker: Sonnengereifter Orangensaft trifft auf tiefrote Grenadine und Tequila.',
        ingredients: [
            new Ingredient('Orangensaft', 150, 'ml', 'both'),
            new Ingredient('Grenadine Sirup', 20, 'ml', 'both'),
            new Ingredient('Eiswürfel', 4, 'Stück', 'both'),
            new Ingredient('Orangenscheiben zum Garnieren', 1, 'Stück', 'both'),
            new Ingredient('Tequila', 60, 'ml', 'alc'),
            new Ingredient('Maracujasaft', 30, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'zombie',
        name: 'Zombie',
        subtitle: 'Kraftvoller Tiki-Klassiker',
        category: 'Tiki',
        image: 'images/zombie.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Intensiver karibischer Tiki-Cocktail mit verschiedenen Rumsorten, Ananassaft und exotischem Grenadine-Sirup.',
        ingredients: [
            new Ingredient('Ananassaft', 100, 'ml', 'both'),
            new Ingredient('Orangensaft', 100, 'ml', 'both'),
            new Ingredient('Limetten-Saft', 25, 'ml', 'both'),
            new Ingredient('Grenadine Sirup', 10, 'ml', 'both'),
            new Ingredient('Brauner Rum', 40, 'ml', 'alc'),
            new Ingredient('Weißer Rum', 40, 'ml', 'alc'),
            new Ingredient('Overproof Rum (73%)', 20, 'ml', 'alc'),
            new Ingredient('Mandelsirup (Orgeat)', 15, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'sex-on-the-beach',
        name: 'Sex on the Beach',
        subtitle: 'Fruchtiger Party-Klassiker',
        category: 'Fruchtig & Süß',
        image: 'images/sex-on-the-beach.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Beliebter Strand-Klassiker aus Wodka, süßem Pfirsichlikör, Orangensaft und herbem Cranberrysaft.',
        ingredients: [
            new Ingredient('Orangensaft', 100, 'ml', 'both'),
            new Ingredient('Cranberrysaft', 100, 'ml', 'both'),
            new Ingredient('Eiswürfel', 4, 'Stück', 'both'),
            new Ingredient('Wodka', 40, 'ml', 'alc'),
            new Ingredient('Pfirsichlikör', 20, 'ml', 'alc'),
            new Ingredient('Pfirsichsirup', 20, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'bloody-mary',
        name: 'Bloody Mary',
        subtitle: 'Herzhaft & Würzig',
        category: 'Herzhaft',
        image: 'images/bloody-mary.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Der pikante Drink für den späten Brunch: Würziger Tomatensaft verfeinert mit Tabasco, Worcestershire & Sellerie.',
        ingredients: [
            new Ingredient('Tomatensaft', 200, 'ml', 'both'),
            new Ingredient('Zitronensaft', 15, 'ml', 'both'),
            new Ingredient('Worcestershiresauce', 5, 'ml', 'both'),
            new Ingredient('Tabasco', 3, 'Tropfen', 'both'),
            new Ingredient('Selleriestangen zum Garnieren', 1, 'Stück', 'both'),
            new Ingredient('Wodka', 50, 'ml', 'alc'),
            new Ingredient('Gurkensaft / Alkoholfreie Gin-Alternative', 30, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'whiskey-sour',
        name: 'Whiskey Sour',
        subtitle: 'Harmonisch & Sour',
        category: 'Sour',
        image: 'images/whiskey-sour.jpg',
        baseServings: 1,
        minServings: 1,
        maxServings: 150,
        description: 'Der zeitlose Bar-Klassiker: Fein ausbalanciertes Verhältnis zwischen Bourbon Whiskey, frischer Zitrone und Süße.',
        ingredients: [
            new Ingredient('Zitronensaft', 50, 'ml', 'both'),
            new Ingredient('Zuckersirup', 30, 'ml', 'both'),
            new Ingredient('Eiswürfel', 4, 'Stück', 'both'),
            new Ingredient('Maraschino-Kirschen zum Garnieren', 1, 'Stück', 'both'),
            new Ingredient('Bourbon Whiskey', 60, 'ml', 'alc'),
            new Ingredient('Alkoholfreie Whiskey-Alternative', 60, 'ml', 'non-alc')
        ]
    })
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COCKTAILS_DATA;
}
