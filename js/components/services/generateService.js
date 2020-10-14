function generateService(service) {
    //validacija

    //logika

    // <div id="services_block" class="col-4 col-md-6 col-sm-12 box">
    //     box
    //             <div class="header">
    //         <i class="fa fa-pie-chart logo" aria-hidden="true">
    //             <a href="#" class="link">Web Design</a>
    //         </i>
    //     </div>
    //     <p class="text">“It is not because things are difficult that we do not dare; it is because we do not
    //                 dare that they are difficult.”</p>
    // </div>

    //<div id="services_block" class="col-4 col-md-6 col-sm-12 box">

    const HTML = `<div id="services_block" class="col-4 col-md-6 col-sm-12 box">
                    <span class="fa fa-${service.logo} logo" aria-hidden="true">
                    <a href="#" class="link">${service.title}</a>
        	        </span>
                    <p class="text">${service.description}</p>
                </div >`;
    // output
    return HTML;
}

export { generateService }