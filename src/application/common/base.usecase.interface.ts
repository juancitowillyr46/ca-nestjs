export interface BaseUseCaseInterface {
    execute(requestBody: any): Promise<any>;
}