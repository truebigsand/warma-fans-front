var $ = mdui.$;
const BASE_API_URL = "https://wa-api.truebigsand.top";

function MusicInit(){
    window.music_dlg = new mdui.Dialog('<div id="magic-button-dialog" class="mdui-dialog"><div class="mdui-dialog-title">来一首Warmaの小曲儿（</div><div class="mdui-dialog-content"><iframe frameborder="no" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=479480785&auto=1&height=66"></iframe></div></div>');
    music_dlg.open();
}
function VideoInit(){
    var videos = JSON.parse(ajax.get(BASE_API_URL + '/all', false))['data'];
    UpdateVideo(videos);
}
function MagicButtonInit() {
    window.MagicButtonDlg = new mdui.Dialog(ajax.get('/magic-button.html', false));
}
function UpdateVideo(videos){
    document.getElementById('data-table').innerHTML = '';
    for (let index in videos) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + videos[index]['aid'] + '</td>' + '<td>' + videos[index]['bvid'] + '</td>' + '<td>' + videos[index]['title'] + '</td>' + '<td><a class="mdui-btn mdui-ripple" target="_blank" href="' + videos[index]['pic'] + '">点我</a></td>';//<button onclick="ToBlackMode();" id="magic_button" class="mdui-btn mdui-ripple mdui-color-red-400">要不点一下试试？（</button>
        document.getElementById('data-table').appendChild(tr);
    }
}
function SearchVideo(keyword){
    var videos;
    if(keyword==''){
        videos = JSON.parse(ajax.get(BASE_API_URL + '/all', false))['data'];
    }else{
        videos = JSON.parse(ajax.get(BASE_API_URL + '/search/title/' + keyword, false))['data'];
    }
    UpdateVideo(videos);
}
$(function(){
    $('#appbar-placeholder').height($('.mdui-appbar').height());
    MusicInit();
    VideoInit();
    MagicButtonInit();
    //$('.mdui-col-md-10').find('a').attr('target','blank');
    setTimeout(function () {
        MagicButtonDlg.open();
    }, rand(5000, 20000));
});


