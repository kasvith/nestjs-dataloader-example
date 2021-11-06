import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Owner } from 'src/owners/owner.object';
import { Cat } from './cat.object';
import { CatsService } from './cats.service';
import { OwnersService } from '../owners/owners.service';

@Resolver(() => Cat)
export class CatsResolver {
  constructor(
    private readonly catsService: CatsService,
    private readonly ownersService: OwnersService,
  ) {}

  @ResolveField(() => Owner, {
    name: 'owner',
    description: 'Owner of the cat',
    nullable: true,
  })
  getOwner(@Parent() cat: Cat, @Context() { loaders }: IGraphQLContext) {
    return loaders.ownersLoader.load(cat.ownerId);
  }

  @Query(() => Cat, {
    name: 'cat',
    description: 'Load a cat by ID',
    nullable: true,
  })
  getCatById(@Args('id') id: number): Cat {
    return this.catsService.findCatById(id);
  }

  @Query(() => [Cat], {
    name: 'cats',
    description: 'Loads all cats',
    nullable: 'itemsAndList',
  })
  getCats(): Cat[] {
    return this.catsService.allCats();
  }
}
