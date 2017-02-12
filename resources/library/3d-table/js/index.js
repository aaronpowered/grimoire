'use strict';

/**
 * Base interface for filters
 * @interface
 */
class Filter {
    /**
     * @constructor
     * @param  {string} selector
     * @param  {Isotope} isotope
     * @return {void}
     */
    constructor (selector, isotope) {
        this.element = document.querySelector(selector);
        this.isotope = isotope;
    }

    /**
     * Apply a selection of filters to the Isotope grid object
     * @param  {string | Function} selection
     * @return {void}
     */
    applyFilters(selection) {
        this.isotope.arrange({filter: selection});
    }

    /**
     * Get the selected options for this filter
     * @return {string}
     */
    getSelection() {}
    /**
     * Initialize the event listener for this filter
     * @param  {Function} eventCb Event callback function
     * @return {void}
     */
    initEventListener(eventCb) {}
}

/**
 * Color filters
 * @extends {Filter}
 */
class ColorFilter extends Filter {
    /** @inheritdoc */
    getSelection() {
        return this.selected ? this.selected.getAttribute('data-filter') : '';
    }

    /** @inheritdoc */
    initEventListener(eventCb) {
        this.element.addEventListener('click', (evt) => {
            let target = evt.target;

            if (target && target.matches('[data-filter]')) {
								evt.preventDefault();
                this.selected = target;
                // console.log(eventCb());
                this.applyFilters(eventCb.call());
            }
        });
    }
}

/**
 * Shape filters
 * @extends {Filter}
 */
class ShapeFilter extends Filter {
    /** @inheritdoc */
    getSelection() {
        let selected = [];

        Array.from(this.element.querySelectorAll('input[type="checkbox"]')).forEach(checkbox => {
            if (checkbox.checked) {
                selected.push(checkbox.value);
            }
        });

        return selected.length ? selected.join(', ') : '';
    }

    /** @inheritdoc */
    initEventListener(eventCb) {
        this.element.addEventListener('change', (evt) => {
            let target = evt.target;

            if (target && target.matches('input[type="checkbox"]')) {
                // console.log(eventCb());
                this.applyFilters(eventCb.call());
            }
        });
    }
}

/**
 * The Isotope object
 * @type {Isotope}
 */
let iso = new Isotope(document.querySelector('.grid'), {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    fitRows: {
        gutter: 20
    }
});

/** @type {Array} The list of filters */
let filters = [];
/** @type {ColorFilter} */
let colorFilter = new ColorFilter('#color-filters', iso);
/** @type {ShapeFilter} */
let shapeFilter = new ShapeFilter('#shape-filters', iso);

/**
 * Get all the selected filter options
 * @return {string} 
 */
function getSelectedFilters() {
    /**
     * Checks if a string is empty
     * @param  {string}  str
     * @return {Boolean}
     */
    function isEmpty(str) {
        return (!str || str.length === 0);
    }

    /** @type {string} The color selected */
    let colorSelection = colorFilter.getSelection();
    /** @type {string} Comma separated list of shapes selected */
    let shapesSelection = shapeFilter.getSelection();
    /** @type {string} all the selected options */
    let selection = shapesSelection;

    if (!isEmpty(colorSelection)) {
        if (!isEmpty(shapesSelection)) {
            shapesSelection = shapesSelection.split(',');
            selection = shapesSelection
                        .map((shape) => colorSelection.trim() + shape.trim())
                        .join(',');
        } else {
            selection = colorSelection;
        }
    }

    return isEmpty(selection) ? '*' : selection;
}

/**
 * Initializes all the filters
 * @return {void}
 */
function initFilters() {
    filters.push(colorFilter);
    filters.push(shapeFilter);

    filters.forEach((filter) => {
        filter.initEventListener(getSelectedFilters);
    });
}

initFilters();