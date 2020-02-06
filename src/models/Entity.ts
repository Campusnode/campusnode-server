import { AllowNull, Column, IsEmail, Table, Unique, Model } from 'sequelize-typescript';
import CampusModel from '../base/models/CampusModel';


@Table({
    underscored: true,
    timestamps: true
})
export default class Entity extends CampusModel<Entity> {

    @AllowNull(false) @Column
    first_name: string;

    @Column
    middle_name: string;

    @AllowNull(false) @Column
    last_name: string;

    @IsEmail @Unique @Column
    email: string;

}