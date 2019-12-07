require( "../../sass/screen.scss" );


import router from "./router";
import * as core from "./core";
import intro from "./intro";
import Analytics from "./class/Analytics";
import $ from "properjs-hobo";


/**
 *
 * @public
 * @class App
 * @classdesc Load the App application Class to handle it ALL.
 *
 */
class App {
    constructor () {
        this.core = core;
        this.intro = intro;
        this.router = router;

        this.bind();
        this.init();
        this.info();
    }


    info () {
        core.dom.main.on( "click", ".js-toggler", ( e ) => {
            const elem = $( e.target );
            const target = $( `.${elem.data().target}` );

            elem.toggleClass( "is-active" );
            target.toggleClass( "is-active" );
        });
    }


    bind () {
        this.core.emitter.on( "app--intro-teardown", () => {
            this.core.log( "App Intro Teardown" );
        });

        this.core.emitter.on( "app--page-teardown", () => {
            this.core.log( "App Page Teardown" );
        });
    }


    init () {
        // Core
        this.core.detect.init();

        // Views
        this.intro.init();

        // Controller
        this.router.init();

        // Analytics
        this.analytics = new Analytics();
    }
}


/******************************************************************************
 * Expose
*******************************************************************************/
window.app = new App();


/******************************************************************************
 * Export
*******************************************************************************/
export default window.app;
