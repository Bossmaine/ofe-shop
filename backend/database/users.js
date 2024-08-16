import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Ali Maine Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1q2w3e4r', 10),
        isAdmin: true,
    },
    {
        name: 'Ola Mathew',
        email: 'ola@example.com',
        password: bcrypt.hashSync('1q2w3e4r', 10),
        isAdmin: false,
    },
    {
        name: 'Aishat Ali',
        email: 'aishat@example.com',
        password: bcrypt.hashSync('1q2w3e4r', 10),
        isAdmin: false,
    }
]

export default users;