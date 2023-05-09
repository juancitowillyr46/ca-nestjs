import { BaseEntityAuditable } from "./base-auditable.entity";

export abstract class BaseEntity extends BaseEntityAuditable {
    public id: string;
}