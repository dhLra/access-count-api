import { prisma } from "../../../prisma/db.connection"
import { AuthDTO } from "./dto/authDTO";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Secret } from 'jsonwebtoken';

export class AuthUseCase {
    async execute({ email, password }: AuthDTO) {

        const auth = await prisma.table_user.findFirst({
            where: {
                email: email
            },
            select: {
                id: true,
                name: true,
                email: true,
                password_hash: true,
                image: true,
                user_type: true
            }
        })


        let data = {}
        let password_hash = auth?.password_hash;
        let password_user = password;
        var timestamp = new Date().getTime();

        if (auth && password_hash) {
            const result = await bcrypt.compare(password_user, password_hash);
            if (result) {
                const token = jwt.sign({ userName: auth.name }, process.env.SECRET as Secret, { expiresIn: 3000 })
                return data = { success: true, nome: auth.name, email: auth.email, token, refresh_token_time: timestamp, user_type: auth.user_type };
            } else {
                return data = { success: false, status: 401, message: 'Unauthorized' };
            }
        } else {
            return data = { success: false, status: 401, message: 'Unauthorized' };
        }


    }
}