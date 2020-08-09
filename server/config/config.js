const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: 'mongodb+srv://Anshul:anshul123@employees.jaggb.mongodb.net/MyEmployees'
    },
    default:{
        SECRET: 'SUPERSECRETPASSWORD123',
        DATABASE: 'mongodb+srv://Anshul:anshul123@employees.jaggb.mongodb.net/MyEmployees'
    }
}

exports.get = function get(env){
    return config[env] || config.default
}
