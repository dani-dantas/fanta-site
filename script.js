var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true
    }
});

timeline.to (
    '#fanta',
    {
        top: '120%',
        left: '0%',
    },
    'orange'
)

timeline.to (
    '#laranja-cortada',
    {
        top: '160%',
        left: '23%',
    },
    'orange'
)

timeline.to (
    '#laranja',
    {
        width: '15%',
        top: '160%',
        right: '10%',
    },
    'orange'
)

timeline.to (
    '#folha',
    {
        rotate: '430deg',
        top: '110%',
        left: '70%',
    },
    'orange'
)

timeline.to (
    '#folha2',
    {
        rotate: '430deg',
        top: '110%',
        left: '0%',
    },
    'orange'
)

var timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true
    }
});

timeline2.from (
    '.lemon1',
    {
        rotate: '-90deg',
        top: '110%',
        left: '-100%',
    },
    'lemon'
)

timeline2.from (
    '.lemon2',
    {
        rotate: '90deg',
        top: '110%',
        right: '100%',
    },
    'lemon'
)

timeline2.from (
    '#cocacola',
    {
        rotate: '-90deg',
        top: '110%',
        left: '-100%',
    },
    'ca'
)

timeline2.from (
    '#pepsi',
    {
        rotate: '90deg',
        top: '110%',
        right: '100%',
    },
    'ca'
)

timeline2.to (
    '#laranja-cortada',
    {
        width: '18%',
        top: '204%',
        left: '42%',
    },
    'ca'
)

timeline2.to (
    '#fanta',
    {
        width: '35%',
        top: '210%',
        left: '33%',
    },
    'ca'
)