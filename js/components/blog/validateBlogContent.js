function validateBlogContent(content) {
    let errors = [];

    if (typeof content.content !== 'object') {
        errors.push('ERROR: blog\'o turinys turi buti objektas ');
    }

    const turinys = content.content.data;

    for (let i = 0; i < turinys.length; i += 1) {
        // blog's header (id & image validation)
        if (typeof turinys[i].id !== 'number') {
            errors.push('ERROR: id turi buti skaicius');
        }
        if (turinys[i].id === '') {
            errors.push('ERROR: id negali buti tuscias');
        }

        if (typeof turinys[i].image !== 'string') {
            errors.push('ERROR: nuotrauka turi buti string tipo');
        }
        if (turinys[i].image === '') {
            errors.push('ERROR: nuotrauka negali buti tuscia');
        }
        // blog's author's info validation
        if (typeof turinys[i].author !== 'object' || turinys[i].author === '') {
            errors.push('ERROR: autoriaus duomenys turi buti objektas');
        }
        if (typeof turinys[i].author.avatar !== 'string') {
            errors.push('ERROR: nuotrauka turi buti string tipo');
        }
        if (turinys[i].author.avatar === '') {
            errors.push('ERROR: avataras negali buti tuscias');
        }
        if (turinys[i].author.name === '') {
            errors.push('ERROR: vardas negali buti tuscias');
        }
        if (turinys[i].author.lastname === '') {
            errors.push('ERROR: pavarde negali buti tuscia');
        }
        // blog's title validation
        if (typeof turinys[i].title !== 'string') {
            errors.push('ERROR: blog\'o turinio pavadinimas turi buti tekstinis');
        }
        if (turinys[i].title === '') {
            errors.push('ERROR: blog\'o turinio pavadinimas negali buti tuscias');
        }
        // blog's text validation
        if (typeof turinys[i].text !== 'string') {
            errors.push('ERROR: blog\'o turinio tekstas turi buti tekstinis');
        }
        if (turinys[i].text === '') {
            errors.push('ERROR: blog\'o turinio tekstas negali buti tuscias');
        }
    }

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i += 1) {
            console.error(errors[i]);
        }
    }
}

export { validateBlogContent }