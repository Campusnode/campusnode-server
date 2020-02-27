import { Table, Column, AllowNull, DataType, Unique } from 'sequelize-typescript';
import CampusModel from '../base/models/CampusModel';

@Table
export class Staff extends CampusModel<Staff> {

    @AllowNull(false) @Unique @Column(DataType.BIGINT)
    entity_id: number;

    @AllowNull(false) @Unique @Column(DataType.BIGINT)
    user_id: number;

    @Column(DataType.BIGINT)
    type: number;


}