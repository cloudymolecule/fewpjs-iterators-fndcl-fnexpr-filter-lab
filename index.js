function findMatching(drivers, string){
    let matchedDrivers = drivers.filter( driver => {
        let driverCap = driver.charAt(0).toUpperCase() + driver.slice(1)
        let driverLower = driver.charAt(0).toUpperCase() + driver.slice(1)
        if (driverCap === string || driverLower === string) {
            return driver
        }
    })
    return matchedDrivers
}

function fuzzyMatch(drivers, string) {
    let nameStartLetters = string.length
    let matchedDrivers = drivers.filter( driver => {
        let driverStartLetters = ""
        for (let i = 0; i < nameStartLetters; i++) {
            driverStartLetters = driverStartLetters + driver[i]
        }
        if (driverStartLetters === string) {
            return driver
        }
    })
    return matchedDrivers
}

function matchName(drivers, string) {
    let matchedDrivers = drivers.filter(driver =>{
        return driver.name === string
    })
    return matchedDrivers
}
