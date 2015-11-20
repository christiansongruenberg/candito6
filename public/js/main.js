(function($, viewport){
    $(document).ready(function() {
        // Executes in SM, MD and LG breakpoints
        if(viewport.is('<=sm')) {
            $('.container').addClass('container-fluid').removeClass('container')
            $('#nav-list').removeClass('in');
        }
    });
})(jQuery, ResponsiveBootstrapToolkit);