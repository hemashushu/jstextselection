/**
 * 用于表示文本编辑框中的文本选中状况的对象，同时也用于
 * 表示光标（cursor）的位置（position）
 *
 * 最简单表示文本选中状况的方法是使用两个整型数字分别表示开始和
 * 结束位置（position），比如 startPosition 和 endPosition，
 * 跟字符串的索引值很类似，但却不完全一样，
 * 比如有一个由两个字符组成的字符串 “ab”：
 *
 * |a|b|
 *
 * 有效的字符的索引只有 2 个（0, 1），但光标的位置却有 3 个（上面使用竖线
 * 表示的位置，即 0,1,2）
 *
 * 在概念上：
 * - 索引值（index）对应的是具体的某个字符，而位置（position）表示
 *   的是字符之间的地方。
 * - 索引值用在计算，位置用于表示层面（UI）
 *
 * 在实际计算过程中，索引和位置却很相近，比如有字符串
 *
 *  0 1 2 3 4 5 6 7  <-- index
 *  a b{c d e}f g h
 * 0 1 2 3 4 5 6 7 8 <-- position
 *
 * 其中花括号（{}）表示被选中的文本的光标的开始和结束位置，由图可知
 * 选中的字符串 “cde” 的索引值是 [2,5)，而位置值是 [2,5]，
 * 当需要从选中状态获取选中文本时，只需直接把位置值当成索引值即可，如：
 * let selectedText = text.substring(2,5)
 *
 */
class TextSelection {

    /**
     *
     * @param {*} startPosition 0 或正整数，选中文本的开始位置
     * @param {*} endPosition 0 或正整数，可选的。
     *     表示选中文本的结束位置，如果省略此参数，则结束位置为开始位置。
     */
	constructor(startPosition, endPosition = startPosition) {
		this.start = startPosition;
        this.end = endPosition;
	}

	static fromLength(start, length) {
		return new TextSelection(start, start + length);
	}

	static isCollapsed(textSelection) {
		return textSelection.start === textSelection.end;
	}

    static getSelectedText(text, textSelection) {
        return text.substring(textSelection.start, textSelection.end);
    }
}

module.exports = TextSelection;