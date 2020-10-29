function renderPlans(data) {
    let HTML = ''
    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="price-item ">
                    <div class="top-section">
                        <h1>${data[i].id}</h1>
                        <h4>${data[i].title}</h4>
                        <p>${data[i].description}</p>
                    </div>
                    <div class="middle-section">
                        <ul>
                            <li>${data[i].feature1}</li>
                            <li>${data[i].feature2}</li>
                            <li>${data[i].feature3}</li>
                        </ul>
                    </div>
                    <div class="bottom-section">
                        <h4>&euro;${data[i].price}</h4>
                        <a href="" class="btn-white">Buy now</a>
                    </div>
                </div>`
    }

    return document.querySelector(".plans").innerHTML = HTML;
}

export { renderPlans } 