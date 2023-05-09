export interface BaseRepositoryInterface<T> {
    add(entity: T): boolean;
    readById(id: string): T;
    readAllById(id: string, queries?: any): T[];
    readAll(queries?: any): T[];
    update(id: string, entity: T): boolean;
    deleteById(id: string): boolean;
}