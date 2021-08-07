let bw_arr = [];
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
function cenzor_btn() {
    let inp_text = $('.inp_text').val();
    if (inp_text !== '') {
        bw_arr.forEach(word => {
            inp_text = inp_text.replace(word, function (mach) {
                let x = mach.length;
                let y = '';
                for (let i = 0; i < x; i++) {
                    y += "*";
                }
                return y;
            });
        });
        $('.inp_text').val('');
        $('.inp_text').val(inp_text);
        ;
    }
    else {
        $('.inp_text').addClass('valid');
        $('.inp_text').val('');
        $('.inp_text').attr("placeholder", "Please write a word!");
        ;
    }
}
function reset_btn() {
    $('.bw_list').empty();
    $('.inp_bw').attr("placeholder", "Please write a word!");
    ;
}
