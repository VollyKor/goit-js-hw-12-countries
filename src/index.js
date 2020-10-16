import './styles.css';
import './js/notification'
import fetchCountries from './js/fetchCountries.js'
import templateList from './templates/template-1.hbs';
import templateItem from './templates/template-2.hbs';

import { tooManyError, notFoundError } from './js/notification'

var debounce = require('lodash.debounce');

const containerRef = document.querySelector('.container');
const inputRef = document.querySelector('.form-input');

inputRef.addEventListener('input', debounce(() => {
    const countryName = inputRef.value
    containerRef.innerHTML = ' '

    fetchCountries(countryName)
        .then((data) => {
            containerRef.innerHTML = ' '
            if (data.length > 10) {
                tooManyError()
            }
            else if (data.length === 1) {
                markupItem(data)
            }
            else {
                markupList(data)
            }
        })
        .catch(error => console.log(error))
}, 500)
);

function markupItem(countryItem) {
    const markup = templateItem(countryItem);
    containerRef.insertAdjacentHTML('afterbegin', markup)
}

function markupList(countryList) {
    const markup = templateList(countryList);
    containerRef.insertAdjacentHTML('afterbegin', markup)
}