import { UserUseCaseInterface } from "../contracts/user.usecase.interface";

export abstract class UserUseCase implements UserUseCaseInterface {
    execute(requestBody: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}