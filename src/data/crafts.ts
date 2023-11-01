import TwistedButton from "@/components/crafts/TwistedButton";

const githubUrl = 'https://github.com/kartikk-k/12labs/blob/main/src/components/crafts'
const crafts = [
    {
        id: 'twisted-button',
        title: 'Twisted button animation',
        description: 'Animated button with text twist animation.',
        image: '/static/crafts/twisted-button.svg',
        link: '/crafts/twisted-button',
        github: githubUrl + '/TwistedButton.tsx',
        component: TwistedButton
    },
    // {
    //     id: '02-animated-button',
    //     title: 'Animated button',
    //     description: 'Simple animated button with spin animation.',
    //     image: '/static/crafts/01-animated-button.svg',
    //     link: '/crafts/01-animated-button'
    // }
]

export default crafts;