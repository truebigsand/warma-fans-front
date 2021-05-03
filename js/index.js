var $ = mdui.$;

function MusicInit(){
    window.music_dlg = new mdui.Dialog('<div id="magic-button-dialog" class="mdui-dialog"><div class="mdui-dialog-title">来一首Warmaの小曲儿（</div><div class="mdui-dialog-content"><iframe frameborder="no" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=479480785&auto=1&height=66"></iframe></div></div>');
    music_dlg.open();
}
function VideoInit(){
    var videos = JSON.parse(ajax.get('http://154.8.203.168:5000/api/all', false))['data'];
    UpdateVideo(videos);
}
function MagicButtonInit() {
    window.MagicButtonDlg = new mdui.Dialog(ajax.get('/magic-button.html', false));
}
function UpdateVideo(videos){
    document.getElementById('data-table').innerHTML = '';
    for (let index in videos) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + videos[index]['aid'] + '</td>' + '<td>' + videos[index]['bvid'] + '</td>' + '<td>' + videos[index]['title'] + '</td>' + '<td><img style="max-height: 5em;" class="mdui-img-fluid mdui-img-rounded" src="' + videos[index]['pic'] + '"></td>';
        document.getElementById('data-table').appendChild(tr);
    }
}
function SearchVideo(keyword){
    var videos;
    if(keyword==''){
        videos = JSON.parse(ajax.get('https://warma-fans-back.vercel.app/all', false))['data'];
    }else{
        videos = JSON.parse(ajax.get('https://warma-fans-back.vercel.app/search/title/' + keyword, false))['data'];
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


