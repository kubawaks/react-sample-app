function Module() {
    let a = 'a';

    function showA() {
        console.log(a);
    }

    function showDoubleA() {
        console.log(a+a);
    }

    return {
        showA: showA,
        showDoubleA: showDoubleA
    }


}

function Brick() {
    this.width = 10;
    this.height = 20;


}

Brick.prototype.show = function() {
    console.log(this.width + ' ' + this.height);
}

function BlueGlassBrick() {
    Brick.call(this);

    this.opacity = 0.5;
    this.color = 'blue';
}

BlueGlassBrick.prototype.show = function() {
    console.log(this.width + ' ' + this.height + ' blue');
}