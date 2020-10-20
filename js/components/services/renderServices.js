import { generateService } from './generateService.js';

function renderServices(params) {
    //validation
    //params  not-empty
    if (params.selector === '') {
        console.error("ERROR: selector's value cannot be empty");
    }
    //selector not string
    if (typeof params.selector === 'number') {
        console.error("ERROR: selector's type cannot be a number");
    }
    //selector not null
    if (params.selector === null) {
        console.error("ERROR: selector's value cannot be null");
    }
    let HTML = '';
    const servicesDOM = document.querySelector(params.selector);
    const servicesData = params.data;
    const servicesCount = servicesData.length;

    for (let i = 0; i < servicesCount; i += 1) {
        const service = servicesData[i];
        HTML += generateService(service);
    }
    
    servicesDOM.innerHTML = HTML;
}

export { renderServices }