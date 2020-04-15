document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector('#select');
    const icons = document.querySelectorAll('.icon');

    const setRootFontSize = (icon, value) => {
        value = parseInt(value, 10);
        const marginMap = {
            25: -50,
            50: -15,
            100: 60
        }

        icon.style.transform = `scale(${value / 100})`;
        icon.style.margin = `${marginMap[value]}px`
    }

    const setIconsScale = (value) => {
        Array.prototype.slice.call(icons).forEach((icon) => {
            setRootFontSize(icon, value);
        })
    }
    select.addEventListener('change', ({target: {value}}) => {
        setIconsScale(value)
    })
    setIconsScale(select.value)
});