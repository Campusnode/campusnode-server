import { AllowNull, Column, IsEmail, Table, Unique, DataType, Model, BeforeUpdate, BeforeCreate, BeforeFind, AfterFind, HasOne } from 'sequelize-typescript';
import * as HashFunction from "bcrypt";
import CampusModel from '../base/models/CampusModel';
import { Student } from './Student';

@Table
export class User extends CampusModel<User> {

    @AllowNull(false) @Unique @Column
    username: string;

    @AllowNull(false) @Column
    password: string;

    @BeforeUpdate
    @BeforeCreate
    static hashPassword(user: User) {

        if (!user.changed('password')) return;
        return HashFunction.hash(user.get('password'), parseInt(process.env.SALT_ROUNDS))
            .then(function (hashed) {
                user.password = hashed;
            });
    }

    @AllowNull(false) @IsEmail @Unique @Column
    email: string;

    @Column
    verification_token: string;

    @Column(DataType.DATE)
    verified_at: Date;

    @HasOne(() => Student)
    student: Student


    static async checkCredentials(username: string, password: string): Promise<User> {
        const user = await User.findOne({
            where: {username: username},
        });

        if (user == null) return null;

        const isValidCredentials: boolean = await HashFunction.compare(password, user.password);

        if (isValidCredentials) return user;

        return null;
    }

    public toJSON(): Object {
        this.setDataValue('password', null);
        return super.toJSON();
    }


}