import { AllowNull, Column, Table, DataType, Unique, Scopes, ForeignKey, HasOne, DefaultScope, BelongsTo } from 'sequelize-typescript';
import CampusModel from '../base/models/CampusModel';
import { Entity } from '.';
import { User } from '.';

@DefaultScope(() => ({
    include: [ Entity ]
}))
@Table
export class Student extends CampusModel<Student> {

    @ForeignKey(() => Entity) @AllowNull(false) @Unique @Column(DataType.BIGINT)
    entity_id: number;

    @ForeignKey(() => User) @AllowNull(false) @Unique @Column(DataType.BIGINT)
    user_id: number;

    @BelongsTo(() => Entity)
    entity: Entity

    @BelongsTo(() => User)
    user: User
}