/**
 * Define Ruby blocks
 * @param {ScratchBlocks} ScratchBlocks target to define Ruby blocks.
 * @return {ScratchBlocks} ScratchBlocks defined ScratchBlocks.
 */
export default function (ScratchBlocks) {
    const name = 'ruby';
    if (ScratchBlocks.Categories.hasOwnProperty(name)) {
        return ScratchBlocks;
    }
    ScratchBlocks.Categories[name] = name;
    ScratchBlocks.Colours[name] = {
        primary: '#CC0043',
        secondary: '#DB4D7B',
        tertiary: '#7A0028'
    };
    ScratchBlocks.Extensions.register(
        `colours_${name}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(name)
    );

    ScratchBlocks.Blocks.ruby_statement = {
        init: function () {
            this.jsonInit({
                type: 'ruby_statement',
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'STATEMENT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_init_output = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_init_output',
                message0: '%1を出力モードで使う',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_init_input = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_init_input',
                message0: '%1を入力モードで使う',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_init',
                message0: 'モニターを使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_set_level = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_set_level',
                message0: '%1を%2にする',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sound = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_sound',
                message0: '%1の音を%2秒鳴らす',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SOUND',
                        options: [
                            ['ド', '261'],
                            ['レ', '294'],
                            ['ミ', '329'],
                            ['ファ', '349'],
                            ['ソ', '391'],
                            ['ラ', '440'],
                            ['シ', '466'],
                            ['高いド', '523']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_write = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_write',
                message0: 'モニターの%1行目に%2と書く',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE',
                        options: [
                            ['1', 'i2c.lcd_write(0x00, [ 0x01, 0x80 ] )\n'],
                            ['2', 'i2c.lcd_write(0x00, [ 0x80 + 0x40 ] )\n']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_write_var = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_write',
                message0: 'モニターの%1行目に%2と書く%3(変数用)',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE',
                        options: [
                            ['1', 'i2c.lcd_write(0x00, [ 0x01, 0x80 ] )\n'],
                            ['2', 'i2c.lcd_write(0x00, [ 0x80 + 0x40 ] )\n']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_LED = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_LED',
                message0: '%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LED',
                        options: [
                            ['LED1', '13'],
                            ['LED2', '12'],
                            ['LED3', '14'],
                            ['LED4', '27'],
                            ['LED5', '26'],
                            ['LED6', '25'],
                            ['LED7', '33'],
                            ['LED8', '32']
                        ]
                    }
              ],
              extensions: ['colours_ruby', 'output_string']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_buzzer = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_buzzer',
                message0: 'ブザー',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sw = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_sw',
                message0: '%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW',
                        options: [
                            ['スイッチ1', '19'],
                            ['スイッチ2', '18'],
                            ['スイッチ3', '35'],
                            ['スイッチ4', '34']
                        ]
                    }
              ],
              extensions: ['colours_ruby', 'output_string']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_while = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_while',
                message0: '%1の間繰り返す',
                message1: '%1',
                message2: '',
                args0: [
                    {
                        type: 'input_value',
                        name: 'CONDITION'
                    }
                ],
                args1: [
                    {
                        type: 'input_statement',
                        name: 'SUBSTACK'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_thermistor_trans = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_thermistor_trans',
                message0: '%1を温度に変える',
                args0: [
                    {
                        type: 'input_value',
                        name: 'VREF'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_puts= {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_puts',
                message0: 'puts %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'OUTPUT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_read_adc = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_read_adc',
                message0: '温度計の電圧',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_puts_var= {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_puts_var',
                message0: 'puts_var %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'OUTPUT'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_read_adc = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_read_adc',
                message0: '温度計の電圧',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_init_adc = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_init_adc',
                message0: '温度計を使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_statement_with_block = {
        init: function () {
            this.jsonInit({
                type: 'ruby_statement_with_block',
                message0: '%1 do %2',
                message1: '%1',
                message2: 'end',
                args0: [
                    {
                        type: 'input_value',
                        name: 'STATEMENT'
                    },
                    {
                        type: 'input_value',
                        name: 'ARGS'
                    }
                ],
                args1: [
                    {
                        type: 'input_statement',
                        name: 'SUBSTACK'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_expression = {
        init: function () {
            this.jsonInit({
                type: 'ruby_expression',
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'EXPRESSION'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_range = {
        init: function () {
            this.jsonInit({
                type: 'ruby_range',
                message0: '%1..%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'FROM'
                    },
                    {
                        type: 'input_value',
                        name: 'TO'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_exclude_range = {
        init: function () {
            this.jsonInit({
                type: 'ruby_exclude_range',
                message0: '%1...%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'FROM'
                    },
                    {
                        type: 'input_value',
                        name: 'TO'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    return ScratchBlocks;
}
