$(function () {
    //navのbuttonをクリックしたら発火
    $('nav button').on('click', function(){
        //navのulをON/OFF
        $('nav ul').slideToggle()
    })
})