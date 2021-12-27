const bcryptjs = require('bcryptjs');

module.exports = {
    up: async(queryInterface) => {
        await queryInterface.bulkInsert('users', [{
                nome: 'Luis',
                email: 'luiz1@gmail.com',
                password_hash: await bcryptjs.hash('123456', 8),
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                nome: 'Luis 2',
                email: 'luiz2@gmail.com',
                password_hash: await bcryptjs.hash('12345678', 8),
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                nome: 'Luis3',
                email: 'luiz3@gmail.com',
                password_hash: await bcryptjs.hash('654321', 8),
                created_at: new Date(),
                updated_at: new Date(),
            },
        ], {});
    },

    down: async() => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
