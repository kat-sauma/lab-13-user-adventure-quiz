const tidalWaves = {
    id: 'tidal waves',
    title: 'Tidal Waves: Craft your Disguise',
    map: {
        top: '33%',
        left: '50%',
    },
    image: '',
    description: `
        Before you can break through the surf, pick a disguise from the water's edge. You'll need it for what lies ahead on your journey!
    `,
    choices: [{
        choice_id: 'seaweed',
        image: '',
        description: 'Seaweed Wig',
        result: `
            Wow that look really brings out your eyes & provides you with 70 oxygen levels! You can see your way through the tidal waves, gaining 25 bioluminescent sparkles stored in your luscious locks. 
        `,
        oxygen: 70,
        bioluminescence: 25
    }, {
        choice_id: 'clam shells',
        image: '',
        description: 'A Mermaid Clam Shell Bra',
        result: `
            That disguise is a real distraction... is it vintage? Because it seems 35 oxygen levels & 50 bioluminescent sparkles were stored in there from another life!
        `,
        oxygen: 35,
        bioluminescence: 50
    }, {
        choice_id: 'fish carcass',
        image: '',
        description: 'Skeleton of a Fish',
        result: `
            Smells like carc-ass in here... oxygen levels have depleted in this de-composition of fashion...
        `,
        oxygen: 0,
        bioluminescence: 0
    }]
};
const theDropOff = {
    id: 'drop off',
    title: 'The Drop Off: Choose Your Accomplice',
    map: {
        top: '66%',
        right: '50%',
    },
    image: '',
    description: `
        Surprise SHARK Encounter! Quick pick an accomplice to fend off the big bad bully of the ocean if you want to make it all the way to the bottom of the ocean where bioluminescence is abundant.
    `,
    choices: [{
        choice_id: 'stingrays',
        image: '',
        description: 'Sting Ray Samurais',
        result: `
            The Samurai Sting Rays really do a number on the shark, but a close encounter keeps you from getting the surface for a breathe of air. Levels are stable gains however, with 45 oxygen levels and 45 bioluminescent sparkles gained on your journey.
        `,
        oxygen: 45,
        bioluminescence: 45
    }, {
        choice_id: 'jellyfish',
        image: '',
        description: 'Jellyfish Towers of Terror',
        result: `
            They strike and you are caught in the garden of electric flowers. -75 oxygen levels and -50 bioluminescent sparkles.
        `,
        oxygen: -75,
        bioluminescence: -50
    }, {
        choice_id: 'dolphins',
        image: '',
        description: 'Dolphin Daydream',
        result: `
            Sharks are no match for Dolphin Dreamers! You are riding high & all the way to the home stretch, collecting 100 levels of oxygen and 100 biolumiscent sparkles. YAS QUEEN!
        `,
        oxygen: 100,
        bioluminescence: 100
    }]
};
// const tidalWaves = {
//     id: 'tidal waves',
//     title: 'Tidal Waves: Craft your Disguise',
//     map: {
//         top: '33%',
//         left: '50%',
//     },
//     image: '',
//     description: `
//         Before you can break through the surf, pick a disguise from the water's edge. You'll need it for what lies ahead on your journey!
//     `,
//     choices: [{
//         choice_id: 'seaweed',
//         image: '',
//         description: 'Seaweed Wig',
//         result: `
//             Wow that look really brings out your eyes & provides you with 70 oxygen levels! You can see your way through the tidal waves, gaining 25 bioluminescent sparkles stored in your luscious locks. 
//         `,
//         oxygen: 70,
//         bioluminescence: 25
//     }, {
//         choice_id: 'clam shells',
//         image: '',
//         description: 'A Mermaid Clam Shell Bra',
//         result: `
//             That disguise is a real distraction... is it vintage? Because it seems 35 oxygen levels & 50 bioluminescent sparkles were stored in there from another life!
//         `,
//         oxygen: 35,
//         bioluminescence: 50
//     }, {
//         choice_id: 'fish carcass',
//         image: '',
//         description: 'Skeleton of a Fish',
//         result: `
//             Smells like carc-ass in here... oxygen levels have depleted in this de-composition of fashion...
//         `,
//         oxygen: 0,
//         bioluminescence: 0
//     }]
// };