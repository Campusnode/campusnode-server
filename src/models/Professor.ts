import {Table, Column, Model, HasMany, PrimaryKey, AutoIncrement, AllowNull, DataType} from 'sequelize-typescript';

@Table
export default class Professor extends Model<Professor> {

    @AutoIncrement @PrimaryKey @Column(DataType.BIGINT)
    id: number;

    @AllowNull(false) @Column
    first_name: string;

    @Column
    middle_name: string;

    @AllowNull(false) @Column
    last_name: string;

}