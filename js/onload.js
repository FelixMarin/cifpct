window.onload = init;

function init() {    
    $('.datepicker').datepicker({
        iconsLibrary: 'fontawesome',
        icons: {
            rightIcon: '<span class="fa fa-calendar"></span>'
        }
    });

    $('.timepicker').timepicker({
        iconsLibrary: 'fontawesome',
        icons: {
            rightIcon: '<span class="fa fa-clock-o"></span>'
        }
    });
    $(document).ready(function() {
    $('.js-example-basic-multiple').select();
});

if(window.document.getElementById('fr-action') === null || 
        window.document.getElementById('fr-action') === undefined) {
    //do_nothing
} else {
    //window.document.getElementById('fr-action').click();
}
}