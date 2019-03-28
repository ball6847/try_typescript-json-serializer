import { deserialize } from 'typescript-json-serializer';
import { Post } from './models/post';

async function fetchPost(id: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
}

async function main() {
  const post = await fetchPost(1);
  console.log(deserialize(post, Post));
}

main();
