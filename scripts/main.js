function calculateDays(){
    try {

    let day1 = document.getElementById("day1").value
    let day2 = document.getElementById("day2").value

    if (!day1 || !day2){
        throw new Error("Por favor seleccione ambas fechas")
    }

    const dateOne = new Date(day1)
    const dateTwo = new Date(day2)
    
    let years = dateTwo.getFullYear() - dateOne.getFullYear()
    let months = dateTwo.getMonth() - dateOne.getMonth()
    let days = dateTwo.getDate() - dateOne.getDate()

    if (days < 0){
        months --
        days += new Date(dateTwo.getFullYear(), dateTwo.getMonth(), 0).getDate()
    }

    if (months < 0){
        years--
        months += 12
    }

    document.getElementById("output").innerHTML = `La diferencia es ${years} años, ${months} meses y ${days} días`

} catch (error){
    document.getElementById("output").innerHTML = error.message
}
}