function generateService(service) {
//validation
//1 n-empty object or not null
if (typeof service !== 'object' || service === null){
  console.error("ERROR: service must be object type");
  return '';
}
//2 logo validation
if (typeof service.logo !== 'string') {
  console.error("ERROR: service logo must be string type");
} if (service.logo === '') {
  console.error('ERROR: service logo cannot be an empty string');
}
//3 service title, not nbr or not empty
if (typeof service.title !== 'string') {
  console.error("ERROR: service title cannot be a number");
} if (service.title === '') {
  console.error('ERROR: service title cannot be an empty string');
}
//4 service text not nbr or not empty
if (typeof service.description !== 'string') {
  console.error("ERROR: service description cannot be a number");
} if (service.description === '') {
  console.error('ERROR: service description cannot be an empty string');
}

//logic
  const HTML = `<div class="col-4 col-md-6 col-sm-12">
                    <div class="single-service">  
                      <div>
                        <i class="logo fa fa-${service.logo}" aria-hidden="true"></i>
                        <a href="#">${service.title}</a>
                      </div>  
                        <p class=>${service.description}</p>  
                    </div>
                </div >`;
//output                
  return HTML;
}

export { generateService }