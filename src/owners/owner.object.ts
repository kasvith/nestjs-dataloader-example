import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IOwner } from '../db';

@ObjectType()
export class Cat implements IOwner {
  @Field(() => ID, { description: 'ID of the owner' })
  id: number;

  @Field(() => String, { description: 'Name of the owner' })
  name: string;
}
