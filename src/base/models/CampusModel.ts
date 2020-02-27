import { AllowNull, Model, Column, DataType, Table, DeletedAt, UpdatedAt, CreatedAt, AutoIncrement, PrimaryKey } from "sequelize-typescript";

@Table({
    underscored: true,
    timestamps: true
})
export default class CampusModel<T = any, T2 = any> extends Model<T, T2> {
    @AutoIncrement @PrimaryKey @Column(DataType.BIGINT)
    id: number;

    @AllowNull(false) @Column(DataType.BIGINT)
    created_by: number;

    @CreatedAt
    created_at: Date;

    @AllowNull(false) @Column(DataType.BIGINT)
    updated_by: number;

    @UpdatedAt
    updated_at: Date;

    @Column(DataType.BIGINT)
    deleted_by: number;

    @DeletedAt
    deleted_at: Date;

    public static getModel(): Model {
        return new this as Model;
    }

}