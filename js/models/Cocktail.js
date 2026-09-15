/**
 * Represents a Cocktail recipe with associated metadata and scaling methods.
 */
class Cocktail {
    /**
     * @param {Object} config
     * @param {string} config.id - Unique identifier/slug (e.g. "caipirinha-bowle")
     * @param {string} config.name - Display name (e.g. "Caipirinha - Bowle")
     * @param {string} [config.subtitle] - Subtitle (e.g. "mit und ohne Alkohol")
     * @param {string} [config.category] - Category tag (e.g. "Bowle", "Classic")
     * @param {string} config.image - Relative image URL
     * @param {string} [config.filename] - Custom HTML filename if different from id
     * @param {number} [config.baseServings=8] - Base portion calibration
     * @param {number} [config.minServings=2] - Minimum allowed portion
     * @param {number} [config.maxServings=30] - Maximum allowed portion
     * @param {string} [config.description=''] - Brief recipe description
     * @param {Ingredient[]} config.ingredients - List of Ingredient instances
     */
    constructor({
        id,
        name,
        subtitle = '',
        category = 'Cocktail',
        image = '',
        filename = null,
        baseServings = 8,
        minServings = 2,
        maxServings = 30,
        description = '',
        ingredients = []
    }) {
        this.id = id;
        this.name = name;
        this.subtitle = subtitle;
        this.category = category;
        this.image = image;
        this.filename = filename || `${id}.html`;
        this.baseServings = baseServings;
        this.minServings = minServings;
        this.maxServings = maxServings;
        this.description = description;
        this.ingredients = ingredients;
    }

    /**
     * Returns scaled ingredients filtered by alcohol preference.
     * @param {number} targetServings - Desired number of portions
     * @param {boolean} [withAlcohol=true] - Whether to include alcoholic ingredients
     * @returns {Array<{ingredient: Ingredient, displayString: string, amount: string}>}
     */
    getIngredientsFor(targetServings, withAlcohol = true) {
        return this.ingredients
            .filter(ing => {
                if (ing.alcVariant === 'both') return true;
                if (withAlcohol && ing.alcVariant === 'alc') return true;
                if (!withAlcohol && ing.alcVariant === 'non-alc') return true;
                return false;
            })
            .map(ing => ({
                ingredient: ing,
                displayString: ing.getDisplayString(targetServings, this.baseServings),
                amount: ing.formatAmount(targetServings, this.baseServings)
            }));
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Cocktail;
}
