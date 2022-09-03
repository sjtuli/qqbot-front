// 本文件由FirstUI授权予上海交在科技有限公司（手机号：  159 0  0 73   3 604，身份证尾号：E8J88D）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import mode from './mode.js'

function QR8bitByte(data) {
	this.mode = mode.MODE_8BIT_BYTE;
	this.data = data;
}

QR8bitByte.prototype = {

	getLength : function(buffer) {
		return this.data.length;
	},

	write : function(buffer) {
		for (var i = 0; i < this.data.length; i++) {
			// not JIS ...
			buffer.put(this.data.charCodeAt(i), 8);
		}
	}
};

export default QR8bitByte;
