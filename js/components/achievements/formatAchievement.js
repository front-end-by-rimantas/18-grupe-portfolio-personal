
function formatAchievement(achievement) {
    // console.log(achievement);

    // validation

    //logic

    return `<div class="col-3 col-md-6 col-sm-12 achievementBlock">
                <p class="number">${achievement.number}</p>
                <h class="completed">${achievement.completed}</h>
            </div>`
}

export { formatAchievement }