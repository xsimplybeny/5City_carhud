$(function () {
    function display(bool) {
        if (bool) {
            $(".speedometr").fadeIn();
        } else {
            $(".speedometr").fadeOut();
        }
    }

    display(false)

    window.addEventListener('message', function (event) {
        var item = event.data;
        if (item.typeSH === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
        else if (item.action == "toggle"){
            if (item.show){
                $(".speedometr").show()
                $(".streetlabel").show()
            }
            else{
                $(".speedometr").hide()
                $(".streetlabel").hide()
            }
        }
    })
})