/**
 * Define Ruby blocks
 * @param {ScratchBlocks} ScratchBlocks target to define Ruby blocks.
 * @return {ScratchBlocks} ScratchBlocks defined ScratchBlocks.
 */
export default function (ScratchBlocks) {

    const wifi = 'wifi'
    if (ScratchBlocks.Categories.hasOwnProperty(wifi)) {
	return ScratchBlocks;
    }
    ScratchBlocks.Categories[wifi] = wifi;
    ScratchBlocks.Colours[wifi] = {
        primary: '#9966FF',
        secondary: '#774DCB',
        tertiary: '#7A0000'
    };
    ScratchBlocks.Extensions.register(
        `colours_${wifi}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(wifi)
    );

    const lcd1 = 'lcd1'
    if (ScratchBlocks.Categories.hasOwnProperty(lcd1)) {
	return ScratchBlocks;
    }
    ScratchBlocks.Categories[lcd1] = lcd1;
    ScratchBlocks.Colours[lcd1] = {
        primary: '#D65CD6',
        secondary: '#BD42BD',
        tertiary: '#7A0000'
    };
    ScratchBlocks.Extensions.register(
        `colours_${lcd1}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(lcd1)
    );

    const sens = 'sens'
    if (ScratchBlocks.Categories.hasOwnProperty(sens)) {
	return ScratchBlocks;
    }
    ScratchBlocks.Categories[sens] = sens;
    ScratchBlocks.Colours[sens] = {
        primary: '#D65CD6',
        secondary: '#BD42BD',
        tertiary: '#7A0000'
    };
    ScratchBlocks.Extensions.register(
        `colours_${sens}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(sens)
    );
    
    const smt1 = 'smt1'
    if (ScratchBlocks.Categories.hasOwnProperty(smt1)) {
	return ScratchBlocks;
    }
    ScratchBlocks.Categories[smt1] = smt1;
    ScratchBlocks.Colours[smt1] = {
        primary: '#CC0043',
        secondary: '#DB4D7B',
        tertiary: '#7A0028'
    };
    ScratchBlocks.Extensions.register(
        `colours_${smt1}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(smt1)
    );

    const smt2 = 'smt2'
    if (ScratchBlocks.Categories.hasOwnProperty(smt2)) {
	return ScratchBlocks;
    }
    ScratchBlocks.Categories[smt2] = smt2;
    ScratchBlocks.Colours[smt2] = {
        primary: '#FF4500',
        secondary: '#DB4D7B',
        tertiary: '#7A0028'
    };
    ScratchBlocks.Extensions.register(
        `colours_${smt2}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(smt2)
    );

    const smt3 = 'smt3'
    if (ScratchBlocks.Categories.hasOwnProperty(smt3)) {
	return ScratchBlocks;
    }
    ScratchBlocks.Categories[smt3] = smt3;
    ScratchBlocks.Colours[smt3] = {
        primary: '#FF1493',
        secondary: '#DB4D7B',
        tertiary: '#7A0028'
    };
    ScratchBlocks.Extensions.register(
        `colours_${smt3}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(smt3)
    );    

    const smt4 = 'smt4'
    if (ScratchBlocks.Categories.hasOwnProperty(smt4)) {
	return ScratchBlocks;
    }
    ScratchBlocks.Categories[smt4] = smt4;
    ScratchBlocks.Colours[smt4] = {
        primary: '#DB7093',
        secondary: '#DB4D7B',
        tertiary: '#7A0028'
    };
    ScratchBlocks.Extensions.register(
        `colours_${smt4}`,
        ScratchBlocks.ScratchBlocks.VerticalExtensions.colourHelper(smt4)
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
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    //
    // GPIO 
    //

    ScratchBlocks.Blocks.mrubyc_gpio_led_all = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_sw_all',
                message0: 'LED: 1%1 2%2 3%3 4%4 5%5 6%6 7%7 8%8',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LED1',
                        options: [
                            ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LED2',
                        options: [
                            ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LED3',
                        options: [
                            ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LED4',
                        options: [
                            ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LED5',
                        options: [
                            ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LED6',
                        options: [
                            ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LED7',
                        options: [
                            ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LED8',
                        options: [
                            ['OFF', '0'],
			    ['ON', '1']
                        ]
                    }		    
		],
		category: ScratchBlocks.Categories.ruby,
		extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sw_all = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_sw_all',
                message0: 'スイッチ: 1%1 2%2 3%3 4%4',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW1',
                        options: [
                            ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SW2',
                        options: [
			    ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SW3',
                        options: [
			    ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SW4',
                        options: [
			    ['OFF', '0'],
			    ['ON', '1']
                        ]
                    },
		],
		category: ScratchBlocks.Categories.ruby,
		extensions: ['colours_smt1', 'output_boolean']
            });
        }
    };

    //
    // PWM 
    //
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
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_clear = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_clear',
                message0: '音を止める',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt1', 'shape_statement']
            });
        }
    };
    

    //
    // ADC
    //
    ScratchBlocks.Blocks.mrubyc_adc_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_read',
                message0: 'サーミスタ温度計の温度',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt1', 'output_number']
            });
        }
    };
    
    ////
    //// LCD
    ////
    ScratchBlocks.Blocks.mrubyc_i2c_lcd_write = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_write',
                message0: 'モニターの %1 行目に %2 と書く',
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
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_lcd1', 'shape_statement']
            });
        }
    };

    ////
    //// puts
    ////
    ScratchBlocks.Blocks.mrubyc_puts = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_puts',
                message0: 'デバッグ出力 %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    },
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_lcd1', 'shape_statement']
            });
        }
    };

    ////
    //// LCD
    ////
    ScratchBlocks.Blocks.mrubyc_i2c_m5lcd_write1 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_m5lcd_write1',
                message0: 'M5Stack モニター: 位置(%1, %2) から 位置(%3, %4) へ %5 を書く (色 %6)',
                args0: [
                    {
                        type: 'input_value',
                        name: 'POS1'
                    },
                    {
                        type: 'input_value',
                        name: 'POS2'
                    },
                    {
                        type: 'input_value',
                        name: 'POS3'
                    },
                    {
                        type: 'input_value',
                        name: 'POS4'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            ['線', 'line'],
                            ['四角', 'fillrectangle'],
                            ['四角(枠のみ)', 'rectangle']
                        ]
                    },
                    {
			type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            ['白', '[0xFF, 0xFF, 0xFF]'],
                            ['黒', '[0x00, 0x00, 0x00]'],
                            ['赤', '[0xFF, 0x00, 0x00]'],
                            ['緑', '[0x00, 0xFF, 0x00]'],
                            ['青', '[0x00, 0x00, 0xFF]'],
                            ['黄', '[0xFF, 0xFF, 0x00]']
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_lcd1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_m5lcd_write2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_m5lcd_write2',
                message0: 'M5Stack モニター: 位置(%1, %2) にサイズ %3 の %4 を書く (色 %5)',
                args0: [
                    {
                        type: 'input_value',
                        name: 'POS1'
                    },
                    {
                        type: 'input_value',
                        name: 'POS2'
                    },
                    {
                        type: 'input_value',
                        name: 'SIZE'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
			    ['円', 'fillcircle'],
                            ['円(枠のみ)', 'circle']
                        ]
                    },
                    {
			type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            ['白', '[0xFF, 0xFF, 0xFF]'],
                            ['黒', '[0x00, 0x00, 0x00]'],
                            ['赤', '[0xFF, 0x00, 0x00]'],
                            ['緑', '[0x00, 0xFF, 0x00]'],
                            ['青', '[0x00, 0x00, 0xFF]'],
                            ['黄', '[0xFF, 0xFF, 0x00]']
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_lcd1', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_m5lcd_write3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_m5lcd_write3',
                message0: 'M5Stack モニター: 位置(%1, %2) からサイズ %3 の %4 を書く (色 %5)',
                args0: [
                    {
                        type: 'input_value',
                        name: 'POS1'
                    },
                    {
                        type: 'input_value',
                        name: 'POS2'
                    },
                    {
                        type: 'input_value',
                        name: 'SIZE'
                    },
                    {
                        type: 'input_value',
                        name: 'MESS'
                    },
                    {
			            type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            ['白', '[0xFF, 0xFF, 0xFF]'],
                            ['黒', '[0x00, 0x00, 0x00]'],
                            ['赤', '[0xFF, 0x00, 0x00]'],
                            ['緑', '[0x00, 0xFF, 0x00]'],
                            ['青', '[0x00, 0x00, 0xFF]'],
                            ['黄', '[0xFF, 0xFF, 0x00]']
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_lcd1', 'shape_statement']
            });
        }
    };    

    //
    // WIFI
    // 
    ScratchBlocks.Blocks.mrubyc_wifi_personal_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_personal_init',
                message0: 'Wi-fiに接続する SSID:%1 パスワード:%2',
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
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_wifi', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_wifi_is_connected = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_wifi_is_connected',
                message0: 'Wi-fi に接続中 ?',
		category: ScratchBlocks.Categories.ruby,
		extensions: ['colours_wifi', 'output_boolean']
            });
        }
    };

    ////
    //// RTC
    ////
    ScratchBlocks.Blocks.mrubyc_i2c_rtc_ntp_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_ntp_init',
                message0: 'RTC: Wi-Fiで時間合わせ',
		category: ScratchBlocks.Categories.ruby,
		extensions: ['colours_sens', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_init',
                message0: 'RTC: 時間合わせ  %1年 %2月 %3日 %4曜日 %5時 %6分 %7秒',
                args0: [
                    {
                        type: 'input_value',
                        name: 'YEAR'
                    },
                    {
                        type: 'input_value',
                        name: 'MON'
                    },
                    {
                        type: 'input_value',
                        name: 'DAY'
                    },
                    {
			            type: 'field_dropdown',
                        name: 'WDAY',
                        options: [
                            ['日', 0],
                            ['月', 1],
                            ['火', 2],
                            ['水', 3],
                            ['木', 4],
                            ['金', 5],
                            ['土', 6]
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'HOUR'
                    },
                    {
                        type: 'input_value',
                        name: 'MIN'
                    },
                    {
                        type: 'input_value',
                        name: 'SEC'
                    }
                ],
		        category: ScratchBlocks.Categories.ruby,
		        extensions: ['colours_sens', 'shape_statement']
            });
        }
    };    

    ScratchBlocks.Blocks.mrubyc_i2c_rtc = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc',
                message0: 'RTC: %1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TIME',
                        options: [
			                ['年月日 時分秒', 'str_datetime'],
			                ['年-月-日', 'str_date'],
			                ['時:分:秒', 'str_time'],
			                ['年(4桁)', 'year'],
			                ['年(下2桁)', 'year2'],
			                ['月', 'month'],
                            ['日', 'day'],
                            ['時', 'hour'],
                            ['分', 'min'],
                            ['秒', 'sec']
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_read',
                message0: 'RTC: 時間取得',
        		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'shape_statement']
            });
        }
    };

    //
    // GPS
    //
    ScratchBlocks.Blocks.mrubyc_uart_gps_status = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_status',
                message0: 'GPSデータが取得できた ?',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'output_boolean']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_uart_gps = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps',
                message0: 'GPS: %1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DATA',
                        options: [
                            ['緯度(度-分)', 'lat'],
                            ['経度(度-分)', 'lng'],
			                ['年月日 時分秒', 'str_datetime'],
			                ['年-月-日', 'str_date'],
			                ['時:分:秒', 'str_time'],
			                ['年(4桁)', 'year'],
			                ['年(下2桁)', 'year2'],
			                ['月', 'month'],
                            ['日', 'day'],
                            ['時', 'hour'],
                            ['分', 'min'],
                            ['秒', 'sec']
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'output_number']
            });
        }
    };

    //
    // SCD30
    //
    ScratchBlocks.Blocks.mrubyc_i2c_scd30_status = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_status',
                message0: 'SCD30 からデータ取得可能 ?',
		        category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'output_boolean']
            });
        }
    };
   
    ScratchBlocks.Blocks.mrubyc_i2c_scd30 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30',
                message0: 'SCD30 : %1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SCD30',
                        options: [
                            ['CO2濃度', 'co2'],
                            ['温度', 'temp'],
                            ['湿度', 'humi']
                        ]
                    }
                ],
		        category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'output_number']
            });
        }
    };

    //
    // SHT35
    //
    ScratchBlocks.Blocks.mrubyc_i2c_sht35_status = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_sht35_status',
                message0: 'SHT35 からデータ取得可能 ?',
		        category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_sht35 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_sht35',
                message0: 'SHT35 : %1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SHT35',
                        options: [
                            ['温度', 'temp'],
                            ['湿度', 'humi']
                        ]
                    }
                ],
		        category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'output_number']
            });
        }
    };


    //
    //
    //
    ScratchBlocks.Blocks.mrubyc_uart_gps_otakara_distance = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_otakara_distance',
                message0: '宝探し: %1 までの距離',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'OTAKARA',
                        options: [
			    ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8']
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'output_number']
            });
        }
    };

    //
    // iBeacon
    //
    ScratchBlocks.Blocks.mrubyc_ibeacon_get = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ibeacon_get',
                message0: 'iBeacon: データ取得',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ibeacon = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ibeacon',
                message0: 'iBeacon: %1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VAL',
                        options: [
                            ['Major', 'major'],
                            ['Minor', 'minor'],
                            ['RSSI',  'rssi' ],
                            ['距離',  'dist' ]
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_sens', 'output_number']
            });
        }
    };
    
    
    //
    //高専サーバへの送信
    //
    ScratchBlocks.Blocks.mrubyc_matsue_send_srv = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send_srv',
                message0: '高専サーバ',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_wifi', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_send_data = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send_data',
                message0: '送信情報：送信先%1  名前%2  時刻%3  %4%5  %6%7　タイムゾーン%8',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SRV'
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
                            ['緯度', 'lat'],
                            ['経度', 'lng']
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
			    ['温度', 'temp'],
                            ['湿度', 'humi'],
                            ['CO2',  'eco2'],
                            ['緯度', 'lat'],
                            ['経度', 'lng']
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
                            ['日本時間', '0'],
  	                    ['世界標準時', '1']
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_wifi', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_matsue_send = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send',
                message0: 'データ送信 %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'URL'
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_wifi', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_matsue_send_save = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send_save',
                message0: 'データ保存 %1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'URL'
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_wifi', 'shape_statement']
            });
        }
    };
    ScratchBlocks.Blocks.mrubyc_matsue_send2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send2',
                message0: '保存したデータを送信',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_wifi', 'shape_statement']
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
                            ['LED1 (GPIO 13)', '13'],
                            ['LED2 (GPIO 12)', '12'],
                            ['LED3 (GPIO 14)', '14'],
                            ['LED4 (GPIO 27)', '27'],
                            ['LED5 (GPIO 26)', '26'],
                            ['LED6 (GPIO 25)', '25'],
                            ['LED7 (GPIO 33)', '33'],
                            ['LED8 (GPIO 32)', '32']
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
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
                            ['スイッチ1 (GPIO 34)', '34'],
                            ['スイッチ2 (GPIO 35)', '35'],
                            ['スイッチ3 (GPIO 18)', '18'],
                            ['スイッチ4 (GPIO 19)', '19']
                        ]
                    }
                ],
		category: ScratchBlocks.Categories.ruby,
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
                            ['LED1 (GPIO 13)', '13'],
                            ['LED2 (GPIO 12)', '12'],
                            ['LED3 (GPIO 14)', '14'],
                            ['LED4 (GPIO 27)', '27'],
                            ['LED5 (GPIO 26)', '26'],
                            ['LED6 (GPIO 25)', '25'],
                            ['LED7 (GPIO 33)', '33'],
                            ['LED8 (GPIO 32)', '32']
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
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sw_status_2 = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_sw_status_2',
                message0: '%1がON ?',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SW',
                        options: [
                            ['スイッチ1 (GPIO 34)', '34'],
                            ['スイッチ2 (GPIO 35)', '35'],
                            ['スイッチ3 (GPIO 18)', '18'],
                            ['スイッチ4 (GPIO 19)', '19']
                        ]
                    },
		],
		category: ScratchBlocks.Categories.ruby,
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
                message0: '初期化: ブザー(GPIO 15)を出力モードで使う',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_sound_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_sound_2',
                message0: 'ブザー(GPIO 15)で%1の音を鳴らす',
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
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_clear_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_clear_2',
                message0: 'ブザー(GPIO 15)の音を止める',
		category: ScratchBlocks.Categories.ruby,
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
                message0: '初期化: 基板上の温度計(GPIO 39)を使う',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt2', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_adc_measure_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_measure_2',
                message0: '基板上の温度計(GPIO 39)で温度を測る',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt2', 'shape_statement']
            })
        }
    }

    ScratchBlocks.Blocks.mrubyc_adc_read_2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_read_2',
                message0: '基板上の温度計(GPIO 39)の温度',
		category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt2', 'output_number']
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
                category: ScratchBlocks.Categories.ruby,
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
                category: ScratchBlocks.Categories.ruby,
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
                category: ScratchBlocks.Categories.ruby,
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
                category: ScratchBlocks.Categories.ruby,
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
                category: ScratchBlocks.Categories.ruby,
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
                category: ScratchBlocks.Categories.ruby,
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
                category: ScratchBlocks.Categories.ruby,
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
                category: ScratchBlocks.Categories.ruby,
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt3', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_init_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_init_3',
                message0: 'I2C-%1: GPIO %2, %3 を使う (SCL, SDA)',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NAME',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5']
                        ]
                    }, 
                    {
                        type: 'input_value',
                        name: 'SCL'
                    },
		    {
			type: 'input_value',
                        name: 'SDA'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt4', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_i2c_write_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_write_3',
		message0: '出力 I2C-%1 : アドレス %2, コマンド %3, 値 %4',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NAME',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5']
                        ]
                    }, 		    
                    {
                        type: 'input_value',
                        name: 'ADDR'
                    },
		    {
                        type: 'input_value',
                        name: 'CMD'
                    },
		    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt4', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_read_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_read_3',
                message0: '入力 I2C-%1 : アドレス %2, バイト数 %3',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NAME',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5']
                        ]
                    }, 
                    {
                        type: 'input_value',
                        name: 'ADDR'
                    },
		    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt4', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_init_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_init_3',
                message0: 'UART-%1 を使う',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NAME',
                        options: [
                            ['2 (txPin=17, rxPin=16)', '2'],
                            ['1', '1']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt4', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_uart_write_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_write_3',
		message0: '出力 UART-%1 : %2',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NAME',
                        options: [
                            ['2 (txPin=17, rxPin=16)', '2'],
                            ['1', '1']
                        ]
                    },
		    {
                        type: 'input_value',
                        name: 'CMD'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt4', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gets_3 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gets_3',
                message0: '入力 I2C-%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NAME',
                        options: [
                            ['2 (txPin=17, rxPin=16)', '2'],
                            ['1', '1']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_smt4', 'output_number']
            });
        }
    };

    return ScratchBlocks;
}
