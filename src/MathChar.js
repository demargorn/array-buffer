import { Character } from './Character';

class MathChar extends Character {
   constructor(name, type) {
      super(name, type);
      this._attack = null;
      this._stoned = null;
      this.distance = null;
   }

   set stoned(boolean) {
      this._stoned = boolean;
   }

   set attack(value) {
      if (value <= 0) {
         value = 0;
      }
      this._attack = value;
   }

   get stoned() {
      return this._stoned;
   }

   get attack() {
      let coef;

      switch (this.distance) {
         case 1:
            coef = 1;
            break;
         case 2:
            coef = 0.9;
            break;
         case 3:
            coef = 0.8;
            break;
         case 4:
            coef = 0.7;
            break;
         case 5:
            coef = 0.6;
            break;
      }

      if (this._stoned) {
         return this._attack * coef - Math.log2(this.distance) * 5;
      }

      return this._attack * coef;
   }
}

export { MathChar };
