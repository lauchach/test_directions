let x = 0, y = 0
let direction = 'North'

const directions = ['North', 'East', 'South', 'West']
let directionIndex = 0

const processCommands = (commands) => {
    try {
        let i = 0
        while (i < commands.length) {
            const command = commands[i]
            if (command === 'R') { // right
                directionIndex = (directionIndex + 1) % 4
                direction = directions[directionIndex]
                i++
            } else if (command === 'L') { // left
                directionIndex = (directionIndex + 3) % 4
                direction = directions[directionIndex]
                i++
            } else if (command === 'W') {// forward
                let j = i + 1
                let distance = ''
                while (j < commands.length && !isNaN(commands[j])) {
                    distance += commands[j]
                    j++
                }
                distance = parseInt(distance)
                if (direction === 'North') {
                    y += distance
                } else if (direction === 'East') {
                    x += distance
                } else if (direction === 'South') {
                    y -= distance
                } else if (direction === 'West') {
                    x -= distance
                }
                i = j
            }
        }
    } catch (error) {
        console.log("e >>> ", error)
    }

}

const input = process?.argv && process.argv[2] ? process.argv[2] : false
// console.log('input', input)
processCommands(input);
console.log(`X: ${x} Y: ${y} Direction: ${direction}`);
// W5RW5RW2RW1R
// RRW11RLLW19RRW12LW1
// LLW100W50RW200W10
// LLLLLW99RRRRRW88LLLRL
// W55555RW555555W444444W1