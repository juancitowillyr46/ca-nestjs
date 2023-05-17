export interface BaseRepositoryInterface {
    add(entity: any): Promise<boolean>;
    readById(id: number): Promise<any>;
    // readAllById(id: number, queries?: any): Response[];
    // readAll(queries?: any): Response[];
    // update(id: number, entity: Request): boolean;
    // deleteById(id: number): boolean;
}