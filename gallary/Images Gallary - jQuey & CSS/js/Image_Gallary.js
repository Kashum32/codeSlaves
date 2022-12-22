

$().ready(function () {

    $('#divContainer img').on({
        mouseover: function(){
            $(this).css({
                'cursor':'pointer',
                'border-color': 'red'
            })
        },

        mouseout: function(){
            $(this).css({
                'cursor':'default',
                'border-color': '#fff'
            })
        },

        click: function() {
            var imageUrl = $(this).attr('src');
            $('#mainImages').attr('src', imageUrl);
        }


    });

});