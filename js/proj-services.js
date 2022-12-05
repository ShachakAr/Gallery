'use strict'

console.log('Starting up')

const gProjects =[
    {
        id: "sokoban",
        name: "Sokoban",
        title: "Gotta re-arange here!",
        desc: "Your goal is to push the crate to the alocated positions. You can push a box only if the next cell is empty. Good luck!",
        url: "https://shachakar.github.io/Sokoban/",
        publishedAt: 1666616464000,
        labels: ["matrixes", "keyboard events", "games"]
    }, {
        id: "mine-sweeper",
        name: "Mine Sweeper",
        title: "Find the mines",
        desc: "Your goal is to find all the mines positions, and mark them with a flag (right click). if you hit a mine (left click) - you lose. Good luck!",
        url: "https://shachakar.github.io/Mine-sweeper/",
        publishedAt: 1663741800000,
        labels: ["matrixes", "mouse events", "games"]

    }
]


function getProjects (){
    return gProjects
}

function getProjectById (id){
    return gProjects.find( project => project.id === id)
}