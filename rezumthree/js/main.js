$(function () {

    

    /* Параллакс от движения мыши */
    if ($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.header-image__paralax1',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 600,
                                'multiplier': 0.02,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -550,
                                'multiplier': 0.02,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.header-image__paralax2',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 100,
                                'multiplier': 0.009,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': 50,
                                'multiplier': 0.009,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.header-image__paralax3',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 10,
                                'multiplier': 0.009,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -100,
                                'multiplier': 0.009,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.rnb-man',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 9,
                                'multiplier': 0.0003,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                }
            ]
        });
    };
});