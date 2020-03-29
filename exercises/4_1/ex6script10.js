let piece = prompt("what is the piece?");

let king="one square all direction";
let queen="any number of squares all direction";
let rook="any number, vertically/horizontally";
let bishop="any number, diagonals";
let knight="square in L";
let pawns="foward one square";

if(piece.toLowerCase()=="king"){
    console.log(king);
}else if(piece.toLowerCase()=="queen"){
    console.log(queen);
}else if(piece.toLowerCase()=="rook"){
    console.log(rook);
}else if(piece.toLowerCase()=="bishop"){
    console.log(bishop);
}else if(piece.toLowerCase()=="knight"){
    console.log(knight);
}else if(piece.toLowerCase()=="pawns"){
    console.log(pawns);
}else{
    console.log("invalid value")
}