(function(e,t,n){var r=e.querySelectorAll("html")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);

'use strict';

;( function( $, window, document, undefined )
{
    // feature detection for drag&drop upload

    var isAdvancedUpload = function()
        {
            var div = document.createElement( 'div' );
            return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
        }();


    // applying the effect for every form

    $( '.box' ).each( function()
    {
        var $form		 = $( this ),
            $input		 = $form.find( 'input[type="file"]' ),
            $label		 = $form.find( 'label' ),
            $errorMsg	 = $form.find( '.box-error span' ),
            $restart	 = $form.find( '.box-restart' ),
            droppedFiles = false,
            showFiles	 = function( files )
            {
                $label.text( files.length > 1 ? ( $input.attr( 'data-multiple-caption' ) || '' ).replace( '{count}', files.length ) : files[ 0 ].name );
            };

        // letting the server side to know we are going to make an Ajax request
        $form.append( '<input type="hidden" name="ajax" value="1" />' );

        // automatically submit the form on file select
        $input.on( 'change', function( e )
        {
            showFiles( e.target.files );

            
            $form.trigger( 'submit' );

            
        });


        // drag&drop files if the feature is available
        if( isAdvancedUpload )
        {
            $form
            .addClass( 'has-advanced-upload' ) // letting the CSS part to know drag&drop is supported by the browser
            .on( 'drag dragstart dragend dragover dragenter dragleave drop', function( e )
            {
                // preventing the unwanted behaviours
                e.preventDefault();
                e.stopPropagation();
            })
            .on( 'dragover dragenter', function() //
            {
                $form.addClass( 'is-dragover' );
            })
            .on( 'dragleave dragend drop', function()
            {
                $form.removeClass( 'is-dragover' );
            })
            .on( 'drop', function( e )
            {
                droppedFiles = e.originalEvent.dataTransfer.files; // the files that were dropped
                showFiles( droppedFiles );

                
                $form.trigger( 'submit' ); // automatically submit the form on file drop

                
            });
        }


        // if the form was submitted

        $form.on( 'submit', function( e )
        {
            // preventing the duplicate submissions if the current one is in progress
            if( $form.hasClass( 'is-uploading' ) ) return false;

            $form.addClass( 'is-uploading' ).removeClass( 'is-error' );

            if( isAdvancedUpload ) // ajax file upload for modern browsers
            {
                e.preventDefault();

                // gathering the form data
                var ajaxData = new FormData( $form.get( 0 ) );
                if( droppedFiles )
                {
                    $.each( droppedFiles, function( i, file )
                    {
                        ajaxData.append( $input.attr( 'name' ), file );
                    });
                }

                // ajax request
                $.ajax(
                {
                    url: 			$form.attr( 'action' ),
                    type:			$form.attr( 'method' ),
                    data: 			ajaxData,
                    dataType:		'json',
                    cache:			false,
                    contentType:	false,
                    processData:	false,
                    complete: function()
                    {
                        $form.removeClass( 'is-uploading' );
                    },
                    success: function( data )
                    {
                        $form.addClass( data.success == true ? 'is-success' : 'is-error' );
                        if( !data.success ) $errorMsg.text( data.error );
                    },
                    error: function()
                    {
                        alert( 'Error. Please, contact the webmaster!' );
                    }
                });
            }
            else // fallback Ajax solution upload for older browsers
            {
                var iframeName	= 'uploadiframe' + new Date().getTime(),
                    $iframe		= $( '<iframe name="' + iframeName + '" style="display: none;"></iframe>' );

                $( 'body' ).append( $iframe );
                $form.attr( 'target', iframeName );

                $iframe.one( 'load', function()
                {
                    var data = $.parseJSON( $iframe.contents().find( 'body' ).text() );
                    $form.removeClass( 'is-uploading' ).addClass( data.success == true ? 'is-success' : 'is-error' ).removeAttr( 'target' );
                    if( !data.success ) $errorMsg.text( data.error );
                    $iframe.remove();
                });
            }
        });


        // restart the form if has a state of error/success

        $restart.on( 'click', function( e )
        {
            e.preventDefault();
            $form.removeClass( 'is-error is-success' );
            $input.trigger( 'click' );
        });

        // Firefox focus bug fix for file input
        $input
        .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
        .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });

})( jQuery, window, document );
