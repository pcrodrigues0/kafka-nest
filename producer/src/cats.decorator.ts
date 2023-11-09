import { SetMetadata } from '@nestjs/common';

export const Cats = (...args: string[]) => SetMetadata('cats', args);
