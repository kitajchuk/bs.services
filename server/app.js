const config = require( "../clutch.config" );
const router = require( "./core/router" );
const path = require( "path" );
const fs = require( "fs" );



// Handle main content-type context
router.on( "casestudy", {
    context ( context, cache, req ) {
        const item = context.get( "item" );
        const items = context.get( "docs" )[ "casestudy" ];
        const index = items.indexOf( item ) + 1;

        if ( !items[ index ] ) {
            context.set( "next", items[ 0 ] );

        } else {
            context.set( "next", items[ index ] );
        }

        return context;
    }
});



router.init();
