import { Suspense } from 'react';
import { CacheProvider } from 'rest-hooks';
import { StyleSheet, Text, View } from 'react-native';
import PostList from './PostList';

export default function App() {
  return (
    <CacheProvider>
      <View style={styles.container}>
        <Suspense>
          <PostList />
        </Suspense>
      </View>
    </CacheProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
