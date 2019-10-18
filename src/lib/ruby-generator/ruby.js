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

    Generator.mrubyc_gpio_init_output = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `gpio_init_output(${pin})\n`;
    };

    Generator.mrubyc_gpio_init_input = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `gpio_init_input(${pin})\n`;
    };

    Generator.mrubyc_i2c_lcd_init = function (block) {
        return `i2c = GpioTest.new(22, 21)\ni2c.i2c_init\ni2c.lcd_init\n`;
    };

    Generator.mrubyc_i2c_lcd_write = function (block) {
        const order = Generator.ORDER_FUNCTION_CALL;
        const line = Generator.getFieldValue(block, 'LINE') || null;
        const text = Generator.valueToCode(block, 'TEXT', Generator.ORDER_NONE);
        return [`${line}i2c.lcd_write(0x40, sprintf(${text}))\n`, order];
    };

    Generator.mrubyc_i2c_lcd_write_var = function (block) {
        const order = Generator.ORDER_FUNCTION_CALL;
        const line = Generator.getFieldValue(block, 'LINE') || null;
        const text = Generator.valueToCode(block, 'TEXT', Generator.ORDER_NONE);
        const hensu = Generator.valueToCode(block, 'VAR', Generator.ORDER_NONE);
        return [`${line}i2c.lcd_write(0x40, sprintf(${text},${hensu}))\n`, order];
    };

    Generator.mrubyc_i2c_lcd_write = function (block) {
        const order = Generator.ORDER_FUNCTION_CALL;
        const line = Generator.getFieldValue(block, 'LINE') || null;
        const text = Generator.valueToCode(block, 'TEXT', Generator.ORDER_NONE);
        return [`${line}i2c.lcd_write(0x40, sprintf(${text}))\n`, order];
    };

    Generator.mrubyc_gpio_set_level = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        const state = Generator.getFieldValue(block, 'STATE') || null;
        return [`gpio_set_level(${pin},${state})\n`,Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_gpio_sound = function (block) {
        const order = Generator.ORDER_FUNCTION_CALL;
        const sound = Generator.getFieldValue(block, 'SOUND') || null;
        const time = Generator.valueToCode(block, 'TIME', Generator.ORDER_NONE);
        return [`gpio_sound(15,${sound},${time})\n`, order];
    };

    Generator.mrubyc_LED = function (block) {
        const object = Generator.getFieldValue(block, 'LED') || null;
        return [object, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_buzzer = function (block) {
        return [`15`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_sw = function (block) {
        const object = Generator.getFieldValue(block, 'SW') || null;
        return [object, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_while = function (block) {
        const buf = getUnquoteText(block, 'CONDITION', Generator.ORDER_NONE);
        const branch = Generator.statementToCode(block, 'SUBSTACK') || '';
        return `while ${buf} do\n${branch}end\n`;
    };
    
    Generator.mrubyc_thermistor_trans = function (block) {
        const vref = getUnquoteText(block, 'VREF', Generator.ORDER_NONE);
        return [`1.to_f / ( 1.to_f / 3435 * Math.log(((3300 - ${vref}).to_f / (${vref}.to_f/ 10_000)) / 10_000) + 1.to_f / (25 + 273) ) - 273`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_puts = function (block) {
        const output = getUnquoteText(block, 'OUTPUT', Generator.ORDER_NONE);
        return `puts "${output}"\n`;
    };

    Generator.mrubyc_puts_var = function (block) {
        const output = getUnquoteText(block, 'OUTPUT', Generator.ORDER_NONE);
        return `puts ${output}\n`;
    };

    Generator.mrubyc_read_adc = function (block) {
        return ['read_adc', Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_init_adc = function (block) {
        return `init_adc\n`;
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
