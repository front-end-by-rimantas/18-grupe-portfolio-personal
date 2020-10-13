function generateService(service) {
    //validacija

    //logika
    //<div id="services_block" class="col-4 col-md-6 col-sm-12 box">
    const HTML = `<div class="header">
        <i class="fa fa-${service.logo}" aria-hidden="true">
            <a href="#" class="link">${service.title}</a>
        </i>
                </div >
            <p class="text">${service.description}</p>`;
    // output
    return HTML;
}

export { generateService }