import { AllowNull, Column, IsEmail, Table, Unique, DataType } from 'sequelize-typescript';
import { CampusModel } from '../base/models/CampusModel';


@Table({
    underscored: true,
    timestamps: true
})
export default class Student extends CampusModel<Student> {

    @AllowNull(false) @Column(DataType.BIGINT)
    entity_id: number;

    @AllowNull(false) @Column(DataType.BIGINT)
    user_id: number;

}