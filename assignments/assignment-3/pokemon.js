function Pokemon(name, type, level, hp) {
    this.name = name.toUpperCase();
    this.type = type.charAt(0).toUpperCase() + type.slice(1);
    this.level = level;
    this.hp = hp;
}

Pokemon.prototype.levelUp = function () {
    this.level++;
    this.hp = Math.floor(2.25 * this.level);
    return this;
};

Pokemon.prototype.faint = function () {
    return this.hp <= 0;
};

Pokemon.prototype.revive = function () {
    this.hp = Math.floor(2.25 * this.level);
    return this;
};

Pokemon.prototype.call = function () {};
