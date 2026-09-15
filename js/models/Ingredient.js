/**
 * Represents a single ingredient in a cocktail recipe.
 */
class Ingredient {
    /**
     * @param {string} name - Name of the ingredient (e.g. "Limetten", "Zucker")
     * @param {number} baseAmount - Quantity required for baseServings
     * @param {string} [unit=''] - Unit of measurement (e.g. "g", "Liter", "ml")
     * @param {'both'|'alc'|'non-alc'} [alcVariant='both'] - Recipe variant filter
     */
    constructor(name, baseAmount, unit = '', alcVariant = 'both') {
        this.name = name;
        this.baseAmount = baseAmount;
        this.unit = unit;
        this.alcVariant = alcVariant;
    }

    /**
     * Calculates raw scaled amount for a given number of servings.
     * @param {number} targetServings - Number of servings requested
     * @param {number} [baseServings=8] - Base portion count of the cocktail
     * @returns {number} Scaled quantity
     */
    getScaledAmount(targetServings, baseServings = 8) {
        if (!targetServings || targetServings <= 0) return 0;
        return (this.baseAmount / baseServings) * targetServings;
    }

    /**
     * Formats numeric amount cleanly (rounds integers, max 2 decimal places).
     * @param {number} targetServings
     * @param {number} [baseServings=8]
     * @returns {string} Formatted number
     */
    formatAmount(targetServings, baseServings = 8) {
        const raw = this.getScaledAmount(targetServings, baseServings);
        if (Math.abs(raw - Math.round(raw)) < 0.001) {
            return Math.round(raw).toString();
        }
        return parseFloat(raw.toFixed(2)).toString();
    }

    /**
     * Formats complete label string for display (e.g. "1.5 Liter Ginger Ale").
     * @param {number} targetServings
     * @param {number} [baseServings=8]
     * @returns {string} Formatted ingredient text
     */
    getDisplayString(targetServings, baseServings = 8) {
        const amountStr = this.formatAmount(targetServings, baseServings);
        const unitStr = this.unit ? ` ${this.unit}` : '';
        return `${amountStr}${unitStr} ${this.name}`;
    }
}

// Export for module or browser window use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ingredient;
}
