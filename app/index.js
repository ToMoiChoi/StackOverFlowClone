import { View, Text } from "react-native";
import React from "react";
import QuestionListItem from "../components/QuestionListItem";
import questions from "../data/questions";
import { FlatList } from "react-native-gesture-handler";
const index = () => {
  return (
    <View className="flex-1 bg-white-400">
      <FlatList
        data={questions.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
      />
    </View>
  );
};

export default index;
