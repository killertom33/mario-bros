const canvas = document.getElementById('canvasElement');
const context = canvas.getContext('2d');

//utility constants
const gravity = 4;

//game dimensions
canvas.width = window.innerWidth;
canvas.height = 740;

class Player {
    constructor() {
        this.position={
            x: 0,
            y: 0
        }
        this.velocity={
            x: 1,
            y: 0
        }
        this.width=50,
        this.height=50
    }

    draw(){
        context.fillStyle = 'red';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.draw();

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }
        else {
            keys.up.pressed = false;
            this.velocity.y = 0;
            }

            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
    }
}

const player = new Player();
const keys = {
    rigth : {
        pressed: false
    },
    left : {
        pressed: false
    },
    up : {
        pressed: false
    },
    down : {
        pressed: false
    }
}


function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width, canvas.height);
    player.update();

    if(keys.rigth.pressed){
        player.velocity.x = 9;
    } else if (keys.left.pressed) {
        player.velocity.x = -9;
    } else player.velocity.x = 0;

    if(keys.up.pressed){    
    } else player.velocity.y = 0;
}

animate();

window.addEventListener('keydown',({keyCode}) => {
        switch (keyCode) {
            case 65:
                keys.left.pressed = true
                break;
            case 87:
                if (!keys.up.pressed) {
                    player.velocity.y = -40;
                    keys.up.pressed = true
                } 
                break;
            case 68:
                keys.rigth.pressed = true
                break;
            case 83:
                keys.down.pressed = true
                break;
        }
});

window.addEventListener('keyup',({keyCode}) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = false
            break;
        case 68:
            keys.rigth.pressed = false
            break;
        case 83:
            keys.down.pressed = false
            break;
    }
});




