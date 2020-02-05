import { AllowNull, Model, Column, DataType, Table, DeletedAt, UpdatedAt, CreatedAt, AutoIncrement } from "sequelize-typescript";

export declare abstract class CampusModel<T = any, T2 = any> extends Model<T, T2> {
    @AutoIncrement @Column(DataType.BIGINT)
    id: number;

    @AllowNull(false) @Column(DataType.BIGINT)
    created_by: number;

    @CreatedAt
    created_at: Date;

    @AllowNull(false) @Column(DataType.BIGINT)
    updated_by: number;

    @UpdatedAt
    updated_at: Date;

    @AllowNull(false) @Column(DataType.BIGINT)
    deleted_by: number;

    @DeletedAt
    deleted_at: Date;

}