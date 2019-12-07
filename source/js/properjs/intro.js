import * as core from "./core";
// import Controller from "properjs-controller";


/**
 *
 * @public
 * @namespace intro
 * @description Performs the branded load-in screen sequence.
 *
 */
const intro = {
    init () {
        this.element = core.dom.intro;

        setTimeout(() => {
            this.element.removeClass( "is-active" );
            core.emitter.fire( "app--intro-teardown" );

        }, 2000 );

        setTimeout(() => {
            this.element.remove();

        }, 3000 );
    }
};


/******************************************************************************
 * Export
*******************************************************************************/
export default intro;
