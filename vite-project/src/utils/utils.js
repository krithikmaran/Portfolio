// src/utils/utils.js
export const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const scrambleText = (element) => {
    let iteration = 0;
    let interval = setInterval(() => {
        element.innerText = element.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return element.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= element.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};
