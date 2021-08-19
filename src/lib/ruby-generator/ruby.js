/**
 * Define Ruby code generator for Ruby Blocks
 * @param {RubyGenerator} Generator The RubyGenerator
 * @return {RubyGenerator} same as param.
 */
export default function (Generator) {
    const getUnquoteText = function (block, fieldName, order) {
        const input = block.inputs[fieldName];
        if (input) {
            const targetBlock = Generator.getBlock(input.block);
            if (targetBlock && targetBlock.opcode === 'text') {
                return Generator.getFieldValue(targetBlock, 'TEXT') || '';
            }
        }
        return Generator.valueToCode(block, fieldName, order);
    };

    Generator.ruby_statement = function (block) {
        const statement = getUnquoteText(block, 'STATEMENT', Generator.ORDER_NONE);
        return `${statement}\n`;
    };

    //
    // GPIO
    //
    Generator.mrubyc_gpio_output_init = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        return `led${pin} = GPIO.new( ${pin}, GPIO::OUT )\n` ;
    };

    Generator.mrubyc_gpio_output_all_init = function (block) {
        return `led13 = GPIO.new( 13, GPIO::OUT )\n` + 
	       `led12 = GPIO.new( 12, GPIO::OUT )\n` + 
	       `led14 = GPIO.new( 14, GPIO::OUT )\n` + 
	       `led27 = GPIO.new( 27, GPIO::OUT )\n` + 
	       `led26 = GPIO.new( 26, GPIO::OUT )\n` + 
	       `led25 = GPIO.new( 25, GPIO::OUT )\n` + 
	       `led33 = GPIO.new( 33, GPIO::OUT )\n` + 
	       `led32 = GPIO.new( 32, GPIO::OUT )\n` ;
    };

    Generator.mrubyc_gpio_output_half_init = function (block) {
        return `led13 = GPIO.new( 13, GPIO::OUT )\n` + 
	       `led12 = GPIO.new( 12, GPIO::OUT )\n` + 
	       `led14 = GPIO.new( 14, GPIO::OUT )\n` + 
	       `led27 = GPIO.new( 27, GPIO::OUT )\n` ;
    };

    Generator.mrubyc_gpio_input_init = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        return `sw${pin} = GPIO.new( ${pin}, GPIO::IN, GPIO::PULL_UP)\n`;
    };


    Generator.mrubyc_gpio_input_all_init = function (block) {
        return `sw34 = GPIO.new( 34, GPIO::IN, GPIO::PULL_UP)\n`+
	       `sw35 = GPIO.new( 35, GPIO::IN, GPIO::PULL_UP)\n`+
	       `sw18 = GPIO.new( 18, GPIO::IN, GPIO::PULL_UP)\n`+
	       `sw19 = GPIO.new( 19, GPIO::IN, GPIO::PULL_UP)\n`;
    };

    Generator.mrubyc_gpio_set_level = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        const state = Generator.getFieldValue(block, 'STATE') || null;
        return `led${pin}.write(${state})\n`;
    };

    Generator.mrubyc_gpio_set_half_level = function (block) {
	const state = Generator.getFieldValue(block, 'STATE') || null;
        return `led13.write(${state})\n`+
	       `led12.write(${state})\n`+
	       `led14.write(${state})\n`+
	       `led27.write(${state})\n`;
    };

    Generator.mrubyc_gpio_set_all_level = function (block) {
	const state = Generator.getFieldValue(block, 'STATE') || null;
        return `led13.write(${state})\n`+
	       `led12.write(${state})\n`+
	       `led14.write(${state})\n`+
	       `led27.write(${state})\n`+
	       `led26.write(${state})\n`+
	       `led25.write(${state})\n`+
	       `led33.write(${state})\n`+
	       `led32.write(${state})\n`;
    };
    
    Generator.mrubyc_gpio_get_level = function (block) {
        const SW = Generator.getFieldValue(block, 'SW') || null;
        return [`sw${SW}.read`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_gpio_sw_status = function (block) {
        const SW = Generator.getFieldValue(block, 'SW') || null;
        return [`(sw${SW}.read == 1)`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_gpio_sw_status2 = function (block) {
        const SW1 = Generator.getFieldValue(block, 'SW1') || null;
	const SW2 = Generator.getFieldValue(block, 'SW2') || null;
	const SW3 = Generator.getFieldValue(block, 'SW3') || null;
	const SW4 = Generator.getFieldValue(block, 'SW4') || null;
        return [`(sw34.read == ${SW1}) && (sw35.read == ${SW2}) && (sw18.read == ${SW3}) && (sw19.read == ${SW4}) `, Generator.ORDER_ATOMIC];
    };

    //
    // PWM 
    //
    Generator.mrubyc_pwm_init = function (block) {
        return `sleep(1)\n` +
	       `pwm1 = PWM.new( 15 )\n` +
	       `sleep(1)\n`;
    };

    Generator.mrubyc_pwm_sound = function (block) {
        Generator.prepares_['pwm'] = Generator.mrubyc_pwm_init(null);
        const sound = Generator.getFieldValue(block, 'SOUND') || null;
        return `pwm1.freq(${sound})\n` +
               `pwm1.duty(128)\n` ;
    };

    Generator.mrubyc_pwm_sound2 = function (block) {
        Generator.prepares_['pwm'] = Generator.mrubyc_pwm_init(null);
        const sound = Generator.getFieldValue(block, 'SOUND') || null;
        const time = Generator.valueToCode(block, 'TIME', Generator.ORDER_NONE);
        return `pwm1.freq(${sound})\n` +
               `pwm1.duty(128)\n` +
               `sleep(${time})\n`+
	       `pwm1.duty(0)\n`;
    };

    Generator.mrubyc_pwm_clear = function (block) {
        Generator.prepares_['pwm'] = Generator.mrubyc_pwm_init(null);
        return `pwm1.duty(0)\n`;
    };

    Generator.mrubyc_pwm_music = function (block) {
        Generator.prepares_['pwm'] = Generator.mrubyc_pwm_init(null);
        return `pwm1.duty(0)\n`+
	    `freq=[587,440,466,523,466,440,392] \n`+
	    `sound=[0.4,0.2,0.2,0.4,0.2,0.2,1.0] \n`+
	    `pwm1.duty(128)\n`+
            `for i in 0..6 do \n`+
            `   pwm1.freq(freq[i]) \n`+
            `   sleep(sound[i]) \n`+
            `end \n`+
            `pwm1.duty(0)\n`;
    };


    //
    // ADC
    // 
    Generator.mrubyc_adc_init = function (block) {
        return `adc = ADC.new( 39, ADC::ATTEN_11DB, ADC::WIDTH_12BIT )\n`;
    };

    Generator.mrubyc_adc_measure = function (block) {
	Generator.prepares_['adc'] = Generator.mrubyc_adc_init(null);
        return `voltage = adc.read()\n` + 
               `temp = 1.0 / ( 1.0 / 3435.0 * Math.log( (3300.0 - voltage) / (voltage/ 10.0) / 10.0) + 1.0 / (25.0 + 273.0) ) - 273.0\n` + 
               `temp1 = sprintf("%.1f",temp)\n`;
    };

    Generator.mrubyc_adc_read = function (block) {
	Generator.prepares_['adc'] = Generator.mrubyc_adc_init(null);
        return [`sprintf("%.1f",1.to_f / ( 1.to_f / 3435 * Math.log(((3300 - adc.read).to_f / ((adc.read).to_f/ 10_000)) / 10_000) + 1.to_f / (25 + 273) ) - 273)`, Generator.ORDER_ATOMIC];
    };

    
    //
    // SHT75 温湿度センサ
    // 

    Generator.mrubyc_sht_init = function (block) {
        const object = Generator.getFieldValue(block, 'SHT') || null;
        return `sht = SHT75.new(${object})\n` +
	       `sht.sht_init\n`;
    };
    
    Generator.mrubyc_sht_get_temp = function (block) {
        return [`sprintf("%.1f",sht.sht_get_temp / 100.0)`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_sht_get_humi = function (block) {
        const temp = Generator.valueToCode(block, 'TEMP', Generator.ORDER_NONE);
        return [`sprintf("%.1f",sht.sht_get_humi(${temp} * 100.0))`, Generator.ORDER_ATOMIC];
    };

    
    //
    // WIFI
    //    
    Generator.mrubyc_wifi_enterprise_init = function (block) {
        const ssid     = Generator.valueToCode(block, 'SSID',     Generator.ORDER_NONE);
        const username = Generator.valueToCode(block, 'USERNAME', Generator.ORDER_NONE);
        const pass     = Generator.valueToCode(block, 'PASSWORD', Generator.ORDER_NONE);
        return `WiFi.init()\n` +
	    `initialize_wifi(0,${ssid},${username},${pass})\n` +
	    `WiFi.start()\n` +
	    `sleep(3) \n` ;
    };

    Generator.mrubyc_wifi_personal_init = function (block) {
        const ssid = Generator.valueToCode(block, 'SSID',     Generator.ORDER_NONE);
        const pass = Generator.valueToCode(block, 'PASSWORD', Generator.ORDER_NONE);
        return `WiFi.init()\n` +
	    `WiFi.setup_psk(${ssid}, ${pass})\n` + 
            `WiFi.start()\n` +
	    `sleep(3) \n` ;
    };

    Generator.mrubyc_wifi_is_connected = function (block) {
        return [`WiFi.is_connected?`, Generator.ORDER_ATOMIC];
    };
    
    //
    // I2C
    //
    Generator.mrubyc_i2c_init = function (block) {
        return `i2c = I2C.new(22, 21)\n`
    }; 

    ////
    //// RTC
    ////
    Generator.mrubyc_i2c_rtc_sntp_init = function (block) {
	Generator.prepares_['i2c'] = Generator.mrubyc_i2c_init(null);
        return `SNTP.init()\n` + 
               `rtc = RC8035SA.new(i2c)\n` + 
               `year = ((SNTP.year - 2000) / 10).to_i(2) << 4 | ((SNTP.year - 2000) % 10).to_i(2)\n` + 
               `mon  = (SNTP.mon  / 10).to_i(2) << 4 | (SNTP.mon  % 10).to_i(2)\n` + 
               `mday = (SNTP.mday / 10).to_i(2) << 4 | (SNTP.mday % 10).to_i(2)\n` + 
               `hour = (SNTP.hour / 10).to_i(2) << 4 | (SNTP.hour % 10).to_i(2)\n` + 
               `min  = (SNTP.min  / 10).to_i(2) << 4 | (SNTP.min  % 10).to_i(2)\n` + 
               `sec  = (SNTP.sec  / 10).to_i(2) << 4 | (SNTP.sec  % 10).to_i(2)\n` + 
               `rtc.write([year, mon, mday, SNTP.wday, hour, min, sec])\n`;
    };

    Generator.mrubyc_i2c_rtc_get = function (block) {
        return `tt = rtc.read\n`;
    };

    Generator.mrubyc_i2c_rtc_time = function (block) {
        return [`sprintf("20%02x%02x%02x%02x%02x%02x",tt[0],tt[1],tt[2],tt[4],tt[5],tt[6])`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_i2c_rtc_lcd = function (block) {
        Generator.prepares_['i2c_lcd'] = Generator.mrubyc_i2c_lcd_init(null);
        return `tt = rtc.read\n` +
               `lcd.clear \n` +
	       `lcd.cursor(0, 0)\n` + 
               `lcd.write_string(sprintf("%02x-%02x-%02x", tt[0], tt[1], tt[2]))\n` + 
               `lcd.cursor(0, 1)\n` + 
               `lcd.write_string(sprintf("%02x:%02x:%02x", tt[4], tt[5], tt[6]))\n`;
    };


    ////
    //// LCD
    ////
    Generator.mrubyc_i2c_lcd_init = function (block) {
        Generator.prepares_['i2c'] = Generator.mrubyc_i2c_init(null);
        return `lcd = AQM0802A.new(i2c)\n` +
               `lcd.setup\n`;
    }; 

    Generator.mrubyc_i2c_lcd_write = function (block) {
        Generator.prepares_['i2c_lcd'] = Generator.mrubyc_i2c_lcd_init(null);
        const line = Generator.getFieldValue(block, 'LINE') || null;
        const text = Generator.valueToCode(block, 'TEXT', Generator.ORDER_NONE);
        return `lcd.cursor(0, ${line})\n` + 
               `lcd.write_string((${text}).to_s)\n`;
    };

    Generator.mrubyc_i2c_lcd_clear = function (block) {
        return `lcd.clear \n` ;
    };


    //
    // GPS
    //
    Generator.mrubyc_uart_gps_init = function (block) {
        return `gps_pw = GPIO.new(5, GPIO::OUT)\n` +
 	       `sleep 1\n`+
	       `gps = UART.new(2, 9600)\n`+
	       `sleep 1\n`+
	       `gps.write("$PMTK314,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29\\r\\n")\n`+
	       `sleep 1\n`;
    };

    Generator.mrubyc_uart_gps_read = function (block) {
	Generator.prepares_['gps'] = Generator.mrubyc_uart_gps_init(null);
        return `gps.clear_tx_buffer\n` +
 	       `sleep 3\n`+
	       `lines = gps.read_nonblock(4096).split('$').pop\n`+
 	       `gps0 = lines.split(',')\n`;
    };
    
    Generator.mrubyc_uart_gps_status = function (block) {
        return [`(gps0[2] == "A" && gps0.size == 13)`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_uart_gps_time = function (block) {
        return [`"20#{gps0[9][4]}#{gps0[9][5]}#{gps0[9][2]}#{gps0[9][3]}#{gps0[9][0]}#{gps0[9][1]}#{sprintf("%06d",gps0[1].to_i)}"`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_uart_gps_lat = function (block) {
        return [`gps0[3]`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_uart_gps_lng = function (block) {
        return [`gps0[5]`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_uart_gps_lcd = function (block) {
	Generator.prepares_['i2c_lcd'] = Generator.mrubyc_i2c_lcd_init(null);
        return `lcd.clear \n` +
	       `lcd.cursor(0, 0)\n` + 
               `lcd.write_string("#{gps0[9][4]}#{gps0[9][5]}-#{gps0[9][2]}#{gps0[9][3]}-#{gps0[9][0]}#{gps0[9][1]}")\n` +
               `lcd.cursor(0, 1)\n` + 
               `lcd.write_string(sprintf("%s%s:%s%sUTC",gps0[1][0],gps0[1][1],gps0[1][2],gps0[1][3]).to_s)\n`;
    };
    
    Generator.mrubyc_uart_gps_distance_measure = function (block) {
        return `pos0 = "#{gps0[3][0]}#{gps0[3][1]}".to_f \n` +
	    `pos1 = "#{gps0[3][2]}#{gps0[3][3]}#{gps0[3][4]}#{gps0[3][5]}#{gps0[3][6]}#{gps0[3][7]}#{gps0[3][8]}".to_f \n`+
	    `pos2 = "#{gps0[5][0]}#{gps0[5][1]}#{gps0[5][2]}".to_f \n` +
	    `pos3 = "#{gps0[5][3]}#{gps0[5][4]}#{gps0[5][5]}#{gps0[5][6]}#{gps0[5][7]}#{gps0[5][8]}#{gps0[5][9]}".to_f \n`+
	    `if (sw34.read == 0) && (sw35.read == 0) && (sw18.read == 0)\n` + 
	    `  led13.write(1) \n  pos = [35,29.8100,133,1.5250] \n` +
	    `elsif (sw34.read == 1) && (sw35.read == 0) && (sw18.read == 0)\n` +
	    `  led12.write(1) \n  pos = [35,29.7431,133,1.5960] \n` +
	    `elsif (sw34.read == 0) && (sw35.read == 1) && (sw18.read == 0)\n`+
	    `  led14.write(1) \n  pos = [35,29.8635,133,1.5397] \n`+
	    `elsif (sw34.read == 1) && (sw35.read == 1) && (sw18.read == 0)\n` +
	    `  led27.write(1) \n  pos = [35,29.7880,133,1.5800] \n`+
	    `elsif (sw34.read == 0) && (sw35.read == 0) && (sw18.read == 1)\n`+
	    `  led26.write(1) \n  pos = [35,29.8191,133,1.6020] \n`+
	    `elsif (sw34.read == 1) && (sw35.read == 0) && (sw18.read == 1)\n`+
	    `  led25.write(1) \n  pos = [35,29.8160,133,1.5628] \n`+
	    `elsif (sw34.read == 0) && (sw35.read == 1) && (sw18.read == 1)\n`+
	    `  led33.write(1) \n  pos = [35,29.8490,133,1.5792] \n`+
	    `elsif (sw34.read == 1) && (sw35.read == 1) && (sw18.read == 1)\n`+
	    `  led32.write(1) \n  pos = [35,29.7717,133,1.5980] \n`+
	    `end\n`+
	    `lat_del = ( (pos[0] - pos0).abs * 60 + (pos[1] - pos1).abs ) * 1521 \n`+
	    `lng_del = ( (pos[2] - pos2).abs * 60 + (pos[3] - pos3).abs ) * 1849 \n`+
	    `gps_del = Math.sqrt(lat_del * lat_del + lng_del * lng_del)\n`;
    };

    Generator.mrubyc_uart_gps_distance = function (block) {
        return [`sprintf("%.1f",gps_del).to_f`, Generator.ORDER_ATOMIC];
    };

    
    //
    // SDカード
    //
    Generator.mrubyc_spi_sd_init = function (block) {
        return `SDSPI.spi_bus_initialize(23, 19, 18)\n` +
 	       `SDSPI.esp_vfs_fat_sdspi_mount(2, "/sdcard")\n`;
    };

    Generator.mrubyc_spi_sd_write = function (block) {
	const file = Generator.valueToCode(block, 'FILE', Generator.ORDER_NONE);
	const str  = Generator.valueToCode(block, 'STR',  Generator.ORDER_NONE);
        return `fid = ESP32_STDIO.fopen( sprintf("/sdcard/%s",${file}), "a")\n` +
	       `ESP32_STDIO.fputs(fid, ${str})\n`+
	       `ESP32_STDIO.fputs(fid, "\\n")\n`+
	       `ESP32_STDIO.fclose(fid)\n`;
    };
    
     
    //
    // SCD30
    //
    Generator.mrubyc_i2c_scd30_init = function (block) {
	Generator.prepares_['i2c'] = Generator.mrubyc_i2c_init(null);
        return  `scd30 = SCD30.new(i2c)\n` +
                `sleep(3)\n`;
    };
    
    Generator.mrubyc_i2c_scd30_status = function (block) {
        return [`scd30.dataReady`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_i2c_scd30_read = function (block) {
        return `scd30val = scd30.read\n`;
    };

    Generator.mrubyc_i2c_scd30_co2 = function (block) {
        return [`scd30val[0]`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_i2c_scd30_temp = function (block) {
        return [`scd30val[1]`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_i2c_scd30_humi = function (block) {
        return [`scd30val[2]`, Generator.ORDER_ATOMIC];
    };
    
    // 高専サーバへの送信
    //
    Generator.mrubyc_matsue_send = function (block) {
        const val  = Generator.valueToCode(block,   'VALUE', Generator.ORDER_NONE);
        return  `HTTPClient.init(${val})\n` +
                `HTTPClient.invoke()\n` +
                `HTTPClient.cleanup()\n`;
    };

    Generator.mrubyc_matsue_mem_init = function (block) {
        return  `list  = Array.new\n`+
	        `time0 = 0\n`;
    };
    
    Generator.mrubyc_matsue_mem_store = function (block) {
        Generator.prepares_['mem'] = Generator.mrubyc_matsue_mem_init(null);
	const name = Generator.valueToCode(block,   'NAME') || null;
        return  `if gps0[1].to_i - time0 > 199 \n` +
	        `  list.push( sprintf("http://pluto.epi.it.matsue-ct.jp/gps/monitoring.php?hostname=%s&time=%s&lat=%s&lng=%s&utc=%d",${name},"20#{gps0[9][4]}#{gps0[9][5]}#{gps0[9][2]}#{gps0[9][3]}#{gps0[9][0]}#{gps0[9][1]}#{sprintf("%06d",gps0[1].to_i)}",gps0[3],gps0[5],1) ) \n`+
	        `  time0 = gps0[1].to_i \n`+
  	        `end \n`;
    };

    Generator.mrubyc_matsue_mem_send = function (block) {
        Generator.prepares_['mem'] = Generator.mrubyc_matsue_mem_init(null);
        return  `while list.size > 0 \n`+
		'  data = list.shift \n'+
		`  HTTPClient.init( data )\n` +
                `  HTTPClient.invoke()\n` +
                `  HTTPClient.cleanup()\n`+
                `end\n`;		
	};
    
    Generator.mrubyc_matsue_send_data = function (block) {
	const name = Generator.valueToCode(block,   'NAME') || null;
	const time = Generator.valueToCode(block,   'TIME', Generator.ORDER_NONE);
	const key  = Generator.getFieldValue(block, 'KEY') || null;
        const val  = Generator.valueToCode(block,   'VALUE', Generator.ORDER_NONE);
	const tz   = Generator.getFieldValue(block, 'TIMEZONE') || null;
        return  `url = sprintf("http://pluto.epi.it.matsue-ct.jp/iotex2/monitoring3.php?hostname=%s&time=%s&%s=%f&utc=%d",${name},${time},"${key}",${val},${tz})\n` +
                `HTTPClient.init(url)\n` +
                `HTTPClient.invoke()\n` +
                `HTTPClient.cleanup()\n`;
    };

    Generator.mrubyc_matsue_send_gps = function (block) {
	const name = Generator.valueToCode(block,   'NAME') || null;
	const time = Generator.valueToCode(block,   'TIME', Generator.ORDER_NONE);
	const lat  = Generator.valueToCode(block,   'LAT',  Generator.ORDER_NONE);
	const lng  = Generator.valueToCode(block,   'LNG',  Generator.ORDER_NONE);
	const tz   = Generator.getFieldValue(block, 'TIMEZONE') || null;
        return  `url = sprintf("http://pluto.epi.it.matsue-ct.jp/gps/monitoring.php?hostname=%s&time=%s&lat=%s&lng=%s&utc=%d",${name},${time},${lat},${lng},${tz})\n` +
                `HTTPClient.init(url)\n` +
                `HTTPClient.invoke()\n` +
                `HTTPClient.cleanup()\n`;
    };

   Generator.mrubyc_spi_sd_matsue_store_data = function (block) {
	const file = Generator.valueToCode(block,   'FILE', Generator.ORDER_NONE);
	const name = Generator.valueToCode(block,   'NAME') || null;
	const time = Generator.valueToCode(block,   'TIME', Generator.ORDER_NONE);
	const lat  = Generator.valueToCode(block,   'LAT',  Generator.ORDER_NONE);
	const lng  = Generator.valueToCode(block,   'LNG',  Generator.ORDER_NONE);
	const tz   = Generator.getFieldValue(block, 'TIMEZONE') || null;
        return  `url = sprintf("http://es2021.epi.it.matsue-ct.jp/~sugiyama/php/monitoring.php?hostname=%s&time=%s&lat=%s&lng=%s&utc=%d",${name},${time},${lat},${lng},${tz})\n` +
	        `fid = ESP32_STDIO.fopen( sprintf("/sdcard/%s",${file}), "a")\n` +
	        `ESP32_STDIO.fputs(fid, "curl \\"#{url}\\"")\n`+
	        `ESP32_STDIO.fputs(fid, "\\n")\n`+
	        `ESP32_STDIO.fclose(fid)\n`;
    };    
    

    //
    // Ambient
    //

    Generator.mrubyc_ambient_send_to = function (block) {
        const id = Generator.valueToCode(block, 'ID', Generator.ORDER_NONE);
        const rkey = Generator.valueToCode(block, 'RKEY', Generator.ORDER_NONE);
        const wkey = Generator.valueToCode(block, 'WKEY', Generator.ORDER_NONE);
        return  `ambient_client_id = ${id}\n` +
                `ambient_read_key = ${rkey}\n` +
                `ambient_write_key = ${wkey}\n` +
                `url = "http://ambidata.io/api/v2/channels/#{ambient_client_id}/data"\n`;
    };

    Generator.mrubyc_ambient_add_data = function (block) {
        const d1 = Generator.getFieldValue(block, 'D1') || null;
        const data1 = Generator.valueToCode(block, 'DATA1', Generator.ORDER_NONE);
        const d2 = Generator.getFieldValue(block, 'D2') || null;
        const data2 = Generator.valueToCode(block, 'DATA2', Generator.ORDER_NONE);
        return `data = "{\n` +
                  `\\\"writeKey\\\": \\\"#{ambient_write_key}\\\",\n` +
                  `\\\"${d1}\\\": #{${data1}},\n` +
                  `\\\"${d2}\\\": #{${data2}}\n` +
                `}".tr("\\n", "")\n`
    };

    Generator.mrubyc_ambient_data_send = function (block) {
        return  `connected = check_network_status()\n` + 
                `if connected\n` +
                `  http_client_init(url)\n` +
                `  http_client_set_header("Content-Type", "application/json")\n` +
                `  http_client_set_header("Connection", "close")\n` +
                `  http_client_set_post_field(data)\n` +
                `  get_http_response()\n` +
                `  http_client_cleanup()\n` +
                `end\n`;
    };


    //
    // その他
    //
    Generator.mrubyc_while = function (block) {
        const buf = getUnquoteText(block, 'CONDITION', Generator.ORDER_NONE);
        const branch = Generator.statementToCode(block, 'SUBSTACK') || '';
        return `while ${buf} do\n${branch}end\n`;
    };
    
    Generator.mrubyc_puts = function (block) {
        const output = getUnquoteText(block, 'OUTPUT', Generator.ORDER_NONE);
        return `puts "${output}"\n`;
    };

    Generator.mrubyc_puts_var = function (block) {
        const output = getUnquoteText(block, 'OUTPUT', Generator.ORDER_NONE);
        return `puts ${output}\n`;
    };

    Generator.ruby_statement_with_block = function (block) {
        const statement = getUnquoteText(block, 'STATEMENT', Generator.ORDER_NONE);
        let args = getUnquoteText(block, 'ARGS', Generator.ORDER_NONE);
        if (args.length > 0) {
            args = ` ${args}`;
        }
        const branch = Generator.statementToCode(block, 'SUBSTACK') || '';
        return `${statement} do${args}\n${branch}end\n`;
    };

    Generator.ruby_expression = function (block) {
        const expression = getUnquoteText(block, 'EXPRESSION', Generator.ORDER_NONE);
        return [expression, Generator.ORDER_ATOMIC];
    };

    Generator.ruby_range = function (block) {
        const fromNum = Generator.valueToCode(block, 'FROM', Generator.ORDER_RANGE) || 1;
        const toNum = Generator.valueToCode(block, 'TO', Generator.ORDER_RANGE) || 10;
        return [`${fromNum}..${toNum}`, Generator.ORDER_FUNCTION_CALL];
    };

    Generator.ruby_exclude_range = function (block) {
        const fromNum = Generator.valueToCode(block, 'FROM', Generator.ORDER_RANGE) || 1;
        const toNum = Generator.valueToCode(block, 'TO', Generator.ORDER_RANGE) || 10;
        return [`${fromNum}...${toNum}`, Generator.ORDER_FUNCTION_CALL];
    };

    return Generator;
}
