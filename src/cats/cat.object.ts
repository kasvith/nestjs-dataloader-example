import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { ICat } from '../db';

@ObjectType()
export class Cat implements ICat {
  @Field(() => ID, { description: 'ID of the cat' })
  id: number;

  @Field(() => String, { description: 'Name of the cat' })
  name: string;

  @Field(() => String, { description: 'What this cat likes' })
  likes?: string;

  // we dont expose the ownerId in the schema
  // instead lets expose it via a field resolver
  @HideField()
  ownerId: number;
}
