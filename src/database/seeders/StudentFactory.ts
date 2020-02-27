let casual = require('casual');
import CommonFields from "./CommonFields";
import { Entity } from "../../models";


export default function StudentFactory() {

    return {
        ... CommonFields,
        'entity_id'    : casual.random_element(
                            Entity.findAll({
                                attributes: ['id']
                            })
                        ),
    };
}