(function($) {

    "use strict";

    var app = app || {};

    app.mobileMenu = (function() {

        var button = document.querySelector('.nav-btn'),
            body = document.body,
            openMenuClass = 'menu-open';

        function openMenu() {
            body.classList.add(openMenuClass);
        }

        function closeMenu() {
            body.classList.remove(openMenuClass);
        }

        function toggleMenu() {
            return body.classList.contains(openMenuClass) ? closeMenu() : openMenu();
        }

        function addEvents() {
            button.addEventListener('click', toggleMenu);
        }

        function init() {
            addEvents();
        }

        return {
            init: init
        };

    })();

    app.scroll = (function() {
        let $scrollContainer = $('main'),
            sectionSelector = 'section',
            menuSelector = '.main-menu',
            iconHiddenClass = 'icon-hidden',
            body = document.body,
            $containers = $scrollContainer.find('.container'),
            sectionsArr = Array.apply(null, body.querySelectorAll(sectionSelector)),
            menuEL = body.querySelector(menuSelector),
            currentSection = {},
            bodyStyles = window.getComputedStyle(body),
            currentColor = bodyStyles.getPropertyValue('--current-color');

        const getCurrentSection = () => sectionsArr.filter((el) => el.classList.contains('active'))[0];

        const updateCurrentSection = (index) => {
            currentSection.id = sectionsArr[index].id;
            currentSection.index = index;
        };

        const getAnchors = () => sectionsArr.map((el) => el.id);

        const updateCurrentColor = (index) => {
            currentColor = getComputedStyle(sectionsArr[index]).getPropertyValue('background-color');
            document.documentElement.style.setProperty('--current-color', currentColor);
        };

        const menuClick = (e) => {
            //console.log('menu clicked ', e.target.dataset.menuanchor);
        };

        const addMenuEvents = () => {
            let links = Array.apply(null, menuEL.childNodes);
            links.map((link) => link.addEventListener('click', menuClick));
        };

        const hideIcon = () => body.classList.add(iconHiddenClass);

        const showIcon = () => body.classList.remove(iconHiddenClass);

        function init() {
            $scrollContainer.pagepiling({
                direction: 'horizontal',
                navigation: false,
                menu: '.main-menu',
                anchors: getAnchors(),
                scrollingSpeed: 300,
                sectionSelector: sectionSelector,
                onLeave: function(index, nextIndex, direction) {
                    //console.log(index, nextIndex, direction);
                    updateCurrentColor(nextIndex - 1);

                    //remove animation class
                    //$containers.eq(index - 1).removeClass('show-content');
                },
                afterLoad: function(anchorLink, index) {
                    updateCurrentSection(index - 1);

                    if (index === 1) {
                        hideIcon();
                    }

                    else {
                        showIcon();
                    }
                    //add animation class
                    //$containers.eq(index - 1).addClass('show-content');
                },
                afterRender: function() {
                    let currentId = getCurrentSection().id,
                    index = getAnchors().indexOf(currentId);
                    //console.log(getCurrentSection().id);
                    if (index === 0) {
                        hideIcon();
                    }
                },
            });

            addMenuEvents();
        }

        return {
            init: init
        };

    })();

    app.scroll.init();
    app.mobileMenu.init();

})(jQuery);