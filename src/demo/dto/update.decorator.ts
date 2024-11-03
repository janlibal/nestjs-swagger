import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

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