import { Resource } from '@rest-hooks/rest';

export default class PostResource extends Resource {
  id = undefined;
  title = '';
  body = '';

  pk() {
    return this.id?.toString();
  }

  static urlRoot = 'https://jsonplaceholder.typicode.com/posts';
}