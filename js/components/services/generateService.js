function generateService(service) {

  const HTML = `<div class="col-4 col-md-6 col-sm-12">
                    <div class="single-service">  
                        <i class="logo fa fa-${service.logo}" aria-hidden="true"></i>
                        <a href="#">${service.title}</a>
                        <p class=>${service.description}</p> 
                    </div>
                </div >`;
  // output
  return HTML;
}

export { generateService }