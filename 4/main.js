let x = prompt('Введіть число');
function getSqrt(numb) {
    let res = (numb < 0) ? 'Введіть додатнє число.' :
        (isNaN(numb)) ? 'Повинно бути числове значення' :
            (numb == '' || numb == ' ') ? ' Будь ласка, введіть число!' :
                `Квадратний корінь з ${numb} дорівнює  ${Math.sqrt(numb)}`;
    console.log(res);
}
getSqrt(x);
