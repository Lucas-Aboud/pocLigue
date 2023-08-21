const { dirname } = require('path')
const path = require('path')


const homeController = {
    home: (req, res) =>{
        res.sendFile(path.join(__dirname, '../front/frontBasesTel.html'))  
    },
}

module.exports = homeController;