const assert = require('assert/strict')

const {TextSelection} = require('../index');

describe('TextSelection Test', ()=>{

    it('Test constructor', ()=>{
        let t1 = new TextSelection(10,20);
        assert.equal(t1.start, 10);
        assert.equal(t1.end, 20);

        let t2 = new TextSelection(30);
        assert.equal(t2.start, 30);
        assert.equal(t2.end, 30);

        let t3 = TextSelection.fromLength(40, 5);
        assert.equal(t3.start, 40);
        assert.equal(t3.end, 45);
    });

    it('Test isCollapsed()', ()=>{
        let t1 = new TextSelection(10,20);
        assert(!TextSelection.isCollapsed(t1));

        let t2 = new TextSelection(30);
        assert(TextSelection.isCollapsed(t2));
    });

    it('Test getSelectedText()', ()=>{
        let text1 = '0123456789abcdef';

        let t1 = new TextSelection(5, 8);
        let r1 = TextSelection.getSelectedText(text1, t1);
        assert.equal(r1, '567');

        let t2 = new TextSelection(8);
        let r2 = TextSelection.getSelectedText(text1, t2);
        assert.equal(r2, '');
    });
});

