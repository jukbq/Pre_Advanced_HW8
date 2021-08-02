let bw_arr: string[] = []

function add_btn() {
    let inp_bw: any = $('#inp_bw').val()
    if (inp_bw !== '' && !inp_bw.match(/\s/)) {
        $('.inp_bw').removeClass('valid')
        bw_arr.push(inp_bw)
        $('#inp_bw').val('')
        $('.inp_bw').attr("placeholder", "Word here...");;
       
        let bad = '<ul>'
        for (let i = 0; i < bw_arr.length; i++) {
            bad += '<li>';
            bad += bw_arr[i];
            bad += ',  ';
            bad += '</li>';
        }
        bad += '</ul>';
        $('.vw_list').html(bad);

    } else {
        $('.inp_bw').addClass('valid')
        $('#inp_bw').val('')
        $('.inp_bw').attr("placeholder", "Please write a word!");;
    }
}

function reset_btn() {

}