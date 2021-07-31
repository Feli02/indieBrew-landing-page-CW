//Play an animation back on second click

let iconMenu = document.querySelector('.bodymovinanim');

    let animationMenu = bodymovin.loadAnimation({
            container: iconMenu,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://gist.githubusercontent.com/Feli02/6681ad4188eaed02d26d1852c5b62152/raw/9f3e70d95dc8e801a603b3b3846e809e5d19389d/menuV2.json"
    });

    var directionMenu = 1;
      iconMenu.addEventListener('click', (e) => {
      animationMenu.setDirection(directionMenu);
      animationMenu.play();
      directionMenu = -directionMenu;
    });