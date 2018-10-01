let celebrities = [
        {
            name: "Abdul Sattar Edhi",
            title: "Founder, Edhi Foundation",
            readMoreURL: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
            imgURL: "edhi.jpg",
            quote: "No religion is higher than humanity"
        },
        {
            name: "Malala Yousufzai",
            title: "Female Education Activist",
            readMoreURL: "https://en.wikipedia.org/wiki/Malala_Yousafzai",
            imgURL: "malala.jpg",
            quote: "One child, one teacher, one book, one pen can change the world."
        },
        {
            name: "Abdul Qadir Khan",
            title: "Nuclear Physicist",
            readMoreURL: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
            imgURL: "abdul-qadir-khan.jpg",
            quote: "I am proud of my work for my country."
        },
        {
            name: "Allama-Iqbal",
            title: " Poet Philosopher of Pakistan -",
            readMoreURL: "https://en.wikipedia.org/wiki/Muhammad_Iqbal",
            imgURL: "allama-iqbal.png",
            quote: "Nations are born in the hearts of poets, they prosper and die in the hands of politicians."
        },
        {
            name: "Angelina Jolie",
            title: "  American actress, filmmaker, and humanitarian",
            readMoreURL: "https://en.wikipedia.org/wiki/Angelina_Jolie",
            imgURL: "angelina-jolie.jpg",
            quote: "When I get logical, and I don't trust my instincts - that's when I get in trouble."
        },
        {
            name: "Arfa Karim",
            title: "The youngest Microsoft Certified Professional",
            readMoreURL: "https://en.wikipedia.org/wiki/Arfa_Karim",
            imgURL: "arfa-karim.jpg",
            quote: "If you want to do something big in your life, you must remember that shyness is only the mind.If you think shy, you act shy. If you think confident you act confident."
        },
        {
            name: "Benazir Bhutto",
            title: "A Pakistani politician who served as Prime Minister of Pakistan from 1988 to 1990 and again from 1993 to 1996.",
            readMoreURL: "https://en.wikipedia.org/wiki/Benazir_Bhutto",
            imgURL: "benazir-bhutto.jpg",
            quote: "Democracy is necessary to peace and to undermining the forces of terrorism."
        },
        {
            name: "Diana",
            title: "First wife of Charles, Prince of Wales",
            readMoreURL: "https://en.wikipedia.org/wiki/Diana,_Princess_of_Wales",
            imgURL: "diana.jpg",
            quote: "If you find someone you love in your life, then hang on to that love."
        }
    ];


    function initialize() {
        let bodyEl = document.querySelector("#gallery");
        for (let i = 0; i < celebrities.length; i++) {

            bodyEl.innerHTML += '<div class="item">' +
                '<div class="img" style="background-image: url(images/' + celebrities[i].imgURL + ')">' +
                ' <div class="details">' +
                '<p class="name">' + celebrities[i].name + '</p>' +
                '<p class="title">' + celebrities[i].title + '</p>' +
                '<p class="imgpath">' + celebrities[i].imgURL + '</p>' +
                '<p class="link">' + celebrities[i].readMoreURL + '</p>' +
                '</div>' +
                '</div>' +
                '</div>';

        }
    }

    // initializing
    initialize();




    // owl slider

    $("#gallery").owlCarousel({
        margin: 15,
        autoplay: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            580: {
                items: 2
            },
            750: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });




    // item click preview event
    let img = document.querySelectorAll('#gallery .item');
    img.forEach(function (param) {
        param.addEventListener('click', function () {
            document.querySelector('#preview').style.display = 'block';
            let name = this.querySelector('.name').innerText;
            let title = this.querySelector('.title').innerText;
            let imgpath = this.querySelector('.imgpath').innerText;
            let link = this.querySelector('.link').innerText;

            let preview = document.querySelector('#preview');
            preview.querySelector('.name').innerText = name;
            preview.querySelector('.title').innerText = title;
            preview.querySelector('.img').style.backgroundImage = 'url(images/' + imgpath + ')';
            preview.querySelector('.link').innerHTML = 'More Details (<a href="' + link + '">Wikipedia link</a>)';

        });
    });


