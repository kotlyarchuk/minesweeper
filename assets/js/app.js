var field = {
  size: 9,
  mines: 10,

  renderField: function(){
    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        $(".container").append("<div class='field-block' x='"+j+"' y='"+i+"'></div>");
      }
    }
  },

  renderMines: function(){
    for (var i = 0; i < this.mines; i++) {
      $("div[x='"+this.randomCell(this.size)+"'][y='"+this.randomCell(this.size)+"']").addClass("mine");
    }
  },

  renderNumbers: function(){
    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        block = $(".container div[x='"+j+"'][y='"+i+"']");

        counter = 0;
        if ( !block.hasClass("mine") ){
          var x = parseInt( block.attr("y") );
          var y = parseInt( block.attr("x") );
          for (var k = x-1; k < x+2; k++) {
            for (var l = y-1; l < y+2; l++) {
              if( $(".container div[x='"+l+"'][y='"+k+"']").hasClass("mine") ){
                $(".container div[x='"+l+"'][y='"+k+"']").text("B");
                counter++;
              }
            }
          }
          if(counter > 0){
            block.text(counter);
          }
        }

      }
    }

  },

  randomCell: function(size){
    return Math.floor(Math.random()*size);
  }

}

$(document).ready(function(){
  field.renderField();
  field.renderMines();
  field.renderNumbers();

  $(".container div").on("mousedown", function(event){
    //left click
    if(event.which === 1){
      if( this.hasClass("mine") ){
        //GAMEOVER
      } else{
        //OPEN FIELD
      }
    }
    //right click
    if(event.which === 3){
      //place flag
    }
  })
});
