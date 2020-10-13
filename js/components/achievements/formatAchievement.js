
function formatAchievement(achievement) {
    // console.log(achievement);

    // validation

    //logic

    return `<div class="col-3 col-md-6 col-sm-12">
                <p>${achievement.number}</p>
                <h>${achievement.completed}</h>
            </div>`

}

export { formatAchievement }