import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const RepositoryItem = ({ repository, handleLikeRepository }) => (
  <View style={styles.repositoryContainer}>
    <Text style={styles.repository}>{repository.title}</Text>

    {repository.techs?.map((tech, index) => {
      <View style={styles.techsContainer} key={index}>
        <Text style={styles.tech}>
          {tech}
        </Text>
      </View>
    })}

    <View style={styles.likesContainer}>
      <Text
        style={styles.likeText}
        testID={`repository-likes-${repository.id}`}
      >
        {repository.likes} {repository.likes === 1 ? `curtida` : 'curtidas'}
      </Text>
    </View>

    <TouchableOpacity
      style={styles.button}
      onPress={() => handleLikeRepository(repository.id)}
      testID={`like-button-${repository.id}`}
    >
      <Text style={styles.buttonText}>Curtir</Text>
    </TouchableOpacity>
  </View>
)


const styles = StyleSheet.create({
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  repository: {
    fontSize: 32,
    fontWeight: "bold",
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
  },
});


export default RepositoryItem;