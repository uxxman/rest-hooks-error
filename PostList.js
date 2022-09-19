import { Text, View } from 'react-native';
import { useSuspense } from 'rest-hooks';
import PostResource from './PostResource';

export default function PostList() {
  const posts = useSuspense(PostResource.list(), {});

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      {posts.map(post => (
        <View key={post.pk()}>
          <Text>ID: {post.id}</Text>
          <Text>Title: {post.title}</Text>
          <Text>Body: {post.body}</Text>
        </View>
      ))}
    </View>
  );
}
