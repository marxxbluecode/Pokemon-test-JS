function verificar(){
    var mes = document.querySelector('input#month')
    var dia = document.querySelector('input#day')
    var res = document.querySelector('div#res')
    var img = document.getElementById('pic')
    var name = document.querySelector('div#name')
    if (mes.value == 1 || mes.value == 8){
        if (dia.value == 1 || dia.value == 9 || dia.value == 17){
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
        }else{
            window.alert('[ERRO] Data inválida')
        }
    }
    if (mes.value == 2 || mes.value == 11){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Fighting Eletric'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Fighting Poison'
            img.src = 'images/toxicroak.png'
            name.innerHTML = 'Toxicroak!'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Fighting Normal'
            img.src = 'images/bewear.png'
            name.innerHTML = 'Bewear!'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Fighting Dark'
            img.src = 'images/pangoro.png'
            name.innerHTML = 'Pangoro!'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Fighting Dragon'
            img.src = 'images/kommo-o.png'
            name.innerHTML = 'Kommo-o!'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Fighting Ice'
            img.src = 'images/crabominable.png'
            name.innerHTML = 'Crabominable!'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Fighting Bug'
            img.src = 'images/buzzwole.png'
            name.innerHTML = 'Buzzwole!'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Fighting Fairy'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Fighting Ghost'
            img.src = 'images/marshadow.png'
            name.innerHTML = 'Marshadow!'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Fighting Fire'
            img.src = 'images/blaziken.png'
            name.innerHTML = 'Blaziken!'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Fighting Grass'
            img.src = 'images/breloom.png'
            name.innerHTML = 'Breloom!'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Fighting Water'
            img.src = 'images/poliwrath.png'
            name.innerHTML = 'Poliwrath!'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Fighting Rock'
            img.src = 'images/terrakion.png'
            name.innerHTML = 'Terrakion!'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }
    if (mes.value == 3 || mes.value == 7){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Normal Eletric'
            img.src = 'images/heliolisk.png'
            name.innerHTML = 'Heliolisk!'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Normal Poison'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Normal Normal!'
            img.src = 'images/meowth.png'
            name.innerHTML = 'Meowth!'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Normal Dark'
            img.src = 'images/zigzagoon.png'
            name.innerHTML = 'Zigzagoon de Galar!'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Normal Dragon'
            img.src = 'images/drampa.png'
            name.innerHTML = 'Drampa!'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Normal Ice'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Normal Bug'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Normal Fairy'
            img.src = 'images/jigglypuff.png'
            name.innerHTML = 'Jigglypuff!'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Normal Ghost'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Normal Fire'
            img.src = 'images/pyroar.png'
            name.innerHTML = 'Pyroar!'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Normal Grass'
            img.src = 'images/sawsbuck.png'
            name.innerHTML = 'Sawsbuck!'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Normal Water'
            img.src = 'images/bibarel.png'
            name.innerHTML = 'Bibarel!'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Normal Rock'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }

    if (mes.value == 4 || mes.value == 12){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Steel Eletric'
            img.src = 'images/magnemite.png'
            name.innerHTML = 'Magnemite!'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Steel Poison'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Steel Normal'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Steel Dark'
            img.src = 'images/bisharp.png'
            name.innerHTML = 'Bisharp!'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Steel Dragon'
            img.src = 'images/duraludon.png'
            name.innerHTML = 'Duraludon!'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Steel Ice'
            img.src = 'images/sandslash.png'
            name.innerHTML = 'Sandslash de Alola!'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Steel Bug'
            img.src = 'images/scizor.png'
            name.innerHTML = 'Scizor!'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Steel Fairy'
            img.src = 'images/klefki.png'
            name.innerHTML = 'Klefki!'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Steel Ghost'
            img.src = 'images/aegislash.png'
            name.innerHTML = 'Aegislash!'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Steel Fire'
            img.src = 'images/heatran.png'
            name.innerHTML = 'Heatran!'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Steel Grass'
            img.src = 'images/ferrothorn.png'
            name.innerHTML = 'Ferrothorn!'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Steel Water'
            img.src = 'images/empoleon.png'
            name.innerHTML = 'Empoleon!'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Steel Rock'
            img.src = 'images/aggron.png'
            name.innerHTML = 'Aggron!'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }

    if (mes.value == 5 || mes.value == 9){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Psychic Eletric'
            img.src = 'images/raichu.png'
            name.innerHTML = 'Raichu de Alola!'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Psychic Poison'
            img.src = 'images/slowbro.png'
            name.innerHTML = 'Slowbro!'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Psychic Normal'
            img.src = 'images/oranguru.png'
            name.innerHTML = 'Oranguru!'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Psychic Dark'
            img.src = 'images/malamar.png'
            name.innerHTML = 'Malamar!'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Psychic Dragon'
            img.src = 'images/latias.png'
            name.innerHTML = 'Latias!'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Psychic Ice'
            img.src = 'images/jynx.png'
            name.innerHTML = 'Jynx!'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Psychic Bug'
            img.src = 'images/orbeetle.png'
            name.innerHTML = 'Orbeetle!'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Psychic Fairy'
            img.src = 'images/gardevoir.png'
            name.innerHTML = 'Gardevoir!'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Psychic Ghost'
            img.src = 'images/hoopa.png'
            name.innerHTML = 'Hoopa!'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Psychic Fire'
            img.src = 'images/delphox.png'
            name.innerHTML = 'Delphox!'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Psychic Grass'
            img.src = 'images/exeggutor.png'
            name.innerHTML = 'Exeggutor!'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Psychic Water'
            img.src = 'images/starmie.png'
            name.innerHTML = 'Starmie!'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Psychic Rock'
            img.src = 'images/lunatone.png'
            name.innerHTML = 'Lunatone!'
        }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
        }
    }

    if (mes.value == 6 || mes.value == 10){
        if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
        }else if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Flying Eletric'
            img.src = 'images/emolga.png'
            name.innerHTML = 'Emolga!'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Flying Poison'
            img.src = 'images/golbat.png'
            name.innerHTML = 'Golbat!'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Flying Normal'
            img.src = 'images/braviary.png'
            name.innerHTML = 'Braviary!'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Flying Dark'
            img.src = 'images/honchkrow.png'
            name.innerHTML = 'Honchkrow!'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Flying Dragon'
            img.src = 'images/salamence.png'
            name.innerHTML = 'Salamence!'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Flying Ice'
            img.src = 'images/delibird.png'
            name.innerHTML = 'Delibird!'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Flying Bug'
            img.src = 'images/vespiquen.png'
            name.innerHTML = 'Vespiquen!'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Flying Fairy'
            img.src = 'images/togekiss.png'
            name.innerHTML = 'Togekiss!'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Flying Ghost'
            img.src = 'images/drifloon.png'
            name.innerHTML = 'Drifloon!'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Flying Fire'
            img.src = 'images/charizard.png'
            name.innerHTML = 'Charizard!'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Flying Grass'
            img.src = 'images/tropius.png'
            name.innerHTML = 'Tropius!'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Flying Water'
            img.src = 'images/pelipper.png'
            name.innerHTML = 'Pelipper!'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Flying Rock'
            img.src = 'images/archeops.png'
            name.innerHTML = 'Archeops!'
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