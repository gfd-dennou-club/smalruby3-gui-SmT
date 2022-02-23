/**
 * Define Ruby blocks
 * @param {ScratchBlocks} ScratchBlocks target to define Ruby blocks.
 * @return {ScratchBlocks} ScratchBlocks defined ScratchBlocks.
 */
export default function (ScratchBlocks) {
    const smt1 = 'smt1';
    ScratchBlocks.Colours[smt1] = {
        primary: '#CC0043',    //ブロックのメインの色
        secondary: '#DB4D7B',  //円の縁の色
        tertiary: '#7A0028'    //ブロックの縁の色
    };
    ScratchBlocks.Extensions.register(
        `colours_${smt1}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(smt1)
    );

    const smt2 = 'smt2';
    ScratchBlocks.Colours[smt2] = {
        primary: '#1E90FF',
        secondary: '#0000FF',
        tertiary: '#6495ED'
    };
    ScratchBlocks.Extensions.register(
        `colours_${smt2}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(smt2)
    );

    //色を追加
    const smt3 = 'smt3';
    ScratchBlocks.Colours[smt3] = {
        primary: '#deb887',    //ブロックのメインの色
        secondary: '#fff0f5',  //円の縁の色
        tertiary: '#fff0f5'    //ブロックの縁の色
    };
    ScratchBlocks.Extensions.register(
        `colours_${smt3}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(smt3)
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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    //
    // GPIO 
    //
    ScratchBlocks.Blocks.mrubyc_gpio_output_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_output_init',
                message0: '%1を出力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_output_all_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_output_all_init',
                message0: 'LED1 ~ LED8 を出力モードで使う',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_output_half_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_output_half_init',
                message0: 'LED1 ~ LED4 を出力モードで使う(拡張温度計を使う場合)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_input_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_input_init',
                message0: '%1を入力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_input_all_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_input_all_init',
                message0: 'スイッチを全て入力モードで使う',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
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
                        type: 'field_dropdown',
                        name: 'PIN',
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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_set_half_level = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_set_half_level',
                message0: 'LED1~LED4をまとめて%1する',
		args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_set_all_level = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_set_all_level',
                message0: 'LED1~LED8をまとめて%1する',
		args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_get_level = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_get_level',
                message0: '%1の状態',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    },
              ],
              extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sw_status = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_sw_status',
                message0: '%1がON',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    },
              ],
		extensions: ['colours_smt1', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sw_status2 = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_sw_status2',
                message0: 'スイッチ1 %1, スイッチ2 %2, スイッチ3 %3, スイッチ4 %4',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW1',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    },
		    {
			type: 'field_dropdown',
                        name: 'SW2',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
		    },
		    {
                        type: 'field_dropdown',
                        name: 'SW3',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
		    },
		    {
                        type: 'field_dropdown',
                        name: 'SW4',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    },
		],
		extensions: ['colours_smt1', 'output_boolean']
            });
        }
    };


    //
    // PWM 
    //
    ScratchBlocks.Blocks.mrubyc_pwm_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_init',
                message0: 'ブザーを出力モードで使う',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_sound = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_sound',
                message0: '%1の音を鳴らす',
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
                            ['シ', '493'],
                            ['高いド', '523']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_sound2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_sound2',
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
                            ['シ', '493'],
                            ['高いド', '523']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_clear = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_clear',
                message0: '音を止める',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_pwm_music = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_music',
                message0: '音楽を鳴らす',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };


    //
    // ADC
    //
    ScratchBlocks.Blocks.mrubyc_adc_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_init',
                message0: '基板上の温度計を使う',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_adc_measure = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_measure',
                message0: '基板上の温度計で温度を測る',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            })
        }
    }

    ScratchBlocks.Blocks.mrubyc_adc_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_read',
                message0: '基板上の温度計の温度',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };
    
    //
    // WIFI
    // 
    ScratchBlocks.Blocks.mrubyc_wifi_enterprise_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_enterprise_init',
                message0: '企業Wi-fiに接続する SSID:%1 ユーザー名:%2 パスワード:%3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'USERNAME'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
                    },
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    
    ScratchBlocks.Blocks.mrubyc_wifi_personal_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_personal_init',
                message0: '個人Wi-fiに接続する SSID:%1 パスワード:%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
                    },
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_wifi_is_connected = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_is_connected',
                message0: 'Wi-fiに接続している',
                category: ScratchBlocks.Categories.smt1,
		extensions: ['colours_smt1', 'output_boolean']
            });
        }
    };

    //
    // I2C
    //
    ScratchBlocks.Blocks.mrubyc_i2c_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_init',
                message0: 'I2C センサーを使う',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ////
    //// RTC + SNTP
    ////
    ScratchBlocks.Blocks.mrubyc_i2c_rtc_sntp_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_sntp_init',
                message0: '時計合わせ (NTP)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_get = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_get',
                message0: '現在の時刻を取得する (NTP)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    
    ScratchBlocks.Blocks.mrubyc_i2c_rtc_time = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_time',
                message0: '現在の時:分:秒 (NTP)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_time_1 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_time_1',
                message0: '現在の年-月-日 (NTP)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_time2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_time2',
                message0: '現在の%1 (NTP)',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TIME',
                        options: [
                            ['年', '0'],
                            ['月', '1'],
                            ['日', '2'],
                            ['時', '4'],
                            ['分', '5'],
                            ['秒', '6']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_time_send = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_time_send',
                message0: '現在の時刻（ザーバ転送用） (NTP)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_i2c_rtc_lcd = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_lcd',
                message0: 'モニターに現在の時刻を表示する (NPT)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ////
    //// LCD
    ////
    ScratchBlocks.Blocks.mrubyc_i2c_lcd_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_init',
                message0: 'モニターを使う',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
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
                            ['1', '0'],
                            ['2', '1']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_clear = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_clear',
                message0: 'モニターの%1行目の文字を消す',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE2',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    //
    // GPS
    //
    ScratchBlocks.Blocks.mrubyc_uart_gps_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_init',
                message0: 'GPS を使う',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_read',
                message0: 'GPSデータの取得',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_status = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_time',
                message0: 'GPSデータが取得できた',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_time = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_time',
                message0: 'GPSの時刻',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_lat = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_lat',
                message0: 'GPSの緯度',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_lng = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_lng',
                message0: 'GPSの経度',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_val = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_val',
                message0: 'GPSの%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'GPSVAL',
                        options: [
                            ['緯度', '3'],
                            ['経度', '5'],
                            ['時刻', '1']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };
    

    ScratchBlocks.Blocks.mrubyc_uart_gps_lcd = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_lcd',
                message0: 'モニターにGPSの時刻を表示する',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_distance_measure = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_distance_measure',
                message0: 'お宝までの距離を計算',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_distance = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_distance',
                message0: 'お宝までの距離',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    
    //
    // SDカード
    //
    ScratchBlocks.Blocks.mrubyc_spi_sd_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_spi_sd_init',
                message0: 'SDカードを使う',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_spi_sd_write = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_spi_sd_write',
                message0: 'SDカードに書き込む  ファイル名:%1  文字列:%2',
		args0: [
                    {
                        type: 'input_value',
                        name: 'FILE'
                    },
		            {
                        type: 'input_value',
                        name: 'STR'
                    },
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    //
    // SCD30
    //
    ScratchBlocks.Blocks.mrubyc_i2c_scd30_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_init',
                message0: 'CO2センサSCD30を使う',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_status = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_statue',
                message0: 'SCD30からデータ取得可能',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_read',
                message0: 'SCD30センサからデータ取得する',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_co2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_co2',
                message0: 'CO2濃度(SCD30)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_temp = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_temp',
                message0: '温度(SCD30)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_humi = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_humi',
                message0: '湿度(SCD30)',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_i2c_scd30_val = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_val',
                message0: '%1(SCD30)',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SCD30VALUE',
                        options: [
                            ['CO2濃度', '0'],
                            ['温度', '1'],
                            ['湿度', '2']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };

    //
    //高専サーバへの送信
    //
    ScratchBlocks.Blocks.mrubyc_matsue_send = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send',
                message0: '%1を送信',
                args0: [
		    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_mem_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_mem_init',
                message0: 'データをメモリに入れるための宣言',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_mem_store = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_mem_store',
                message0: 'GPSデータをメモリに保存　名前%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_matsue_mem_send = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_mem_send',
                message0: 'メモリに保存したデータを送信',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_send_data = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send_data',
                message0: 'サーバにデータを送る URL%1　名前%2  時刻%3  %4%5  %6%7　タイムゾーン%8',
                args0: [
                    {
                        type: 'input_value',
                        name: 'URL'
                    },
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
		            {
                        type: 'input_value',
                        name: 'TIME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'KEY',
                        options: [
                            ['温度', 'temp'],
                            ['湿度', 'humi'],
                            ['CO2',  'eco2'],
                            ['緯度', 'LAT'],
                            ['経度', 'LNG']
                        ]
                    },
		            {
                        type: 'input_value',
                        name: 'VALUE'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'KEY2',
                        options: [
                            ['湿度', 'humi'],
                            ['温度', 'temp'],
                            ['CO2',  'eco2'],
                            ['緯度', 'LAT'],
                            ['軽度', 'LNG']
                        ]
                    },
		            {
                        type: 'input_value',
                        name: 'VALUE2'
                    },
		            {
                        type: 'field_dropdown',
                        name: 'TIMEZONE',
                        options: [
                            ['JST', '0'],
			                ['UTC', '1']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_send_gps = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send_gps',
                message0: '高専サーバに GPS データを送る　名前%1  時刻%2  緯度%3　経度%4  タイムゾーン%5',
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
		    {
                        type: 'input_value',
                        name: 'TIME'
                    },
		    {
                        type: 'input_value',
                        name: 'LAT'
		    },
		    {
                        type: 'input_value',
                        name: 'LNG'
                    },
		    {
                        type: 'field_dropdown',
                        name: 'TIMEZONE',
                        options: [
			    ['UTC', '1'],
                            ['JST', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_spi_sd_matsue_store_data = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_spi_sd_matsue_store_data',
                message0: 'SDカードにGPSデータを保管　ファイル名:%1　名前%2  時刻%3  緯度%4　経度%5  タイムゾーン%6',
                args0: [
                    {
                        type: 'input_value',
                        name: 'FILE'
                    },
		    {
                        type: 'input_value',
                        name: 'NAME'
                    },
		    {
                        type: 'input_value',
                        name: 'TIME'
                    },
		    {
                        type: 'input_value',
                        name: 'LAT'
		    },
		    {
                        type: 'input_value',
                        name: 'LNG'
                    },
		    {
                        type: 'field_dropdown',
                        name: 'TIMEZONE',
                        options: [
			    ['UTC', '1'],
                            ['JST', '0']
                        ]
                    },
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };
    
    
    //
    //Ambient
    //
    ScratchBlocks.Blocks.mrubyc_ambient_send_to = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_send_to',
                message0: 'AmbientのチャネルID：%1 リードキー：%2 ライトキー：%3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'ID'
                    },
                    {
                        type: 'input_value',
                        name: 'RKEY'
                    },
                    {
                        type: 'input_value',
                        name: 'WKEY'
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_add_data = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_add_data',
                message0: '送るデータ %1%2 %3%4',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D1',
                        options: [
                            ['d1', 'd1'],
                            ['d2', 'd2'],
                            ['d3', 'd3'],
                            ['d4', 'd4'],
                            ['d5', 'd5'],
                            ['d6', 'd6'],
                            ['d7', 'd7'],
                            ['d8', 'd8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'DATA1'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'D2',
                        options: [
                            ['d1', 'd1'],
                            ['d2', 'd2'],
                            ['d3', 'd3'],
                            ['d4', 'd4'],
                            ['d5', 'd5'],
                            ['d6', 'd6'],
                            ['d7', 'd7'],
                            ['d8', 'd8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'DATA2'
                    }
                ],
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_data_send = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_data_send',
                message0: 'Ambientにデータを送信',
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };
    


    //
    // その他
    //

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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'shape_statement']
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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_boolean']
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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_boolean']
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
                category: ScratchBlocks.Categories.smt1,
                extensions: ['colours_smt1', 'output_boolean']
            });
        }
    };

    //
    //ここからSMT(普通)用
    //

    ScratchBlocks.Blocks.mrubyc_gpio_output_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_output_init_2',
                message0: '初期化: %1を出力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
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
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_output_all_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_output_all_init_2',
                message0: 'LED1 ~ LED8 を出力モードで使う',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_output_half_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_output_half_init_2',
                message0: 'LED1 ~ LED4 を出力モードで使う(拡張温度計を使う場合)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_input_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_input_init_2',
                message0: '初期化: %1を入力モードで使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_input_all_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_input_all_init_2',
                message0: 'スイッチを全て入力モードで使う',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_set_level_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_set_level_2',
                message0: '%1を%2にする',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
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
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_set_half_level_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_set_half_level_2',
                message0: 'LED1~LED4をまとめて%1する',
		args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_set_all_level_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_set_all_level_2',
                message0: 'LED1~LED8をまとめて%1する',
		args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_get_level_2 = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_get_level_2',
                message0: '%1の状態',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    },
              ],
              extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sw_status_2 = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_sw_status_2',
                message0: '%1がON',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW',
                        options: [
                            ['スイッチ1', '34'],
                            ['スイッチ2', '35'],
                            ['スイッチ3', '18'],
                            ['スイッチ4', '19']
                        ]
                    },
              ],
		extensions: ['colours_smt2', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sw_status2_2 = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_sw_status2_2',
                message0: 'スイッチ1 %1, スイッチ2 %2, スイッチ3 %3, スイッチ4 %4',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW1',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    },
		    {
			type: 'field_dropdown',
                        name: 'SW2',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
		    },
		    {
                        type: 'field_dropdown',
                        name: 'SW3',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
		    },
		    {
                        type: 'field_dropdown',
                        name: 'SW4',
                        options: [
                            ['ON', '1'],
                            ['OFF', '0']
                        ]
                    },
		],
		extensions: ['colours_smt2', 'output_boolean']
            });
        }
    };


    //
    // PWM 
    //
    ScratchBlocks.Blocks.mrubyc_pwm_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_init_2',
                message0: '初期化: ブザーを出力モードで使う',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_sound_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_sound_2',
                message0: '%1の音を鳴らす',
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
                            ['シ', '493'],
                            ['高いド', '523']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_sound2_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_sound2_2',
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
                            ['シ', '493'],
                            ['高いド', '523']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_clear_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_clear_2',
                message0: '音を止める',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_pwm_music_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_music_2',
                message0: '音楽を鳴らす',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };


    //
    // ADC
    //
    ScratchBlocks.Blocks.mrubyc_adc_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_init_2',
                message0: '初期化: 基板上の温度計を使う',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_adc_measure_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_measure_2',
                message0: '基板上の温度計で温度を測る',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            })
        }
    }

    ScratchBlocks.Blocks.mrubyc_adc_read_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_read_2',
                message0: '基板上の温度計の温度',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    
    ////
    //// SHT75 温湿度センサ
    ////

    ScratchBlocks.Blocks.mrubyc_sht_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_init_2',
                message0: '%1ポートの拡張温度センサを使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SHT',
                        options: [
                            ['1', '25,26'],
                            ['2', '32,33'],
			    ['旧1', '5,23'],
			    ['旧2', '2,4']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_get_temp_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_get_temp_2',
                message0: '拡張温度センサの気温',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_get_humi_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_get_humi_2',
                message0: '拡張温度センサの湿度  気温：%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEMP'
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };
    
    
    //
    // WIFI
    // 
    ScratchBlocks.Blocks.mrubyc_wifi_enterprise_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_enterprise_init_2',
                message0: '企業Wi-fiに接続する SSID:%1 ユーザー名:%2 パスワード:%3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'USERNAME'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
                    },
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    
    ScratchBlocks.Blocks.mrubyc_wifi_personal_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_personal_init_2',
                message0: '個人Wi-fiに接続する SSID:%1 パスワード:%2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
                    },
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_wifi_is_connected_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_is_connected_2',
                message0: 'Wi-fiに接続している',
                category: ScratchBlocks.Categories.smt2,
		extensions: ['colours_smt2', 'output_boolean']
            });
        }
    };

    //
    // I2C
    //
    ScratchBlocks.Blocks.mrubyc_i2c_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_init_2',
                message0: 'I2C センサーを使う',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ////
    //// RTC + SNTP
    ////
    ScratchBlocks.Blocks.mrubyc_i2c_rtc_sntp_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_sntp_init_2',
                message0: '初期化: 時計合わせ (NTP)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_get_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_get_2',
                message0: '現在の時刻を取得する (NTP)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    
    ScratchBlocks.Blocks.mrubyc_i2c_rtc_time_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_time_2',
                message0: '現在の時:分:秒 (NTP)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_time_1_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_time_1_2',
                message0: '現在の年-月-日 (NTP)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_time2_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_time2_2',
                message0: '現在の%1 (NTP)',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TIME',
                        options: [
                            ['年', '0'],
                            ['月', '1'],
                            ['日', '2'],
                            ['時', '4'],
                            ['分', '5'],
                            ['秒', '6']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_i2c_rtc_lcd_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_lcd_2',
                message0: 'モニターに現在の時刻を表示する (NPT)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_time_send_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_time_send_2',
                message0: '現在の時刻（ザーバ転送用） (NTP)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ////
    //// LCD
    ////
    ScratchBlocks.Blocks.mrubyc_i2c_lcd_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_init_2',
                message0: '初期化: モニターを使う',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_i2c_lcd_write_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_write_2',
                message0: 'モニターの%1行目に%2と書く',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE',
                        options: [
                            ['1', '0'],
                            ['2', '1']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_clear_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_clear_2',
                message0: 'モニターの%1行目の文字を消す',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LINE2',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    //
    // GPS
    //
    ScratchBlocks.Blocks.mrubyc_uart_gps_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_init_2',
                message0: '初期化: GPS を使う',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_read_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_read_2',
                message0: 'GPSデータの取得',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_status_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_time_2',
                message0: 'GPSで位置が決定できた',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_time_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_time_2',
                message0: 'GPSの時刻',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_lat_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_lat_2',
                message0: 'GPSの緯度',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_lng_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_lng_2',
                message0: 'GPSの経度',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_lcd_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_lcd_2',
                message0: 'モニターにGPSの時刻を表示する',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_distance_measure_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_distance_measure_2',
                message0: 'お宝までの距離を計算',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_distance_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_distance_2',
                message0: 'お宝までの距離',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    
    //
    // SDカード
    //
    ScratchBlocks.Blocks.mrubyc_spi_sd_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_spi_sd_init_2',
                message0: '初期化: SDカードを使う',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_spi_sd_write_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_spi_sd_write_2',
                message0: 'SDカードに書き込む  ファイル名:%1  文字列:%2',
		args0: [
                    {
                        type: 'input_value',
                        name: 'FILE'
                    },
		    {
                        type: 'input_value',
                        name: 'STR'
                    },
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    //
    // SCD30
    //
    ScratchBlocks.Blocks.mrubyc_i2c_scd30_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_init_2',
                message0: '初期化: CO2センサSCD30を使う',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_status_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_statue_2',
                message0: 'SCD30からデータ取得可能',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_read_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_read_2',
                message0: 'SCD30センサからデータ取得する',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_co2_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_co2_2',
                message0: 'CO2濃度(SCD30)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_temp_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_temp_2',
                message0: '温度(SCD30)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_humi_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_humi_2',
                message0: '湿度(SCD30)',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_val_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_val_2',
                message0: '%1(SCD30)',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SCD30VALUE',
                        options: [
                            ['CO2濃度', '0'],
                            ['温度', '1'],
                            ['湿度', '2']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_number']
            });
        }
    };
    

    //
    //高専サーバへの送信
    //
    ScratchBlocks.Blocks.mrubyc_matsue_send_data_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send_data_2',
                message0: 'サーバにデータを送る URL%1　名前%2  時刻%3  %4%5  %6%7　タイムゾーン%8',
                args0: [
                    {
                        type: 'input_value',
                        name: 'URL'
                    },
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
		            {
                        type: 'input_value',
                        name: 'TIME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'KEY',
                        options: [
                            ['温度', 'temp'],
                            ['湿度', 'humi'],
                            ['CO2',  'eco2'],
                            ['緯度', 'LAT'],
                            ['経度', 'LNG']
                        ]
                    },
		            {
                        type: 'input_value',
                        name: 'VALUE'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'KEY2',
                        options: [
                            ['湿度', 'humi'],
                            ['温度', 'temp'],
                            ['CO2',  'eco2'],
                            ['緯度', 'LAT'],
                            ['軽度', 'LNG']
                        ]
                    },
		            {
                        type: 'input_value',
                        name: 'VALUE2'
                    },
		            {
                        type: 'field_dropdown',
                        name: 'TIMEZONE',
                        options: [
                            ['JST', '0'],
			                ['UTC', '1']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_send_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send_2',
                message0: '%1を送信',
                args0: [
		    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_mem_init_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_mem_init_2',
                message0: 'データをメモリに入れるための宣言',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_mem_store_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_mem_store_2',
                message0: 'GPSデータをメモリに保存　名前%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_matsue_mem_send_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_mem_send_2',
                message0: 'メモリに保存したデータを送信',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_send_gps_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send_gps_2',
                message0: '高専サーバに GPS データを送る　名前%1  時刻%2  緯度%3　経度%4  タイムゾーン%5',
                args0: [
                    {
                        type: 'input_value',
                        name: 'NAME'
                    },
		    {
                        type: 'input_value',
                        name: 'TIME'
                    },
		    {
                        type: 'input_value',
                        name: 'LAT'
		    },
		    {
                        type: 'input_value',
                        name: 'LNG'
                    },
		    {
                        type: 'field_dropdown',
                        name: 'TIMEZONE',
                        options: [
			    ['UTC', '1'],
                            ['JST', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_spi_sd_matsue_store_data_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_spi_sd_matsue_store_data_2',
                message0: 'SDカードにGPSデータを保管　ファイル名:%1　名前%2  時刻%3  緯度%4　経度%5  タイムゾーン%6',
                args0: [
                    {
                        type: 'input_value',
                        name: 'FILE'
                    },
		    {
                        type: 'input_value',
                        name: 'NAME'
                    },
		    {
                        type: 'input_value',
                        name: 'TIME'
                    },
		    {
                        type: 'input_value',
                        name: 'LAT'
		    },
		    {
                        type: 'input_value',
                        name: 'LNG'
                    },
		    {
                        type: 'field_dropdown',
                        name: 'TIMEZONE',
                        options: [
			    ['UTC', '1'],
                            ['JST', '0']
                        ]
                    },
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };
    
    
    //
    //Ambient
    //
    ScratchBlocks.Blocks.mrubyc_ambient_send_to_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_send_to_2',
                message0: 'AmbientのチャネルID：%1 リードキー：%2 ライトキー：%3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'ID'
                    },
                    {
                        type: 'input_value',
                        name: 'RKEY'
                    },
                    {
                        type: 'input_value',
                        name: 'WKEY'
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_add_data_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_add_data_2',
                message0: '送るデータ %1%2 %3%4',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D1',
                        options: [
                            ['d1', 'd1'],
                            ['d2', 'd2'],
                            ['d3', 'd3'],
                            ['d4', 'd4'],
                            ['d5', 'd5'],
                            ['d6', 'd6'],
                            ['d7', 'd7'],
                            ['d8', 'd8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'DATA1'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'D2',
                        options: [
                            ['d1', 'd1'],
                            ['d2', 'd2'],
                            ['d3', 'd3'],
                            ['d4', 'd4'],
                            ['d5', 'd5'],
                            ['d6', 'd6'],
                            ['d7', 'd7'],
                            ['d8', 'd8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'DATA2'
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_data_send_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_data_send_2',
                message0: 'Ambientにデータを送信',
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };
    


    //
    // その他
    //

    ScratchBlocks.Blocks.mrubyc_while_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_while_2',
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
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_puts_2= {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_puts_2',
                message0: 'puts %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'OUTPUT'
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_puts_var_2= {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_puts_var_2',
                message0: 'puts_var %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'OUTPUT'
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_statement_with_block_2 = {
        init: function () {
            this.jsonInit({
                type: 'ruby_statement_with_block_2',
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
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_expression_2 = {
        init: function () {
            this.jsonInit({
                type: 'ruby_expression_2',
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'EXPRESSION'
                    }
                ],
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_range_2 = {
        init: function () {
            this.jsonInit({
                type: 'ruby_range_2',
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
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.ruby_exclude_range_2 = {
        init: function () {
            this.jsonInit({
                type: 'ruby_exclude_range_2',
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
                category: ScratchBlocks.Categories.smt2,
                extensions: ['colours_smt2', 'output_boolean']
            });
        }
    };


    //
    // 「むずい」カテゴリ
    //	

    ScratchBlocks.Blocks.mrubyc_gpio_output_init_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_output_init_3',
                message0: '出力: GPIO %1 を使う',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
                ],
                category: ScratchBlocks.Categories.smt3,
                extensions: ['colours_smt3', 'shape_statement']
            });
        }
    };
    ScratchBlocks.Blocks.mrubyc_gpio_input_init_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_input_init_3',
                message0: '入力: GPIO %1 を使う',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
                ],
                category: ScratchBlocks.Categories.smt3,
                extensions: ['colours_smt3', 'shape_statement']
            });
        }
    };
    ScratchBlocks.Blocks.mrubyc_gpio_pwm_init_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_pwm_init_3',
                message0: 'PWM: GPIO %1 を使う',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
                ],
                category: ScratchBlocks.Categories.smt3,
                extensions: ['colours_smt3', 'shape_statement']
            });
        }
    };
    ScratchBlocks.Blocks.mrubyc_gpio_adc_init_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_adc_init_3',
                message0: 'ADC: GPIO %1 を使う',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
                ],
                category: ScratchBlocks.Categories.smt3,
                extensions: ['colours_smt3', 'shape_statement']
            });
        }
    };
	
    ScratchBlocks.Blocks.mrubyc_gpio_set_level_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_set_level_3',
                message0: '出力: GPIO %1 の値を %2 にする',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['1', '1'],
                            ['0', '0']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.smt3,
                extensions: ['colours_smt3', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_get_level_3 = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_get_level_3',
                message0: '入力: GPIO %1 の値',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
              ],
              category: ScratchBlocks.Categories.smt3, 
              extensions: ['colours_smt3', 'output_number']
            });
        }
    };
	
    ScratchBlocks.Blocks.mrubyc_gpio_pwm_duty_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_pwm_duty_3',
                message0: 'PWM: GPIO %1 のデューティー比を %2 にする',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    },
		    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                category: ScratchBlocks.Categories.smt3,
                extensions: ['colours_smt3', 'shape_statement']
            });
        }
    };
    ScratchBlocks.Blocks.mrubyc_gpio_pwm_freq_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_pwm_freq_3',
                message0: 'PWM: GPIO %1 周波数を %2 にする',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    },
		    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                category: ScratchBlocks.Categories.smt3,
                extensions: ['colours_smt3', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_adc_vol_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_adc_vol_3',
                message0: 'ADC: GPIO %1 の電圧',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PIN'
                    }
                ],
                category: ScratchBlocks.Categories.smt3, 
                extensions: ['colours_smt3', 'output_number']
            });
        }
    };

    return ScratchBlocks;
}
