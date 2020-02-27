import { AllowNull, Column, IsEmail, Table, Unique, Model, BelongsTo, HasOne } from 'sequelize-typescript';
import CampusModel from '../base/models/CampusModel';
import { Student } from '.';

@Table
export class Entity extends CampusModel<Entity> {

    @AllowNull(false) @Column
    first_name: string;

    @Column
    middle_name: string;

    @AllowNull(false) @Column
    last_name: string;

    @AllowNull(false) @Unique @Column
    phone: string;

    @AllowNull(false) @IsEmail @Unique @Column
    email: string;

    @HasOne(() => Student)
    student: Student

}