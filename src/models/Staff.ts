import {Table, Column, PrimaryKey, AutoIncrement, AllowNull, DataType, Model} from 'sequelize-typescript';
import CampusModel  from '../base/models/CampusModel';

@Table({
    underscored: true,
    timestamps: true
})
export default class Staff extends CampusModel<Staff> {

    @AllowNull(false) @Column
    first_name: string;

    @Column
    middle_name: string;

    @AllowNull(false) @Column
    last_name: string;

}