import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

import RepositoryItem from "./components/RepositoryItem";
import api from './services/api';

export default function App () {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    })
  }, [])

  async function handleLikeRepository (id) {
    const response = await api.post(`repositories/${id}/like`);

    const { likes } = response.data;

    const repositoriesChanged = repositories.map(repository => repository.id === id ? { ...repository, likes } : repository)

    setRepositories(repositoriesChanged);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          keyExtractor={repository => repository.id}
          renderItem={({ item: repository }) => (
            <RepositoryItem
              repository={repository}
              handleLikeRepository={handleLikeRepository}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
});
