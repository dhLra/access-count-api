import { prisma } from "../../../../prisma/db.connection"
import { getByIdDTO } from "./dto/getByIdDTO";


export interface PostDataDTO {
    access_type: string,
    destination: string,
    time: Date
}

export class PostData {
    async execute({ access_type, destination, time }: PostDataDTO) {

        const oldDate = new Date()
        const newDate = new Date(oldDate.getTime() - 180 * 60000);

        const create_data = await prisma.table_access.create({
            data: {
                access_type: access_type,
                destination: destination,
                data_hora_criacao: newDate
            }

        })

        console.log(create_data)

        if (create_data) {
            return { success: true, create_data };
        } else {
            return { success: false, status: 401, message: 'Unfeched data' };
        }
    }
}