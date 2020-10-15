function generateService(service) {

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

  const HTML = `<div class="col-4 col-md-6 col-sm-12">
                    <div class="singleservice">  
                      <i class="fa fa-${service.logo}" aria-hidden="true"></i>
                      <a href="#">${service.title}</a>
                      <p class=>${service.description}</p>
                    </div>
                </div >`;
  // output
  return HTML;
}

export { generateService }