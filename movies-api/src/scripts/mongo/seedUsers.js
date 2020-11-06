// set DEBUG=express:*, app:* & node src/scripts/mongo/seedUsers.js

const bcrypt = require('bcrypt');
const chalk = require('chalk');
const debug = require('debug')('app:scripts:users');
const MongoLib = require('../../api/lib/mongo');
const { config } = require('../../config');

const users = [
    {
        email: 'root@undefined.sh',
        name: 'ROOT',
        password: config.users.defaultAdminPassword,
        isAdmin: true,
    },
    {
        email: 'jesus@undefined.sh',
        name: 'Jesús Esparza',
        password: config.users.defaultUserPassword,
    },
    {
        email: 'ruben@undefined.sh',
        name: 'Rubén Esparza',
        password: config.users.defaultUserPassword
    },
];

async function createUser(mongoDB, user) {
    const { name, email, password, isAdmin } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = await mongoDB.create('users', {
        name,
        email,
        password: hashedPassword,
        isAdmin: Boolean(isAdmin)
    });

    return userId;
}

async function seedUsers() {
    try {
        const mongoDB = new MongoLib();

        const promises = users.map(async user => {
            const userId = await createUser(mongoDB, user);
            debug(chalk.green('User created with id:', userId));
        });

        await Promise.all(promises);
        return process.exit(0);
    } catch (error) {
        debug(chalk.red(error));
        process.exit(1);
    }
}

seedUsers();