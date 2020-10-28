class RenderAchievements {
    constructor(params) {
        this.selector = params.selector;
        this.insertionPosition = params.insertionPosition || 'beforeend';
        this.data = params.data;

        this.DOM = null;
        this.achievementsDOM = null;
        this.achievementsValueDOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
        this.scrollAnimation();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        let HTML = '';

        for (let achievement of this.data) {
            HTML += `<div class="achievement col-3 col-md-6 col-sm-12">
            <p class="number">${achievement.number}</p>
            <h class="completed">${achievement.completed}</h>
        </div>`;
        }

        this.DOM.insertAdjacentHTML(this.insertionPosition, HTML);
        this.achievementsDOM = this.DOM.querySelectorAll('.achievement');
        this.achievementsValueDOM = this.DOM.querySelectorAll('.achievement > .number');
    }

    scrollAnimation() {
        const screenBottomY = scrollY + innerHeight;

        for (let i = 0; i < this.data.length; i++) {
            const ach = this.achievementsValueDOM[i];

            if (ach.dataset.run) {
                continue;
            }
            const achBottomY = ach.offsetTop + ach.offsetHeight;
            if (achBottomY < screenBottomY) {
                ach.dataset.run = true;

                let currentValue = 0;
                const finalValue = this.data[i].number;
                const timeAmount = 1;                   // seconds
                const fps = 24;                         // frames per second
                let step = 0;
                const totalSteps = timeAmount * fps;

                const timer = setInterval(() => {
                    step++;
                    currentValue = Math.ceil(finalValue / totalSteps * step);
                    this.achievementsValueDOM[i].innerText = currentValue;

                    if (currentValue >= finalValue) {
                        clearInterval(timer);
                    }
                }, 1000 / fps);
            }
        }
    }

    addEvents() {
        addEventListener('scroll', () => {
            this.scrollAnimation();
        })
    }
}



















function renderAchievements(params) {
    //params validation
    // console.log(params);

    //params logic
    let HTML = '';
    const achievementsDOM = document.querySelector(params.selector);
    const achievementsData = params.data;
    const achievementsCount = achievementsData.length

    for (let i = 0; i < achievementsCount; i++) {
        const achievement = achievementsData[i];
        HTML += formatAchievement(achievement);
    }
    //post logic validation

    achievementsDOM.innerHTML = HTML;

}

export { RenderAchievements }