import * as core from "../core";
import Controller from "properjs-controller";



class Video {
    constructor ( element ) {
        this.element = element;
        this.video = this.element.find( ".js-video-node" );
        this.videoData = this.video.data();

        if ( !this.videoData.autoplay ) {
            this.bind();
        }

        this.init();
    }


    init () {
        this.video.on( "loadedmetadata", () => {
            if ( this.videoData.autoplay ) {
                this.auto();
            }
        });

        if ( (window.innerWidth <= core.config.mobileMediaHack) && this.videoData.mobSrc ) {
            this.video[ 0 ].src = this.videoData.mobSrc;

        } else {
            this.video[ 0 ].src = this.videoData.src;
        }

        this.video[ 0 ].load();
    }


    bind () {
        this.bindVideo();
    }


    bindVideo () {
        this.video.on( "play", () => {
            this.element.addClass( "is-playing is-playback" );
        });

        this.video.on( "pause", () => {
            if ( !this.isScrubbing ) {
                this.element.removeClass( "is-playing" );
            }
        });

        this.video.on( "ended", () => {
            this.element.removeClass( "is-playing is-playback" );
        });

        this.video.on( "click", () => {
            if ( this.video[ 0 ].paused ) {
                this.video[ 0 ].play();

            } else {
                this.video[ 0 ].pause();
            }
        });
    }


    auto () {
        this.autoController = new Controller();
        this.autoController.go(() => {
            if ( core.util.isElementVisible( this.video[ 0 ] ) && this.video[ 0 ].paused ) {
                this.killAuto();

                this.video[ 0 ].play().catch(() => {
                    this.element.addClass( "is-notautoplay" );
                });
            }
        });
    }


    killAuto () {
        if ( this.autoController ) {
            this.autoController.stop();
            this.autoController = null;
        }
    }


    destroy () {
        this.killAuto();

        if ( !this.videoData.autoplay ) {
            this.video.off();
        }
    }
}



/******************************************************************************
 * Export
*******************************************************************************/
export default Video;
