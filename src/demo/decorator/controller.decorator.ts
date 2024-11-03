import { applyDecorators } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
} from '@nestjs/swagger'
import { Demo } from '../entities/demo.entity'

export function findOneDecorator() {
  return applyDecorators(
    ApiOkResponse({ type: Demo, isArray: false }),
    ApiNotFoundResponse({ description: 'Not Found' }),
    //ApiResponse({ status: 201, description: 'The token has been successfully created.' }),
    //ApiResponse({ status: 403, description: 'Forbidden.' })
  )
}

export function createDecorator() {
  return applyDecorators(
    ApiCreatedResponse({
      description: 'Created Succesfully',
      type: Demo,
      isArray: false,
    }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
  )
}

export function findAllDecorator() {
  return applyDecorators(ApiOkResponse({ type: Demo, isArray: true }))
}

export function updateDecorator() {
  return applyDecorators(
    ApiOkResponse({
      type: Demo,
      isArray: false,
    }),
    ApiNotFoundResponse({
      description: 'Not Found',
    }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
  )
}

export function deleteDecorator() {
  return applyDecorators(
    ApiOkResponse({
      description: 'Deleted Successfully',
    }),
    ApiNotFoundResponse({
      description: 'Not Found',
    }),
  )
}
