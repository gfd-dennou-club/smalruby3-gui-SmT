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

    //ここからブロックとRubyプログラムの対応を書く

    //
    // 「むずい」かてごり
    //

    Generator.mrubyc_gpio_output_init_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `led${pin} = GPIO.new( ${pin}, GPIO::OUT )\n` ;
    };
    Generator.mrubyc_gpio_input_init_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `sw${pin} = GPIO.new( ${pin}, GPIO::IN, GPIO::PULL_UP)\n`;
    };
    Generator.mrubyc_gpio_adc_init_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `adc${pin} = ADC.new( ${pin}, ADC::ATTEN_11DB, ADC::WIDTH_12BIT )\n`;
    };
    Generator.mrubyc_gpio_pwm_init_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `sleep(1)\n` +
	       `pwm${pin} = PWM.new( ${pin} )\n` +
	       `sleep(1)\n`;
    };

    Generator.mrubyc_gpio_set_level_3 = function (block) {
        const pin   = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        const state = Generator.getFieldValue(block, 'STATE') || null;
        return `led${pin}.write(${state})\n`;
    };
    Generator.mrubyc_gpio_get_level_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return [`sw${pin}.read`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_gpio_pwm_duty_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        const value = Generator.valueToCode(block, 'VALUE', Generator.ORDER_NONE);
        return `pwm${pin}.duty( (${value} * 128).to_i )\n` ;
    };
    Generator.mrubyc_gpio_pwm_freq_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        const value = Generator.valueToCode(block, 'VALUE', Generator.ORDER_NONE);
        return `pwm${pin}.freq( (${value}).to_i )\n`;
    };
    Generator.mrubyc_gpio_adc_vol_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return [`adc${pin}.read`, Generator.ORDER_ATOMIC];
    };        
    
    return Generator;

}
