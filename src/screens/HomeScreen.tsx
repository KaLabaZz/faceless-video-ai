import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const HomeScreen = () => {
  const trendingVideos = [
    { id: '1', title: 'How to Generate Videos with AI' },
    { id: '2', title: 'Top 10 AI Tools of 2026' },
    { id: '3', title: 'The Future of Video Content' },
  ];

  const userPersonalization = 'Welcome back, User! Here are your recommendations:';

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Video Generation Interface</Text>
      <Text>{userPersonalization}</Text>
      <FlatList
        data={trendingVideos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={{ marginVertical: 10 }}>{item.title}</Text>}
      />
      <Button title="Generate Video" onPress={() => {/* Handle video generation */}} />
    </View>
  );
};

export default HomeScreen;