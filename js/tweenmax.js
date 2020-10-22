
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    TweenMax.from(".heroImg", 1, {
      delay: 2,
      opacity: 0,
      y: -200,
      ease: Expo.easeInOut
    })

    TweenMax.from(".hero", 1, {
        delay: 2,
        opacity: 0,
        y: -200,
        ease: Expo.easeInOut
      })

    TweenMax.from(".leaves .layer:nth-child(1)", 2, {
      delay: 2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(2)", 2, {
      delay: 2.1,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(3)", 2, {
      delay: 2.2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(4)", 2, {
      delay: 2.3,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(5)", 2, {
      delay: 2.5,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".title", 1, {
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".tagline", 1, {
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".pages", 1, {
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".more", 1, {
      delay: 1.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".desc", 1, {
      delay: 1.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".arrows", 1, {
      delay: 2,
      opacity: 0,
      ease: Expo.easeInOut
    })
    
    TweenMax.from(".copy", 2, {
      delay: 1.4,
      opacity: 0,
      y: -400,
      ease: Expo.easeInOut
    })

    TweenMax.from(".percent", 2, {
      delay: 2.4,
      opacity: 0,
      y: -400,
      ease: Expo.easeInOut
    })