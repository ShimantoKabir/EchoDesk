const {desktopCapturer} = require('electron');

$(document).ready(function() {
    showSources();
});

$("#btnTs").click(function(){
    showSources();
});

function showSources() {
    desktopCapturer.getSources({ types:['window', 'screen'] }).then(async sources => {

        let entireScreen =sources.find(obj=>{ return obj.name === 'Entire Screen';})
        console.log(entireScreen.thumbnail.toDataURL());

        $("#scImg").attr("src",entireScreen.thumbnail.toDataURL());

    });
}
