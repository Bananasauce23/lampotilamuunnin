document.getElementById("muunna").addEventListener("click", muuta)

function muuta(){
    event.preventDefault()
    let lampoarvo = document.getElementById("syotalampo").value
    let lampotila = document.getElementById("lampotila")
    let nollapiste = document.getElementById("nollapiste")
    let valittu = document.querySelector('input[name="desimaali"]:checked')
    let virhe = document.getElementById("virhe")
    alleNollapisteen = false

    virhe.innerHTML = ""
    lampotila.innerHTML = ""
    nollapiste.innerHTML = ""

    if (isNaN(lampoarvo) || lampoarvo == ""){
        virhe.innerHTML = "<span>" + "Pitää antaa luku" + "<span>"
    }

    else{
        if (valittu == document.querySelector('input[id="1des"]')){
            desimaalimaara = 1
        }
        else if (valittu == document.querySelector('input[id="2des"]')){
            desimaalimaara = 2
        }
        else{
            desimaalimaara = 3
        }

        if (document.getElementById("versio").value == "celsiusfahren"){
            muutettuLampo = lampoarvo * 1.8 + 32
                if (muutettuLampo.toFixed(desimaalimaara) < -459.67){
                    alleNollapisteen = true
                }
            }
        else{
            muutettuLampo = (lampoarvo - 32) / 1.8
                if (muutettuLampo.toFixed(desimaalimaara) < -273.15){
                    alleNollapisteen = true
                }
            }
        
        if (alleNollapisteen){
            nollapiste.innerHTML = "Alle absoluuttisen nollapisteen (-273.15 °C, -459.67 °F)"
        }
    
        muutettuLampo = muutettuLampo.toFixed(desimaalimaara)
        lampotila.innerHTML = "<span>" + muutettuLampo + "<span>"
    }
}