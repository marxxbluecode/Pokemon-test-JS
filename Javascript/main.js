function verificar(){
    var mes = document.querySelector('input#month')
    var dia = document.querySelector('input#day')
    var res = document.querySelector('div#res')
    var img = document.getElementById('pic')
    var name = document.querySelector('div#name')
    if (mes.value == 1 || mes.value == 8){
        if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Ground Eletric!'
            img.src = 'Images/stunfisk.png'
            name.innerHTML = 'Stunfisk!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Ground Poison!'
            img.src = 'images/nidoking.png'
            name.innerHTML = 'Nidoking!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Ground Normal!'
            img.src = 'images/diggersby.png'
            name.innerHTML = 'Diggersby!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Ground Dark!'
            img.src = 'images/krookodile.png'
            name.innerHTML = 'Krookodile!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Ground Dragon!'
            img.src = 'images/garchomp.png'
            name.innerHTML = 'Garchomp!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Ground Ice!'
            img.src = 'images/mamoswine.png'
            name.innerHTML = 'Mamoswine!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Ground Bug!'
            img.src = 'images/nincada.png'
            name.innerHTML = 'Nincada!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Ground Fairy!'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Ground Ghost!'
            img.src = 'images/golurk.png'
            name.innerHTML = 'Golurk!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Ground Fire!'
            img.src = 'images/camerupt.png'
            name.innerHTML = 'Camerupt!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Ground Grass!'
            img.src = 'images/torterra.png'
            name.innerHTML = 'Torterra!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Ground Water!'
            img.src = 'images/swanpert.png'
            name.innerHTML = 'Swanpert!'
            document.body.style.background = '#C57341'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Ground Rock!'
            img.src = 'images/larvitar.png'
            name.innerHTML = 'Larvitar!'
            document.body.style.background = '#C57341'
        }
    }
    if (mes.value == 2 || mes.value == 11){
        if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Fighting Eletric'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Fighting Poison'
            img.src = 'images/toxicroak.png'
            name.innerHTML = 'Toxicroak!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Fighting Normal'
            img.src = 'images/bewear.png'
            name.innerHTML = 'Bewear!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Fighting Dark'
            img.src = 'images/pangoro.png'
            name.innerHTML = 'Pangoro!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Fighting Dragon'
            img.src = 'images/kommo-o.png'
            name.innerHTML = 'Kommo-o!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Fighting Ice'
            img.src = 'images/crabominable.png'
            name.innerHTML = 'Crabominable!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Fighting Bug'
            img.src = 'images/buzzwole.png'
            name.innerHTML = 'Buzzwole!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Fighting Fairy'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Fighting Ghost'
            img.src = 'images/marshadow.png'
            name.innerHTML = 'Marshadow!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Fighting Fire'
            img.src = 'images/blaziken.png'
            name.innerHTML = 'Blaziken!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Fighting Grass'
            img.src = 'images/breloom.png'
            name.innerHTML = 'Breloom!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Fighting Water'
            img.src = 'images/poliwrath.png'
            name.innerHTML = 'Poliwrath!'
            document.body.style.background = '#ee3131'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Fighting Rock'
            img.src = 'images/terrakion.png'
            name.innerHTML = 'Terrakion!'
            document.body.style.background = '#ee3131'
        }
    }
    if (mes.value == 3 || mes.value == 7){
        if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Normal Eletric'
            img.src = 'images/heliolisk.png'
            name.innerHTML = 'Heliolisk!'
            document.body.style.background = '#FFE683'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Normal Poison'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Normal!'
            img.src = 'images/meowth.png'
            name.innerHTML = 'Meowth!'
            document.body.style.background = '#FFE683'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Normal Dark'
            img.src = 'images/zigzagoon.png'
            name.innerHTML = 'Zigzagoon de Galar!'
            document.body.style.background = '#FFE683'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Normal Dragon'
            img.src = 'images/drampa.png'
            name.innerHTML = 'Drampa!'
            document.body.style.background = '#FFE683'
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
            document.body.style.background = '#FFE683'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Normal Ghost'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Normal Fire'
            img.src = 'images/pyroar.png'
            name.innerHTML = 'Pyroar!'
            document.body.style.background = '#FFE683'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Normal Grass'
            img.src = 'images/sawsbuck.png'
            name.innerHTML = 'Sawsbuck!'
            document.body.style.background = '#FFE683'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Normal Water'
            img.src = 'images/bibarel.png'
            name.innerHTML = 'Bibarel!'
            document.body.style.background = '#FFE683'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Normal Rock'
            img.src = 'images/pikachu.png'
            name.innerHTML = 'Ops, parece que ainda não temos este tipo de pokemon, quem sabe na 9ª geração.'
        }
    }

    if (mes.value == 4 || mes.value == 12){
        if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Steel Eletric'
            img.src = 'images/magnemite.png'
            name.innerHTML = 'Magnemite!'
            document.body.style.background = '#8BB4A4'
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
            document.body.style.background = '#8BB4A4'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Steel Dragon'
            img.src = 'images/duraludon.png'
            name.innerHTML = 'Duraludon!'
            document.body.style.background = '#8BB4A4'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Steel Ice'
            img.src = 'images/sandslash.png'
            name.innerHTML = 'Sandslash de Alola!'
            document.body.style.background = '#8BB4A4'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Steel Bug'
            img.src = 'images/scizor.png'
            name.innerHTML = 'Scizor!'
            document.body.style.background = '#8BB4A4'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Steel Fairy'
            img.src = 'images/klefki.png'
            name.innerHTML = 'Klefki!'
            document.body.style.background = '#8BB4A4'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Steel Ghost'
            img.src = 'images/aegislash.png'
            name.innerHTML = 'Aegislash!'
            document.body.style.background = '#8BB4A4'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Steel Fire'
            img.src = 'images/heatran.png'
            name.innerHTML = 'Heatran!'
            document.body.style.background = '#8BB4A4'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Steel Grass'
            img.src = 'images/ferrothorn.png'
            name.innerHTML = 'Ferrothorn!'
            document.body.style.background = '#8BB4A4'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Steel Water'
            img.src = 'images/empoleon.png'
            name.innerHTML = 'Empoleon!'
            document.body.style.background = '#8BB4A4'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Steel Rock'
            img.src = 'images/aggron.png'
            name.innerHTML = 'Aggron!'
            document.body.style.background = '#8BB4A4'
        }
    }

    if (mes.value == 5 || mes.value == 9){
        if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Psychic Eletric'
            img.src = 'images/raichu.png'
            name.innerHTML = 'Raichu de Alola!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Psychic Poison'
            img.src = 'images/slowbro.png'
            name.innerHTML = 'Slowbro!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Psychic Normal'
            img.src = 'images/oranguru.png'
            name.innerHTML = 'Oranguru!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Psychic Dark'
            img.src = 'images/malamar.png'
            name.innerHTML = 'Malamar!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Psychic Dragon'
            img.src = 'images/latias.png'
            name.innerHTML = 'Latias!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Psychic Ice'
            img.src = 'images/jynx.png'
            name.innerHTML = 'Jynx!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Psychic Bug'
            img.src = 'images/orbeetle.png'
            name.innerHTML = 'Orbeetle!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Psychic Fairy'
            img.src = 'images/gardevoir.png'
            name.innerHTML = 'Gardevoir!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Psychic Ghost'
            img.src = 'images/hoopa.png'
            name.innerHTML = 'Hoopa!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Psychic Fire'
            img.src = 'images/delphox.png'
            name.innerHTML = 'Delphox!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Psychic Grass'
            img.src = 'images/exeggutor.png'
            name.innerHTML = 'Exeggutor!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Psychic Water'
            img.src = 'images/starmie.png'
            name.innerHTML = 'Starmie!'
            document.body.style.background = '#DE627B'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Psychic Rock'
            img.src = 'images/lunatone.png'
            name.innerHTML = 'Lunatone!'
            document.body.style.background = '#DE627B'
        }
    }

    if (mes.value == 6 || mes.value == 10){
        if (dia.value == 1 || dia.value == 9 || dia.value == 17){
            res.innerHTML = 'Você é Flying Eletric'
            img.src = 'images/emolga.png'
            name.innerHTML = 'Emolga!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 2 || dia.value == 10 || dia.value == 21){
            res.innerHTML = 'Você é Flying Poison'
            img.src = 'images/golbat.png'
            name.innerHTML = 'Golbat!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 3 || dia.value == 24){
            res.innerHTML = 'Você é Flying Normal'
            img.src = 'images/braviary.png'
            name.innerHTML = 'Braviary!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 4 || dia.value == 12 || dia.value == 23){
            res.innerHTML = 'Você é Flying Dark'
            img.src = 'images/honchkrow.png'
            name.innerHTML = 'Honchkrow!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 5 || dia.value == 27){
            res.innerHTML = 'Você é Flying Dragon'
            img.src = 'images/salamence.png'
            name.innerHTML = 'Salamence!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 6 || dia.value == 16 || dia.value == 29){
            res.innerHTML = 'Você é Flying Ice'
            img.src = 'images/delibird.png'
            name.innerHTML = 'Delibird!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 7 || dia.value == 18){
            res.innerHTML = 'Você é Flying Bug'
            img.src = 'images/vespiquen.png'
            name.innerHTML = 'Vespiquen!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 8 || dia.value == 19 || dia.value == 30){
            res.innerHTML = 'Você é Flying Fairy'
            img.src = 'images/togekiss.png'
            name.innerHTML = 'Togekiss!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 11|| dia.value == 22){
            res.innerHTML = 'Você é Flying Ghost'
            img.src = 'images/drifloon.png'
            name.innerHTML = 'Drifloon!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 13|| dia.value == 26){
            res.innerHTML = 'Você é Flying Fire'
            img.src = 'images/charizard.png'
            name.innerHTML = 'Charizard!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 14|| dia.value == 25){
            res.innerHTML = 'Você é Flying Grass'
            img.src = 'images/tropius.png'
            name.innerHTML = 'Tropius!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 15|| dia.value == 28){
            res.innerHTML = 'Você é Flying Water'
            img.src = 'images/pelipper.png'
            name.innerHTML = 'Pelipper!'
            document.body.style.background = '#946AE6'
        }else if (dia.value == 20|| dia.value == 31){
            res.innerHTML = 'Você é Flying Rock'
            img.src = 'images/archeops.png'
            name.innerHTML = 'Archeops!'
            document.body.style.background = '#946AE6'
        }
    }

    if (mes.value == 0 || mes.value > 12){
            window.alert('[ERRO] Data inválida')
    }else if (dia.value == 0 || dia.value > 31){
            window.alert('[ERRO] Data inválida')
    }

}