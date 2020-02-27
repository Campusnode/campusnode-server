import { AllowNull, Column, Table, DataType, Unique } from 'sequelize-typescript';
import CampusModel from '../../base/models/CampusModel';

@Table
export class Stafftype extends CampusModel<Stafftype> {

    @AllowNull(false) @Unique @Column
    type: string;
}