document.getElementById('year')?.append(new Date().getFullYear());

/* =========================================================
   ARCHITECTURE IMAGE VIEWER

   Thumbnail click:
       Opens image at ~94% browser width.

   Image click:
       Toggles between:
           94vw  -> normal large view
           150vw -> detailed zoomed view

========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           ELEMENTS
        ================================================= */

        const modalElement =
            document.getElementById(
                "architectureImageModal"
            );


        const modalImage =
            document.getElementById(
                "architectureModalImage"
            );


        const modalTitle =
            document.getElementById(
                "architectureImageModalLabel"
            );


        const viewport =
            document.getElementById(
                "architectureImageViewport"
            );


        if (
            !modalElement ||
            !modalImage ||
            !viewport
        ) {
            return;
        }


        const imageModal =
            new bootstrap.Modal(
                modalElement
            );


        let detailMode = false;



        /* =================================================
           LARGE DEFAULT VIEW
        ================================================= */

        function showLargeView() {

            detailMode = false;


            modalImage.classList.remove(
                "architecture-image-detail"
            );


            modalImage.classList.add(
                "architecture-image-large"
            );


            viewport.scrollTop = 0;
            viewport.scrollLeft = 0;

        }



        /* =================================================
           DETAIL VIEW
        ================================================= */

        function showDetailView() {

            detailMode = true;


            modalImage.classList.remove(
                "architecture-image-large"
            );


            modalImage.classList.add(
                "architecture-image-detail"
            );


            /*
             * After enlarging the image,
             * position approximately at the center.
             */

            requestAnimationFrame(
                function () {

                    const horizontalOverflow =
                        viewport.scrollWidth -
                        viewport.clientWidth;


                    const verticalOverflow =
                        viewport.scrollHeight -
                        viewport.clientHeight;


                    viewport.scrollLeft =
                        horizontalOverflow > 0
                            ? horizontalOverflow / 2
                            : 0;


                    viewport.scrollTop =
                        verticalOverflow > 0
                            ? verticalOverflow / 4
                            : 0;

                }
            );

        }



        /* =================================================
           FIND ALL ARCHITECTURE IMAGES
        ================================================= */

        const architectureImages =
            document.querySelectorAll(
                ".architecture-image-container img, " +
                ".architecture-gallery-image"
            );



        /* =================================================
           OPEN IMAGE
        ================================================= */

        architectureImages.forEach(
            function (image) {

                image.addEventListener(
                    "click",
                    function () {


                        modalImage.src =
                            image.currentSrc ||
                            image.src;


                        modalImage.alt =
                            image.alt ||
                            "Architecture Diagram";


                        if (modalTitle) {

                            modalTitle.textContent =
                                image.alt ||
                                "Architecture Diagram";

                        }


                        /*
                         * ALWAYS open large.
                         */

                        showLargeView();


                        imageModal.show();

                    }
                );

            }
        );



        /* =================================================
           CLICK IMAGE TO TOGGLE SIZE
        ================================================= */

        modalImage.addEventListener(
            "click",
            function () {


                if (detailMode) {

                    showLargeView();

                } else {

                    showDetailView();

                }

            }
        );



        /* =================================================
           CLEANUP
        ================================================= */

        modalElement.addEventListener(
            "hidden.bs.modal",
            function () {


                modalImage.src = "";

                showLargeView();

            }
        );


    }
);