let piece="pawns";

function king(){
    console.log("one square all direction");
}

function queen(){
    console.log("any number of squares all direction");
}

function rook(){
    console.log("any number, vertically/horizontally");
}

function bishop(){
    console.log("any number, vertically/horizontally");
}

function knight(){
    console.log("square in L");
}

function pawns(){
    console.log("foward one square");
}

if(piece.toLowerCase()=="king"){
    console.log(king());
}else if(piece.toLowerCase()=="queen"){
    console.log(queen());
}else if(piece.toLowerCase()=="rook"){
    console.log(rook());
}else if(piece.toLowerCase()=="bishop"){
    console.log(bishop());
}else if(piece.toLowerCase()=="knight"){
    console.log(knight());
}else if(piece.toLowerCase()=="pawns"){
    console.log(pawns());
}else{
    console.log("invalid value")
}