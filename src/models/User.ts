import { AllowNull, Column, IsEmail, Table, Unique, DataType } from 'sequelize-typescript';
import { CampusModel } from '../base/models/CampusModel';


@Table({
    underscored: true,
    timestamps: true
})
export default class User extends CampusModel<User> {

    @AllowNull(false) @Unique @Column
    username: string;

    @AllowNull(false) @Column
    password: number;

    @IsEmail @Unique @Column
    email: string;
    
    @Column
    verification_token: string;

    @Column(DataType.DATE)
    verified_at: Date;

}