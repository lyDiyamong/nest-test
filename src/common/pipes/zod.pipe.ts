import { Injectable, PipeTransform, BadRequestException } from "@nestjs/common";
import { ZodSchema } from "zod";

@Injectable()
export class ZodTransformPipe<T> implements PipeTransform {
  constructor(private schema: ZodSchema<T>) {}

  transform(value: any) {
    // Validate and transform input using Zod
    try {
      const result = this.schema.parse(value); // Automatically validates and transforms
      return result;
    } catch (error) {
      if (error instanceof Error) {
        // Return meaningful Zod error messages
        throw new BadRequestException(error || error.message);
      }
      throw new BadRequestException("Invalid data");
    }
  }
}
