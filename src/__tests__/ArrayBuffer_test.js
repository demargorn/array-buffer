import { ArrayBufferConverter } from '../ArrayBuffer';
import { getBuffer } from '../getBuffer';

const buffConverter = new ArrayBufferConverter();
buffConverter.load(getBuffer());

test('test ArrBufferConverter methods with %o values', () => {
   expect('' + buffConverter).toEqual('[{}]');
});
