module.exports = {
    commands: ['add', 'addition'],
    expectedArgs: '<num 1> <num2>',
    permissionError: 'You need admin to run this command!',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments , text) => {
        const num1 = +arguments[0]
        const num2 = +arguments[1]

        message.reply(`The sum is ${num1 + num2}`)
    },
    permissions: [],
    requiredRoles: [],
}