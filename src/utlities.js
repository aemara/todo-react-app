/* export let isMobileVersion = window.innerWidth > 768 ? false : true; */
export const generateID = () => {
    return Math.floor(Math.random() * 100 + 1);
}

/* window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
        isMobileVersion = false;
    }
}) */