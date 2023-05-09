import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { HttpAdapterHost } from '@nestjs/core';

import { BaseValidationException } from 'src/application/exceptions/base.validation.exception';
import { ApiException } from '../exceptions/api.exception';
  
  @Catch()
  export class ValidateExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  
    catch(exception: any, host: ArgumentsHost): void {
      // In certain situations `httpAdapter` might not be available in the
      // constructor method, thus we should resolve it here.
      const { httpAdapter } = this.httpAdapterHost;
  
      const ctx = host.switchToHttp();
  
      let data = {};

      let httpStatus = HttpStatus.BAD_REQUEST;

      if(exception instanceof BaseValidationException) {
        httpStatus = HttpStatus.BAD_REQUEST;
      } else if(exception instanceof ApiException) {
        httpStatus = HttpStatus.BAD_REQUEST;
      } else if(exception instanceof HttpException){
        httpStatus = HttpStatus.BAD_REQUEST;
        data = exception.getResponse()['message'];
      } else {
        httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
      }
      
      const message = exception.message;
 
      const responseBody = {
        statusCode: httpStatus,
        success: false,
        message: message,
        data: data
      };
  
      httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
  }