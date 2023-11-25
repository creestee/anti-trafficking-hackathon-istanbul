export const cards = [
    {
        id: '1',
        name: 'Alex',
        description: 'Alex wants to contact their family.',
        image: 'barbat1.png',
        yesText: 'Yes',
        yesStats: [-15, 25, 0, 0],
        noText: 'No',
        noStats: [15, -25, 0, 0],
    },
    {
        id: '2',
        name: 'Jordan',
        description: 'Jordan requests a day off due to illness.',
        image: 'barbat3.png',
        yesText: 'Grant Leave',
        yesStats: [0, -20, 0, -15],
        noText: 'Deny Leave',
        noStats: [0, 20, 0, 15],
    },
    {
        id: '3',
        name: 'Taylor',
        description: 'Taylor is asking for better living conditions.',
        image: 'femeie1.png',
        yesText: 'Improve Conditions',
        yesStats: [0, 15, -25, 20],
        noText: 'Maintain Current Conditions',
        noStats: [0, -15, 25, -20],
    },
    {
        id: '4',
        name: 'Morgan',
        description: 'Morgan wants to leave the operation.',
        image: 'barbat5.png',
        yesText: 'Allow Exit',
        yesStats: [0, 20, -15, -25],
        noText: 'Refuse Exit',
        noStats: [0, -20, 15, 25],
    },

    {
        id: '5',
        name: 'Avery',
        description: 'Avery needs medical attention.',
        image: 'femeie2.png',
        yesText: 'Provide Medical Care',
        yesStats: [15, -20, 0, -25],
        noText: 'Ignore Medical Needs',
        noStats: [-15, 20, 0, 25],
    },
    {
        id: '6',
        name: 'Casey',
        description: 'Casey wants to attend an educational program.',
        image: 'femeie4.png',
        yesText: 'Support Education',
        yesStats: [-25, 0, 0, 20],
        noText: 'Discourage Education',
        noStats: [25, 0, 0, -20],
    },
    {
        id: '7',
        name: 'Riley',
        description: 'Riley is expressing suicidal thoughts.',
        image: 'femeie3.png',
        yesText: 'Seek Help',
        yesStats: [20, -25, 0, -20],
        noText: 'Dismiss Concerns',
        noStats: [-20, 25, 0, 20],
    },
    {
        id: '8',
        name: 'Jordan',
        description: 'Jordan wishes to celebrate a religious/cultural event.',
        image: 'barbat3.png',
        yesText: 'Allow Celebration',
        yesStats: [-20, 0, 0, 25],
        noText: 'Disallow Celebration',
        noStats: [20, 0, 0, -25],
    },
    {
        id: '9',
        name: 'Morgan',
        description: 'Morgan wants to make a phone call without supervision.',
        image: 'barbat5.png',
        yesText: 'Grant Privacy',
        yesStats: [25, -15, 0, -20],
        noText: 'Monitor Communication',
        noStats: [-25, 15, 0, 20],
    },
    {
        id: '10',
        name: 'Taylor',
        description: 'Taylor asks for better food and water.',
        image: 'femeie1.png',
        yesText: 'Improve Conditions',
        yesStats: [-25, 20, 0, 15],
        noText: 'Maintain Current Conditions',
        noStats: [25, -20, 0, -15],
    }
];


export const tutorialCards = [
    {
        id: '1',
        name: 'Welcome to our game!',
        description: 'Swipe the card below right to start the tutorial or swipe left anytime to start playing the game.',
        image: 'tutorial.png',
        yesText: 'Tutorial',
        yesStats: [0, 0, 0, 0],
        noText: 'Play now',
        noStats: [0, 0, 0, 0],
    },
    {
        id: '2',
        name: 'Welcome to our game!',
        description: 'Your life depends on the following four stats: money, quantity, influence and visibility.',
        image: 'tutorial.png',
        yesText: 'Next tip',
        yesStats: [0, 0, 0, 0],
        noText: 'Play now!',
        noStats: [0, 0, 0, 0],
    },
    {
        id: '3',
        name: 'Welcome to our game!',
        description: 'You will get requests and interact with other people, and they will have an effect on your stats.',
        image: 'tutorial.png',
        yesText: 'Next tip',
        yesStats: [0, 0, 0, 0],
        noText: 'Ok, sure, so play now!',
        noStats: [0, 0, 0, 0],
    },
    {
        id: '4',
        name: 'Welcome to our game!',
        description: 'A small circle on top of the stats means a small change, a big one means the change will be noticeable.',
        image: 'tutorial.png',
        yesText: 'Next tip',
        yesStats: [0, 0, 0, 0],
        noText: 'I wanna play now!',
        noStats: [0, 0, 0, 0],
    },
    {
        id: '5',
        name: 'Welcome to our game!',
        description: 'By moving the image a bit you can take a peek on which stats will change.',
        image: 'tutorial.png',
        yesText: 'One last tip',
        yesStats: [0, 0, 0, 0],
        noText: 'Play now? Please?',
        noStats: [0, 0, 0, 0],
    },
    {
        id: '6',
        name: 'Welcome to our game!',
        description: 'Getting them to 100% or 0% will get you caught, so be careful!',
        image: 'tutorial.png',
        yesText: `Let's play!`,
        yesStats: [0, 0, 0, 0],
        noText: `Yeah, let's play!`,
        noStats: [0, 0, 0, 0],
    }
];

export const gameOverCardsMin = [
    {
        id: '1',
        name: 'Undercover Exposure',
        description: 'Your illicit activities have been exposed, and law enforcement has shut down your operation! You have been arrested.',
        image: 'gameover.png',
        yesText: 'Start Over',
        yesStats: [0, 0, 0, 0],
        noText: 'Start Over',
        noStats: [0, 0, 0, 0],
    },
    {
        id: '2',
        name: 'Revolt Within',
        description: 'Internal conflicts among your trafficked individuals have escalated into a revolt, leading to the collapse of your operation!',
        image: 'gameover.png',
        yesText: 'Start Over',
        yesStats: [0, 0, 0, 0],
        noText: 'Start Over',
        noStats: [0, 0, 0, 0],
    }
];

export const gameOverCardsMax = [
    {
        id: '1',
        name: 'Public Outcry',
        description: 'The public has discovered your trafficking operation, and public outcry has forced authorities to intervene, bringing your operation to an end!',
        image: 'gameover.png',
        yesText: 'Start Over',
        yesStats: [0, 0, 0, 0],
        noText: 'Start Over',
        noStats: [0, 0, 0, 0],
    },
    {
        id: '2',
        name: 'Betrayal from Within',
        description: 'One of your trusted associates has betrayed you, leading to the dismantling of your trafficking network by law enforcement!',
        image: 'gameover.png',
        yesText: 'Start Over',
        yesStats: [0, 0, 0, 0],
        noText: 'Start Over',
        noStats: [0, 0, 0, 0],
    }
];