import { generateService } from './generateService.js';

function renderServices(params) {
    // params validation

    // logic
    let HTML = '';
    const servicesDOM = document.querySelector(params.selector);
    const servicesData = params.data;
    const servicesCount = servicesData.length;

    for (let i = 0; i < servicesCount; i += 1) {
        const service = servicesData[i];
        HTML += generateService(service);
    }
    //output
    servicesDOM.innerHTML = HTML;
}

export { renderServices }