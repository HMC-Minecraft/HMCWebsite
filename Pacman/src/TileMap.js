export default class TileMap{
    constructor(tileSize) {
        this.tileSize = tileSize;

        this.yellowDot = new Image();
        this.yellowDot.src = "images/yellowDot.png";

        this.wall = new Image();
        this.wall.src = "images/wall.png";
    }
    map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    draw(ctx) {
      for(let row=0; row < this.map.length; row++){
        for(let column=0; column < this.map[row].length; column++){
            let tile = this.map[row][column];
            if(tile===1){
                this.#drawWall(ctx, column, row, this, this.tileSize);
            }
        }
      }
    }
    
    
    #drawWall(ctx,column,row,size){
        ctx.drawImage(
            this.wall,
            column*this.tileSize,
            row * this.tileSize, size, size);
    }

    setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
    }
}