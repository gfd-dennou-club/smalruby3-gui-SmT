/* global Opal */
import _ from 'lodash';

/**
 * * Rboard converter
 * */
const RboardConverter = {
    // eslint-disable-next-line no-unused-vars
    // メソッド
    onSend: function (receiver, name, args, rubyBlockArgs, rubyBlock) {
        let block;
        if ((this._isSelf(receiver) || receiver === Opal.nil) && !rubyBlock) {
            switch (name){
            case 'pinMode':
                if (args.length === 2 && this._isNumberOrBlock(args[0]) && this._isNumberOrBlock(args[1])){
                    let opcode;
                    switch (args[1].value){
                    case 0:
                        opcode = 'mrubyc_rboard_gpio_init_output';
                        break;
                    case 1:
                        opcode = 'mrubyc_rboard_gpio_init_input';
                        break;
                    }
                    block = this._createBlock(opcode, 'statement');
                    this._addField(block, 'PIN', args[0]);
                }
                break;

            case 'digitalWrite':
                if (args.length === 2 && this._isNumberOrBlock(args[0]) && this._isNumberOrBlock(args[1])){
                    block = this._createBlock('mrubyc_rboard_gpio_set_level', 'statement');
                    this._addField(block, 'PIN', args[0]);
                    this._addField(block, 'STATE', args[1]);
                }
                break;
                
            case 'digitalRead':
                if (args.length === 1 && this._isNumberOrBlock(args[0])){
                    block = this._createBlock('mrubyc_rboard_pin_state', 'statement');
                    this._addField(block, 'PIN', args[0]);
                }
                break;

            case 'pinInit':
                if(args.length === 0){
                    block = this._createBlock('mrubyc_rboard_pin_init', 'statement');
                }
                break;

            case 'puts':
                if(args,length === 1 && this._isStringOrBlock(args[0])){
                    block = this._createBlock('mrubyc_rboard_puts', 'statement');
                    this._addTextInput(block, 'STR', args[0], '');
                }
                break;
            }
        }
        return block;
    }
};

export default RboardConverter;
