const projectsData = [
    { 
        id: 1, 
        nameProject: "Slider Card", 
        urlProject: "https://expanding-cards-day1.netlify.app/", 
        urlImg: "https://i.ibb.co/mCPrNHJ/Captura-de-pantalla-2023-09-03-092442.png" 
    },
    { 
        id: 2, 
        nameProject: "Progress Steps", 
        urlProject: "https://progress-steps-day2.netlify.app/", 
        urlImg: "https://i.ibb.co/dpRBF9M/Captura-de-pantalla-2023-09-03-092728.png" 
    },
    { 
        id: 3, 
        nameProject: "Rotating Navigation", 
        urlProject: "https://rotating-navigation-day3.netlify.app/", 
        urlImg: "https://i.ibb.co/wcZrvV2/Captura-de-pantalla-2023-09-03-091818.png" 
    },
    { 
        id: 4, 
        nameProject: "Hidden Search", 
        urlProject: "https://hidden-search-day4.vercel.app/", 
        urlImg: "https://i.ibb.co/C6zFP1j/Captura-de-pantalla-2023-10-08-100758.png" 
    },
    { 
        id: 5, 
        nameProject: "Blurry Loading", 
        urlProject: "https://blurry-loading-day5.vercel.app/", 
        urlImg: "https://i.ibb.co/74yfVmy/Captura-de-pantalla-2023-10-08-100822.png" 
    },
    { 
        id: 6, 
        nameProject: "Scroll Animation", 
        urlProject: "https://scroll-animation-day6.vercel.app/", 
        urlImg: "https://i.ibb.co/Zc787Wn/Captura-de-pantalla-2023-10-08-100903.png" 
    },
    { 
        id: 7, 
        nameProject: "Split Landing Page", 
        urlProject: "https://codepen.io/BRivasTorres/pen/MWzqoaj", 
        urlImg: "https://i.ibb.co/s2K9q4L/Captura-de-pantalla-2023-10-08-100948.png" 
    },
    { 
        id: 8, 
        nameProject: "Form Wave", 
        urlProject: "https://codepen.io/BRivasTorres/pen/Jjeawow", 
        urlImg: "https://i.ibb.co/qxYpMc7/Captura-de-pantalla-2023-10-08-101020.png" 
    },
    { 
        id: 9, 
        nameProject: "Sound Board", 
        urlProject: "https://sound-board-day9.netlify.app/", 
        urlImg: "https://i.ibb.co/HPgcHWb/Captura-de-pantalla-2023-10-08-101045.png" 
    },
    { 
        id: 10, 
        nameProject: "Dad Jokes", 
        urlProject: "https://dad-jokes-day10.netlify.app/", 
        urlImg: "https://i.ibb.co/qjYC2Cx/Captura-de-pantalla-2023-10-08-101109.png" 
    },
    { 
        id: 11, 
        nameProject: "Key Events", 
        urlProject: "https://key-events-day11.netlify.app/", 
        urlImg: "https://i.ibb.co/FJLdX4C/img11.png" 
    },
    { 
        id: 12, 
        nameProject: "Faq Collapse", 
        urlProject: "https://faq-collapse-day12.netlify.app/", 
        urlImg: "https://i.ibb.co/YtThJLR/img12.png" 
    },
    { 
        id: 13, 
        nameProject: "Random Choice Picker", 
        urlProject: "https://random-choice-picker-day13.netlify.app/", 
        urlImg: "https://i.ibb.co/ZzfpfNG/img13.png" 
    },
    { 
        id: 14, 
        nameProject: "Animated Navigation", 
        urlProject: "https://animated-navigation-day14.netlify.app/", urlImg: "https://i.ibb.co/m8wTgK3/img14.png" 
    },
    { 
        id: 15, 
        nameProject: "Incrementing Counter", 
        urlProject: "https://incrementing-counter-day15.netlify.app/", 
        urlImg: "https://i.ibb.co/RcrTpHB/img15.png" 
    },
    { 
        id: 16, 
        nameProject: "Drink Water", 
        urlProject: "https://drink-water-day16.netlify.app/", 
        urlImg: "https://i.ibb.co/274kCXC/16.png" 
    },
    { 
        id: 17, 
        nameProject: "Movie App", 
        urlProject: "https://movie-app-day17.netlify.app/", 
        urlImg: "https://i.ibb.co/ChstRqG/17.png" 
    },
    { 
        id: 18, 
        nameProject: "Slider Background", 
        urlProject: "https://background-slider-day18.netlify.app/", 
        urlImg: "https://i.ibb.co/93BxDKj/18.png" 
    },
    { 
        id: 19, 
        nameProject: "Theme Clock", 
        urlProject: "https://theme-clock-day19.netlify.app/", 
        urlImg: "https://i.ibb.co/fCGxsCy/19.png" 
    },
    { 
        id: 20, 
        nameProject: "Button Ripplet Effect", 
        urlProject: "https://button-ripple-effect-day20.netlify.app/", 
        urlImg: "https://i.ibb.co/9VB554L/20.png" 
    },
    { 
        id: 21, 
        nameProject: "Drag N Drop", 
        urlProject: "https://drag-n-drop-day21.netlify.app/", 
        urlImg: "https://i.ibb.co/6n4LqqL/21.png" 
    },
    { 
        id: 22, 
        nameProject: "Drawing App", 
        urlProject: "https://drawing-app-day22.netlify.app/", 
        urlImg: "https://i.ibb.co/v4kGr4Z/22.png" 
    },
    { 
        id: 23, 
        nameProject: "Kinetic Loader", 
        urlProject: "https://kinetic-loader-day23.netlify.app/", 
        urlImg: "https://i.ibb.co/ZKHRYN9/23.png" 
    },
    { 
        id: 24, 
        nameProject: "Content Placeholder", 
        urlProject: "https://content-placeholder-day24.netlify.app/", 
        urlImg: "https://i.ibb.co/5c8cQdT/24.png" 
    },
    { 
        id: 25, 
        nameProject: "Sticky Navigation", 
        urlProject: "https://sticky-navigation-day25.netlify.app/", 
        urlImg: "https://i.ibb.co/FBGfRsW/25.png" 
    },
    { 
        id: 26, 
        nameProject: "Double Vertical Slider", 
        urlProject: "https://double-verticald-slider-day26.netlify.app/", 
        urlImg: "https://i.ibb.co/xMNjbQF/26.png" 
    },
    { 
        id: 27, 
        nameProject: "Toas Notification", 
        urlProject: "https://toast-notification-day27.netlify.app/", 
        urlImg: "https://i.ibb.co/kyC3x5G/27.png" 
    },
    { 
        id: 28, 
        nameProject: "Github Profiles", 
        urlProject: "https://github-profiles-day28.netlify.app/", 
        urlImg: "https://i.ibb.co/cyXk1gJ/28.png" },
    { 
        id: 29, 
        nameProject: "Double Click Heart", 
        urlProject: "https://double-click-notification-day29.netlify.app/", 
        urlImg: "https://i.ibb.co/Nrbz4xh/29.png" 
    },
    { 
        id: 30, 
        nameProject: "Auto Text Effect", 
        urlProject: "https://auto-text-effect-day29.netlify.app/", 
        urlImg: "https://i.ibb.co/Dg4SnHJ/30.png" 
    },
    { 
        id: 31, 
        nameProject: "Password Generator", 
        urlProject: "https://password-generator-day31.netlify.app/", 
        urlImg: "https://i.ibb.co/GFcw5rC/31.png" 
    },
    { 
        id: 32, 
        nameProject: "Good, Cheap, Fast", 
        urlProject: "https://good-cheap-fast-day32.netlify.app/", 
        urlImg: "https://i.ibb.co/6XgMPgS/32.png" 
    },
    { 
        id: 33, 
        nameProject: "Notes App", 
        urlProject: "https://notes-app-day33.netlify.app/", 
        urlImg: "https://i.ibb.co/CP9SZgh/33.png" 
    },
    { 
        id: 34, 
        nameProject: "Animated Countdown", 
        urlProject: "https://animated-countdown-day34.netlify.app/", 
        urlImg: "https://i.ibb.co/3dkpxfZ/34.png" 
    },
    { 
        id: 35, 
        nameProject: "Image Carousel", 
        urlProject: "https://image-carousel-day35.netlify.app/", 
        urlImg: "https://i.ibb.co/gP4GpRJ/35.png" 
    },
    { 
        id: 36, 
        nameProject: "Hoverboard", 
        urlProject: "https://hoverboard-day36.netlify.app/", 
        urlImg: "https://i.ibb.co/K55F619/36.png" 
    },
    { 
        id: 37, 
        nameProject: "Pokedex", 
        urlProject: "https://pokedex-day37.netlify.app/", 
        urlImg: "https://i.ibb.co/RcmH6tc/37.png" 
    },
    { 
        id: 38, 
        nameProject: "Mobile Tab Navigation", 
        urlProject: "https://movile-tab-navigation.netlify.app/", 
        urlImg: "https://i.ibb.co/KsGPGcc/38.png" 
    },
    { 
        id: 39, 
        nameProject: "Password Strength Background", 
        urlProject: "https://password-strngth-background-day39.netlify.app/", 
        urlImg: "https://i.ibb.co/1nff4LL/39.png" 
    },
    { 
        id: 40, 
        nameProject: "3D Background", 
        urlProject: "https://3d-background-day40.netlify.app/", 
        urlImg: "https://i.ibb.co/2hV9pSW/40.png" 
    },
    { 
        id: 41, 
        nameProject: "Verify Account", 
        urlProject: "https://verify-account-day41.netlify.app/", 
        urlImg: "https://i.ibb.co/2t9zX0g/41.png" 
    },
    { 
        id: 42, 
        nameProject: "Feedback U/I Design", 
        urlProject: "https://feedback-ui-desing-day42.netlify.app/", 
        urlImg: "https://i.ibb.co/wd06xw0/42.png" 
    },
    { 
        id: 43, 
        nameProject: "Live User Filter", 
        urlProject: "https://live-user-filter-day43.netlify.app/", 
        urlImg: "https://i.ibb.co/bBmbGrK/43.png" 
    },
    { 
        id: 44, 
        nameProject: "Custom Range Slider", 
        urlProject: "https://custom-range-slider-day44.netlify.app/", 
        urlImg: "https://i.ibb.co/k1tgQn6/44.png" 
    },
    { 
        id: 45, 
        nameProject: "Netflix Mobile Navigation", 
        urlProject: "https://netflix-mobile-navigation-day45.netlify.app/", 
        urlImg: "https://i.ibb.co/DC3gndp/45.png" 
    },
    { 
        id: 46, 
        nameProject: "Online Quiz", 
        urlProject: "https://online-quiz-day46.netlify.app/", 
        urlImg: "https://i.ibb.co/T8Ww20Q/46.png" 
    },
    { 
        id: 47, 
        nameProject: "Testimonials Box", 
        urlProject: "https://testimonial-box-day47.netlify.app/", 
        urlImg: "https://i.ibb.co/hFvpmxj/day47.png" 
    },
    { 
        id: 48, 
        nameProject: "Random Image Feed", 
        urlProject: "https://random-image-feed-day48.netlify.app/", 
        urlImg: "https://i.ibb.co/4T0vMr6/day48.png" 
    },
    { 
        id: 49, nameProject: "Todo List", 
        urlProject: "https://todo-list-day49.netlify.app/", 
        urlImg: "https://i.ibb.co/1XHgWhr/day49.png" 
    },
    { 
        id: 50, 
        nameProject: "Catch the car", 
        urlProject: "https://catch-the-car-day50.netlify.app/", 
        urlImg: "https://i.ibb.co/C5CsPvH/day50.png" 
    }

]

export default projectsData