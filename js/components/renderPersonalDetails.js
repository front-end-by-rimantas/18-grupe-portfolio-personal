function renderPersonalDetails(){
    const personalDataDOM = document.getElementById('personal');
    personalDataDOM.innerHTML = `<div class="col-6 personal-left col-lg-6 col-md-12">
                                    <img src="./img/about-img.png" alt="photo" class="personal-img" >
                                </div>
                                <div class="col-5 personal-right col-lg-6 col-md-12 ">
                                    <h6>About me</h2>
                                    <h2>Personal Details</h2>
                                    <p>Here, I focus on a range of
                                     items and features that we use in
                                    life without giving them a second
                                    thought. such as Coca Cola. Dolor
                                    sit amet, consectetur adipisicing
                                    elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco.</p>
                                    <a href="#">View Full Details</a>
                                </div>`;
}
export { renderPersonalDetails }