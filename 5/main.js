let bw_arr = [];
let arr_string = [];
let arr_cenzor = [];
function add_btn() {
    let inp_bw = $('#inp_bw').val();
    if (inp_bw !== '' && !inp_bw.match(/\s/)) {
        $('.inp_bw').removeClass('valid');
        bw_arr.push(inp_bw);
        $('#inp_bw').val('');
        $('.inp_bw').attr("placeholder", "Word here...");
        ;
        let bad = '<ul>';
        for (let i = 0; i < bw_arr.length; i++) {
            bad += '<li>';
            bad += bw_arr[i];
            bad += ',  ';
            bad += '</li>';
        }
        bad += '</ul>';
        $('.bw_list').html(bad);
    }
    else {
        $('.inp_bw').addClass('valid');
        $('#inp_bw').val('');
        $('.inp_bw').attr("placeholder", "Please write a word!");
        ;
    }
}
function reset_btn() {
    $('.bw_list').empty();
    $('.inp_bw').attr("placeholder", "Please write a word!");
    ;
}
function cenzor_btn() {
    let inp_text = $('.inp_text').val();
    let symbol = ",.!?-;<>[]()@#$%^&*";
    let tempString = "";
    if (inp_text !== '') {
        for (let i = 0; i < inp_text.length; i++) {
            if (symbol.indexOf(inp_text[i]) == -1) {
                tempString += inp_text[i];
            }
        }
        arr_string = tempString.split(' ');
        let dublikate = arr_string.filter(function (val) {
            return bw_arr.indexOf(val) != -1;
        });
        console.log(arr_string);
        console.log(inp_text);
        console.log(tempString);
        console.log(dublikate);
        console.log(arr_cenzor);
    }
    else {
        $('.inp_text').addClass('valid');
        $('.inp_text').val('');
        $('.inp_text').attr("placeholder", "Please write a word!");
        ;
    }
}
