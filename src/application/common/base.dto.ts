export abstract class BaseDto {
    abstract toEntity(request: any): any;
}