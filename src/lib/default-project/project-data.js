import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    meow: {
        defaultMessage: 'Meow',
        description: 'Name for the meow sound',
        id: 'gui.defaultProject.meow'
    },
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {
		    '@nQP*7F(2o3MmbwmSca[': [
			"var1",
			0
		    ],
		    '7b,Kl9om_IBH!zsGN^@a': [
			"time",
			0
		    ]
		},
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: translator(messages.backdrop, {index: 1}),
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [
                    {
                        assetId: '83a9787d4cb6f3b7632b4ddfebf74367',
                        name: translator(messages.pop),
                        dataFormat: 'wav',
                        format: '',
                        rate: 11025,
                        sampleCount: 258,
                        md5ext: '83a9787d4cb6f3b7632b4ddfebf74367.wav'
                    }
                ],
                volume: 100
            },
            {
                isStage: false,
                name: "base_board",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '3eb0cf9328f7ae8f65aba0892806a3ba',
                        name: "base_board",
                        bitmapResolution: 1,
                        md5ext: '3eb0cf9328f7ae8f65aba0892806a3ba.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 130,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                ],
                volume: 100,
                layerOrder: 1,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED1",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 80,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED2",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 95,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED3",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 110,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED4",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 125,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED5",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                layerOrder: 2,
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 140,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED6",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 155,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED7",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 170,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED8",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 185,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "SW1",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '20cc7bbeeb94b5c4f7825f9c14cfbd5c',
                        name: "SW_OFF",
                        bitmapResolution: 1,
                        md5ext: '20cc7bbeeb94b5c4f7825f9c14cfbd5c.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: '7a34d6b96e34e2fae9f0632b7d1e0d89',
                        name: "SW_ON",
                        bitmapResolution: 1,
                        md5ext: '7a34d6b96e34e2fae9f0632b7d1e0d89.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 40,
                y: -220,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "SW2",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '20cc7bbeeb94b5c4f7825f9c14cfbd5c',
                        name: "SW_OFF",
                        bitmapResolution: 1,
                        md5ext: '20cc7bbeeb94b5c4f7825f9c14cfbd5c.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: '7a34d6b96e34e2fae9f0632b7d1e0d89',
                        name: "SW_ON",
                        bitmapResolution: 1,
                        md5ext: '7a34d6b96e34e2fae9f0632b7d1e0d89.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 57,
                y: -220,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "SW3",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '20cc7bbeeb94b5c4f7825f9c14cfbd5c',
                        name: "SW_OFF",
                        bitmapResolution: 1,
                        md5ext: '20cc7bbeeb94b5c4f7825f9c14cfbd5c.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: '7a34d6b96e34e2fae9f0632b7d1e0d89',
                        name: "SW_ON",
                        bitmapResolution: 1,
                        md5ext: '7a34d6b96e34e2fae9f0632b7d1e0d89.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 74,
                y: -220,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "SW4",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '20cc7bbeeb94b5c4f7825f9c14cfbd5c',
                        name: "SW_OFF",
                        bitmapResolution: 1,
                        md5ext: '20cc7bbeeb94b5c4f7825f9c14cfbd5c.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: '7a34d6b96e34e2fae9f0632b7d1e0d89',
                        name: "SW_ON",
                        bitmapResolution: 1,
                        md5ext: '7a34d6b96e34e2fae9f0632b7d1e0d89.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                ],
                layerOrder: 2,
                visible: true,
                x: 91,
                y: -220,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
        ],
        monitors: [
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36' // eslint-disable-line max-len
        }
    });
};


export default projectData;
