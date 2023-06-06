import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import questions from "../data/questions";
const question = questions.items[0];
const QuestionListItem = () => {
  return (
    <View className=" p-3 border-gray-400 border-b-2">
      <Text className="text-xs">
        {question.score} votes •{" "}
        {question.is_answered && (
          <Entypo name="check" size={12} color="limegreen" />
        )}
        {question.answer_count} answers • {question.view_count} views
      </Text>
      <Text className=" text-blue-400 my-2">{question.title}</Text>
      <Text className="text-xs text-gray-600" numberOfLines={2}>
        {question.body_markdown}
      </Text>
      <View className="gap-1 flex-wrap flex-row items-center leading-4">
        {question.tags.map((tag) => (
          <Text
            key={tag}
            className="bg-blue-50 overflow-hidden p-4 text-bule-200 text-xs text-blue-400"
          >
            {tag}
          </Text>
        ))}
        <Text className="ml-atuo text-xs text-gray-500">
          asked {new Date(question.creation_date * 1000).toDateString()}
        </Text>
      </View>
    </View>
  );
};

export default QuestionListItem;
