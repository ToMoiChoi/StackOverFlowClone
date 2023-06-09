import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import questions from "../data/questions";
import QuestionHeader from "../components/QuestionHeader";
import { FlatList } from "react-native-gesture-handler";
import answers from "../data/answers";
import AnswerListItem from "../components/AnswerListItem";
const QuestionDetails = () => {
  const { id } = useSearchParams();
  const question = questions.items.find((q) => q.question_id == id);
  if (!question) {
    return <Text>Question Not Found</Text>;
  }
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={answers.items}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        ListHeaderComponent={() => <QuestionHeader question={question} />}
      />
    </View>
  );
};
export default QuestionDetails;
