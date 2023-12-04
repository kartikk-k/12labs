import AnimatedLoader from "@/components/crafts/AnimatedLoader";
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
    }, {
        id: 'animated-loader',
        title: 'Animated loader',
        description: 'Animated content loader.',
        image: '/static/crafts/animated-loader.svg',
        link: '/crafts/animated-loader',
        github: githubUrl + '/AnimatedLoader.tsx',
        component: AnimatedLoader
    },
]

export default crafts;