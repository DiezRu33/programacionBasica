


// funcion para crear aleatoriedad
        function aleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
// ----- cierra funcion aleatoriedad

// funcion de eleccion de la jugada (jugador y pc)
        function eleccion(jugada) {

            movimiento = "";
            
            if(jugada == 1){
                movimiento = "piedra. ";
            }else if(jugada == 2){
                movimiento = "papel. ";
            }else if(jugada == 3){
                movimiento = "tijera. ";
            }else{
                movimiento = "Movimiento incorrecto. ❌";
            }

            return movimiento;

        }
// ------- termina funcion eleccion

// funcion del combate entre user1 y user2;
        function combate(j, j2){

            if(j == j2){
                alert("Empate");
            }else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
                alert("Ganaste");
                triunfos += 1;
            }else{
                alert("Perdiste");
                perdidas += 1;
            }
        }
// ------- termina funcion del combate

        let jugador = 0;
        let pc = 0
        let triunfos = 0;
        let perdidas = 0;

        while (triunfos < 3 && perdidas < 3) {
            pc = aleatorio(1, 3);
            jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
            
            alert("Tu eliges: " + eleccion(jugador));
            alert("PC elige: " + eleccion(pc))

            combate(jugador, pc);
        }


        alert("CONTADOR\nGanaste: " + triunfos + "\n" + "Perdiste: " + perdidas + "");

        if(triunfos == 3){
            alert("GANASTE");
        }else{
            alert("PERDISTE");
        }
