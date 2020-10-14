
const speed = 200; // The lower the slower


function achievementsCounter(number) {
    const targetNumber = achievement.number
    let start = 0
    counters.forEach(counter => {
        const updateCount = () => {
            const target = + targetNumber
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = targetNumber / speed;

            // console.log(inc);
            // console.log(count);

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

export { achievementsCounter }