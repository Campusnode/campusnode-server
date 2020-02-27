import * as casual from "casual";
import EntityFactory from "./seeders/EntityFactory";
import AddressFactory from "./seeders/AddressFactory";

import CommonFields from "./seeders/CommonFields";
import UserFactory from "./seeders/UserFactory";
import { User, Entity, Student, Address } from "../models";


export default class Seeder {

    public static async run(): Promise<string> {

        // create system user
        const user = await User.create({
            ...CommonFields,
            'username': 'system',
            'password': 'admin123',
            'email': 'admin@admin.com',
        });

        let count: number;

        // create 5 users and entities as students
        count = 5;
        while(count > 0) {
            const user      = await User.create(UserFactory());
            const entity    = await Entity.create(EntityFactory());

            const student   = await Student.create({
                ...CommonFields,
                user_id     : user.id,
                entity_id   : entity.id
            });

            count--;
        }

        // create 5 addresses
        count = 5;
        while (count > 0) {
            await Address.create(AddressFactory());
            count--;
        }

        return ;
    }
}