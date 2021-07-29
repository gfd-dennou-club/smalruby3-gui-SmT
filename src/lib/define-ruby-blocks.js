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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_output_all_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_output_all_init',
                message0: 'LED1 ~ LED8 を出力モードで使う',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_output_half_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_output_half_init',
                message0: 'LED1 ~ LED4 を出力モードで使う(拡張温度計を使う場合)',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_input_all_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_gpio_input_all_init',
                message0: 'スイッチを全て入力モードで使う',
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
              extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_gpio_sw_status = {
        init: function() {
            this.jsonInit({
                type: 'mrubyc_gpio_sw_status',
                message0: '%1はON?',
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
		extensions: ['colours_ruby', 'output_boolean']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_sound = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_sound',
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_pwm_clear = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_pwm_clear',
                message0: '音を止める',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };
    
    ScratchBlocks.Blocks.mrubyc_adc_measure = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_measure',
                message0: '基板上の温度計で温度計測',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            })
        }
    }

    ScratchBlocks.Blocks.mrubyc_adc_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_adc_read',
                message0: '基板上の温度計の温度',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    
    ////
    //// SHT75 温湿度センサ
    ////

    ScratchBlocks.Blocks.mrubyc_sht_init = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_init',
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_get_temp = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_get_temp',
                message0: '拡張温度センサの気温',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_sht_get_humi = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_sht_get_temp',
                message0: '拡張温度センサの湿度  気温：%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEMP'
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_rtc_get = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_get',
                message0: '現在の時刻を取得する (NTP)',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    
    ScratchBlocks.Blocks.mrubyc_i2c_rtc_time = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_time',
                message0: '現在の時刻 (NTP)',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    
    ScratchBlocks.Blocks.mrubyc_i2c_rtc_lcd = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_rtc_lcd',
                message0: 'モニターに現在の時刻を表示する (NPT)',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                message0: '液晶ディスプレイを使う',
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
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_lcd_clear = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_lcd_clear',
                message0: 'モニターの文字を消す',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_read',
                message0: 'GPSデータの取得',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_status = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_time',
                message0: 'GPSデータを受信した?',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_time = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_time',
                message0: 'GPSの時刻',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_lat = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_lat',
                message0: 'GPSの緯度',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_lng = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_lng',
                message0: 'GPSの経度',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_lcd = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_lcd',
                message0: 'モニターにGPSの時刻を表示する',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_distance_measure = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_distance_measure',
                message0: 'お宝 %1 までの距離を計算',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            ['1', '[1,1]'],
                            ['2', '[1,2]'],
                            ['3', '[1,3]'],
                            ['4', '[1,4]'],
                            ['5', '[1,5]'],
                            ['6', '[1,6]'],
                            ['7', '[1,7]'],
                            ['8', '[1,8]']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_uart_gps_distance = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_uart_gps_distance',
                message0: 'お宝までの距離',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_spi_sd_matsue_store_data = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_spi_sd_matsue_store_data',
                message0: '高専サーバにデータを送る情報をSDカードに保管  ファイル名:%1  名前%2  時刻%3  %4%5  タイムゾーン%6',
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
                        name: 'TIMEZONE',
                        options: [
                            ['JST', '0'],
			    ['UTC', '1']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_status = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_statue',
                message0: 'SCD30からデータ取得可能?',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_boolean']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_read = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_read',
                message0: 'SCD30センサからデータ取得する',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_co2 = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_co2',
                message0: 'CO2濃度(SCD30)',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_temp = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_temp',
                message0: '温度(SCD30)',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_i2c_scd30_humi = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_i2c_scd30_humi',
                message0: '湿度(SCD30)',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'output_number']
            });
        }
    };


    //
    //高専サーバへの送信
    //
    ScratchBlocks.Blocks.mrubyc_matsue_send_data = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_matsue_send_data',
                message0: '高専サーバにデータを送る　名前%1  時刻%2  %3%4  タイムゾーン%5',
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
                        name: 'TIMEZONE',
                        options: [
                            ['JST', '0'],
			    ['UTC', '1']
                        ]
                    }
                ],
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
            });
        }
    };

    ScratchBlocks.Blocks.mrubyc_ambient_data_send = {
        init: function () {
            this.jsonInit({
                type: 'mrubyc_ambient_data_send',
                message0: 'Ambientにデータを送信',
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
                category: ScratchBlocks.Categories.ruby,
                extensions: ['colours_ruby', 'shape_statement']
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
