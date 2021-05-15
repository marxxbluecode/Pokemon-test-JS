function verificar(){
    var mes = document.querySelector('input#month')
    var dia = document.querySelector('input#day')
    var res = document.querySelector('div#res')
    var img = document.getElementById('pic')
    var name = document.querySelector('div#name')
    if (mes.value == 1 || mes.value == 8){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Ground Eletric!'
            img.src = 'images/stunfisk.png'
            name.innerHTML = 'Stunfisk!'
            document.body.style.background = '#F7DD72'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Ground Poison!'
            img.src = 'images/nidoking.png'
            name.innerHTML = 'Nidoking!'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Ground Normal!'
            img.src = 'images/diggersby.png'
            name.innerHTML = 'Diggersby!'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Ground Dark!'
            img.src = 'images/krookodile.png'
            name.innerHTML = 'Krookodile!'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Ground Dragon!'
            img.src = 'images/garchomp.png'
            name.innerHTML = 'Garchomp!'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Ground Ice!'
            img.src = 'images/mamoswine.png'
            name.innerHTML = 'Mamoswine!'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Ground Bug!'
            img.src = 'images/nincada.png'
            name.innerHTML = 'Nincada!'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Ground Fairy!'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Ground Ghost!'
            img.src = 'images/golurk.png'
            name.innerHTML = 'Golurk!'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Ground Fire!'
            img.src = 'images/camerupt.png'
            name.innerHTML = 'Camerupt!'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Ground Grass!'
            img.src = 'images/torterra.png'
            name.innerHTML = 'Torterra!'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Ground Water!'
            img.src = 'images/swanpert.png'
            name.innerHTML = 'Swanpert!'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Ground Rock!'
            img.src = 'images/larvitar.png'
            name.innerHTML = 'Larvitar!'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }
    if (mes.value == 2 || mes.value == 11){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Fighting Eletric'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Fighting Poison'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Fighting Normal'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Fighting Dark'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Fighting Dragon'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Fighting Ice'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Fighting Bug'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Fighting Fairy'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Fighting Ghost'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Fighting Fire'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Fighting Grass'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Fighting Water'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Fighting Rock'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }
    if (mes.value == 3 || mes.value == 7){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Normal Eletric'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Normal Poison'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Normal Normal'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Normal Dark'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Normal Dragon'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Normal Ice'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Normal Bug'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Normal Fairy'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Normal Ghost'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Normal Fire'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Normal Grass'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Normal Water'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Normal Rock'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }

    if (mes.value == 4 || mes.value == 12){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Steel Eletric'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Steel Poison'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Steel Normal'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Steel Dark'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Steel Dragon'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Steel Ice'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Steel Bug'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Steel Fairy'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Steel Ghost'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Steel Fire'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Steel Grass'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Steel Water'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Steel Rock'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }

    if (mes.value == 5 || mes.value == 9){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Psychic Eletric'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Psychic Poison'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Psychic Normal'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Psychic Dark'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Psychic Dragon'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Psychic Ice'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Psychic Bug'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Psychic Fairy'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Psychic Ghost'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Psychic Fire'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Psychic Grass'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Psychic Water'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Psychic Rock'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }

    if (mes.value == 6 || mes.value == 10){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Flying Eletric'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Flying Poison'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Flying Normal'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Flying Dark'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Flying Dragon'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Flying Ice'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Flying Bug'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Flying Fairy'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Flying Ghost'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Flying Fire'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Flying Grass'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Flying Water'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Flying Rock'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }
    }
    
    



// // cores
// Ground ='#F7DD72'
// Eletric ='#FFE156 '
// Poison ='#D63AF9 '
// Normal ='#C3BF6D'
// Dark = '#423E37'
// Dragon ='#F8333C'
// Fighting ='#BB0A21'
// Steel ='#748386'
// Ice = '#95f9e3'
// Bug ='#B0DB43'
// Fairy ='#F08CAE'
// Ghost ='#442B48'
// Psychic ='#EA526F'
// Fire ='#CC5803'
// Grass = '#04F06A'
// Water = '#2589BD'
// Rock ='#B1740F'
// Flying ='#A997DF'