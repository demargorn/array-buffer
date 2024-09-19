class ArrayBufferConverter {
   constructor() {
      this.buffer = [];
   }

   load(buffer) {
      this.buffer.push(buffer);
   }

   toString() {
      return JSON.stringify(this.buffer);
   }
}

export { ArrayBufferConverter };
