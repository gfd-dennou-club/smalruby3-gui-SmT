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

    Generator.mrubyc_gpio_set_level = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        const state = Generator.valueToCode(block, 'STATE', Generator.ORDER_NONE);
        return `gpio_set_level(${pin},${state})\n`;
    };

    Generator.mrubyc_define_class = function (block) {
        const buf = getUnquoteText(block, 'CLASS', Generator.ORDER_NONE);
        const branch = Generator.statementToCode(block, 'SUBSTACK') || '';
        return `class ${buf} \n${branch}end\n`;
    };

    Generator.mrubyc_define_function = function (block) {
        const buf = getUnquoteText(block, 'FUNCTION', Generator.ORDER_NONE);
        const branch = Generator.statementToCode(block, 'SUBSTACK') || '';
        return `def ${buf} \n${branch}end\n`;
    };

    Generator.mrubyc_led_turn_on = function (block) {
        return `led.turn_on\n`;
    };

    Generator.mrubyc_led_turn_off = function (block) {
        return `led.turn_off\n`;
    };

    Generator.mrubyc_led_new = function (block) {
        const pin = getUnquoteText(block, 'PIN', Generator.ORDER_NONE);
        return `led = Led.new(${pin})\n`;
    };

    Generator.mrubyc_thermistor_new = function (block) {
        return `thermistor = Thermistor.new\n`;
    };

    Generator.mrubyc_thermistor_temperature = function (block) {
        return `thermistor.temperature\n`;
    };

    Generator.mrubyc_puts = function (block) {
        const output = getUnquoteText(block, 'OUTPUT', Generator.ORDER_NONE);
        return `puts "${output}"\n`;
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
