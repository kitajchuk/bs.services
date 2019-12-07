import * as core from "../core";


/**
 *
 * @public
 * @global
 * @class SwitchController
 * @classdesc Handle classNames for theme toggling
 *
 */
class SwitchController {
    constructor ( element ) {
        this.element = element;
        this.data = this.element.data();

        if ( this.data.switch === "light" ) {
            core.dom.html.addClass( "is-theme-light" );
        }
    }


    destroy () {
        core.dom.html.removeClass( "is-theme-light" );
    }
}



/******************************************************************************
 * Export
*******************************************************************************/
export default SwitchController;
