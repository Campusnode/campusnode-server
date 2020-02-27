import {Table, Column, AllowNull, IsEmail, } from 'sequelize-typescript';
import CampusModel from '../base/models/CampusModel';

@Table
export class Address extends CampusModel<Address> {

    @AllowNull(false) @Column
    contact_name: string;

    @AllowNull(false) @Column
    estate_name: string;

    @AllowNull(false) @Column
    street: string;
    
    @AllowNull(false) @Column
    city: string;

    @Column
    district: string;

    @AllowNull(false) @Column
    state: string;

    @AllowNull(false) @Column
    country: string;

    @AllowNull(false) @Column
    zip: string;

    @IsEmail @Column
    email: string;

    @Column
    phone: string;

}