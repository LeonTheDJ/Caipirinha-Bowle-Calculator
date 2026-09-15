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
        baseServings: 8,
        minServings: 2,
        maxServings: 30,
        description: 'Der erfrischende Klassiker aus Brasilien neu interpretiert als spritzige Bowle für jede Party.',
        ingredients: [
            new Ingredient('Limetten', 10, '', 'both'),
            new Ingredient('Zucker', 80, 'g', 'both'),
            new Ingredient('Ginger Ale', 1, 'Liter', 'both'),
            new Ingredient('Sekt', 0.75, 'Liter', 'alc'),
            new Ingredient('Rum', 200, 'ml', 'alc'),
            new Ingredient('Mineralwasser', 1, 'Liter', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'mojito',
        name: 'Classic Mojito',
        subtitle: 'Virgin & Alcoholic Version',
        category: 'Klassiker',
        image: 'images/mojito.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 25,
        description: 'Kuba in einem Glas: Frische Minze, erfrischende Limetten und feiner Rohrzucker auf Crushed Ice.',
        ingredients: [
            new Ingredient('Limetten', 4, 'Stück', 'both'),
            new Ingredient('Frische Minzzweige', 8, 'Stück', 'both'),
            new Ingredient('Rohrzucker', 8, 'TL', 'both'),
            new Ingredient('Crushed Ice', 400, 'g', 'both'),
            new Ingredient('Weißer Rum', 200, 'ml', 'alc'),
            new Ingredient('Sodawasser', 400, 'ml', 'alc'),
            new Ingredient('Sprite / Ginger Ale', 500, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'pina-colada',
        name: 'Piña Colada',
        subtitle: 'Cremiger Tropentraum',
        category: 'Cremig & Süß',
        image: 'images/pina-colada.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 20,
        description: 'Verführerische Kombination aus sonnengereifter Ananas, exotischer Kokosnusscreme und frischer Sahne.',
        ingredients: [
            new Ingredient('Ananassaft', 600, 'ml', 'both'),
            new Ingredient('Cream of Coconut', 160, 'ml', 'both'),
            new Ingredient('Schlagsahne', 80, 'ml', 'both'),
            new Ingredient('Ananasscheiben zum Garnieren', 4, 'Stück', 'both'),
            new Ingredient('Weißer Rum', 240, 'ml', 'alc'),
            new Ingredient('Kokossirup', 40, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'aperol-spritz',
        name: 'Aperol Spritz',
        subtitle: 'Italienisches Lebensgefühl',
        category: 'Aperitif',
        image: 'images/aperol-spritz.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 25,
        description: 'Fruchtig-bitterer Sommerdrink aus Italien mit spritzigem Prosecco und saftigen Orangenscheiben.',
        ingredients: [
            new Ingredient('Orangenscheiben', 4, 'Stück', 'both'),
            new Ingredient('Eiswürfel', 16, 'Stück', 'both'),
            new Ingredient('Prosecco', 360, 'ml', 'alc'),
            new Ingredient('Aperol', 240, 'ml', 'alc'),
            new Ingredient('Sodawasser', 120, 'ml', 'alc'),
            new Ingredient('Alkoholfreier Bitter (Crodino / Sanbitter)', 360, 'ml', 'non-alc'),
            new Ingredient('Alkoholfreier Sekt', 360, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'hugo',
        name: 'Hugo',
        subtitle: 'Spritziger Holunder-Traum',
        category: 'Erfrischend',
        image: 'images/hugo.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 25,
        description: 'Leichter Sommerdrink mit süßem Holunderblütensirup, frischer Minze und kühlem Prosecco.',
        ingredients: [
            new Ingredient('Holunderblütensirup', 80, 'ml', 'both'),
            new Ingredient('Frische Minzblätter', 20, 'Stück', 'both'),
            new Ingredient('Limetten (in Scheiben)', 2, 'Stück', 'both'),
            new Ingredient('Sodawasser', 200, 'ml', 'both'),
            new Ingredient('Prosecco', 600, 'ml', 'alc'),
            new Ingredient('Alkoholfreier Sekt', 600, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'long-island-ice-tea',
        name: 'Long Island Ice Tea',
        subtitle: 'Stark & Erfrischend',
        category: 'Highball',
        image: 'images/long-island-ice-tea.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 20,
        description: 'Der legendäre Longdrink mit einer kraftvollen Mischung von fünf Spirituosen, abgerundet mit Cola und Zitrone.',
        ingredients: [
            new Ingredient('Zitronensaft', 80, 'ml', 'both'),
            new Ingredient('Zuckersirup', 80, 'ml', 'both'),
            new Ingredient('Cola', 400, 'ml', 'both'),
            new Ingredient('Zitronenscheiben zum Garnieren', 4, 'Stück', 'both'),
            new Ingredient('Wodka', 60, 'ml', 'alc'),
            new Ingredient('Weißer Rum', 60, 'ml', 'alc'),
            new Ingredient('Tequila', 60, 'ml', 'alc'),
            new Ingredient('Gin', 60, 'ml', 'alc'),
            new Ingredient('Triple Sec / Cointreau', 60, 'ml', 'alc'),
            new Ingredient('Alkoholfreier Eistee-Sirup / Citrus-Mix', 240, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'tequila-sunrise',
        name: 'Tequila Sunrise',
        subtitle: 'Fruchtiges Farbspiel',
        category: 'Fruchtig',
        image: 'images/tequila-sunrise.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 25,
        description: 'Der optische Hingucker: Sonnengereifter Orangensaft trifft auf tiefrote Grenadine und Tequila.',
        ingredients: [
            new Ingredient('Orangensaft', 600, 'ml', 'both'),
            new Ingredient('Grenadine Sirup', 80, 'ml', 'both'),
            new Ingredient('Eiswürfel', 16, 'Stück', 'both'),
            new Ingredient('Orangenscheiben zum Garnieren', 4, 'Stück', 'both'),
            new Ingredient('Tequila', 240, 'ml', 'alc'),
            new Ingredient('Maracujasaft', 120, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'zombie',
        name: 'Zombie',
        subtitle: 'Kraftvoller Tiki-Klassiker',
        category: 'Tiki',
        image: 'images/zombie.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 15,
        description: 'Intensiver karibischer Tiki-Cocktail mit verschiedenen Rumsorten, Ananassaft und exotischem Grenadine-Sirup.',
        ingredients: [
            new Ingredient('Ananassaft', 400, 'ml', 'both'),
            new Ingredient('Orangensaft', 400, 'ml', 'both'),
            new Ingredient('Limetten-Saft', 100, 'ml', 'both'),
            new Ingredient('Grenadine Sirup', 40, 'ml', 'both'),
            new Ingredient('Brauner Rum', 160, 'ml', 'alc'),
            new Ingredient('Weißer Rum', 160, 'ml', 'alc'),
            new Ingredient('Overproof Rum (73%)', 80, 'ml', 'alc'),
            new Ingredient('Mandelsirup (Orgeat)', 60, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'sex-on-the-beach',
        name: 'Sex on the Beach',
        subtitle: 'Fruchtiger Party-Klassiker',
        category: 'Fruchtig & Süß',
        image: 'images/sex-on-the-beach.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 25,
        description: 'Beliebter Strand-Klassiker aus Wodka, süßem Pfirsichlikör, Orangensaft und herbem Cranberrysaft.',
        ingredients: [
            new Ingredient('Orangensaft', 400, 'ml', 'both'),
            new Ingredient('Cranberrysaft', 400, 'ml', 'both'),
            new Ingredient('Eiswürfel', 16, 'Stück', 'both'),
            new Ingredient('Wodka', 160, 'ml', 'alc'),
            new Ingredient('Pfirsichlikör', 80, 'ml', 'alc'),
            new Ingredient('Pfirsichsirup', 80, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'bloody-mary',
        name: 'Bloody Mary',
        subtitle: 'Herzhaft & Würzig',
        category: 'Herzhaft',
        image: 'images/bloody-mary.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 20,
        description: 'Der pikante Drink für den späten Brunch: Würziger Tomatensaft verfeinert mit Tabasco, Worcestershire & Sellerie.',
        ingredients: [
            new Ingredient('Tomatensaft', 800, 'ml', 'both'),
            new Ingredient('Zitronensaft', 60, 'ml', 'both'),
            new Ingredient('Worcestershiresauce', 20, 'ml', 'both'),
            new Ingredient('Tabasco', 12, 'Tropfen', 'both'),
            new Ingredient('Selleriestangen zum Garnieren', 4, 'Stück', 'both'),
            new Ingredient('Wodka', 200, 'ml', 'alc'),
            new Ingredient('Gurkensaft / Alkoholfreie Gin-Alternative', 120, 'ml', 'non-alc')
        ]
    }),
    new Cocktail({
        id: 'whiskey-sour',
        name: 'Whiskey Sour',
        subtitle: 'Harmonisch & Sour',
        category: 'Sour',
        image: 'images/whiskey-sour.jpg',
        baseServings: 4,
        minServings: 1,
        maxServings: 20,
        description: 'Der zeitlose Bar-Klassiker: Fein ausbalanciertes Verhältnis zwischen Bourbon Whiskey, frischer Zitrone und Süße.',
        ingredients: [
            new Ingredient('Zitronensaft', 200, 'ml', 'both'),
            new Ingredient('Zuckersirup', 120, 'ml', 'both'),
            new Ingredient('Eiswürfel', 16, 'Stück', 'both'),
            new Ingredient('Maraschino-Kirschen zum Garnieren', 4, 'Stück', 'both'),
            new Ingredient('Bourbon Whiskey', 240, 'ml', 'alc'),
            new Ingredient('Alkoholfreie Whiskey-Alternative', 240, 'ml', 'non-alc')
        ]
    })
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COCKTAILS_DATA;
}
