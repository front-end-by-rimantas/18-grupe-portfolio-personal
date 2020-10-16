import { formatAchievement } from './formatAchievement.js';

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

export { renderAchievements }