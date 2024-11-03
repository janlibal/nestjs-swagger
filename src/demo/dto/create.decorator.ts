
import { applyDecorators } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export function idDecorator() {
    return applyDecorators(
        ApiPropertyOptional({
            type: Number,
            description: 'This is an optional property',
          })
      //ApiResponse({ status: 201, description: 'The token has been successfully created.' }),
      //ApiResponse({ status: 403, description: 'Forbidden.' })
    );
  }

  export function nameDecorator() {
    return applyDecorators(
        ApiProperty({
            type: String,
            description: 'This is a required property',
          })
    );
  }
  export function abbreviationDecorator() {
    return applyDecorators(
        ApiProperty({
            type: String,
            description: 'This is a required property',
          })
    );
  }

  