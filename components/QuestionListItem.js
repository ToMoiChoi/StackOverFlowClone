// import { View, Text, StyleSheet } from "react-native";
// import { Entypo } from "@expo/vector-icons";
// import { Link } from "expo-router";
// const QuestionListItem = ({ question }) => {
//   return (
//     <Link href="/details">
//       <View className=" p-3 border-gray-100 border-b-2">
//         <Text className="text-xs">
//           {question.score} votes •{" "}
//           {question.is_answered && (
//             <Entypo name="check" size={12} color="limegreen" />
//           )}
//           {question.answer_count} answers • {question.view_count} views
//         </Text>
//         <Text className=" text-blue-400 my-2">{question.title}</Text>
//         <Text className="text-xs text-gray-600" numberOfLines={2}>
//           {question.body_markdown}
//         </Text>
//         <View className="gap-1 flex-wrap flex-row items-center leading-4">
//           {question.tags.map((tag) => (
//             <Text
//               key={tag}
//               className="bg-blue-50 overflow-hidden p-5 border-r-4 text-bule-200 text-xs text-blue-400"
//             >
//               {tag}
//             </Text>
//           ))}
//           <Text className="ml-auto text-xs text-gray-400">
//             asked {new Date(question.creation_date * 1000).toDateString()}
//           </Text>
//         </View>
//       </View>
//     </Link>
//   );
// };
// const styles = StyleSheet.create({
//   time: {
//     marginLeft: "auto",
//     fontSize: 12,
//     color: "#6a737c",
//   },
// });

// export default QuestionListItem;
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { decode } from "html-entities";
import Markdown from "react-native-markdown-display";
const QuestionListItem = ({ question }) => {
  return (
    <Link href={`/${question.question_id}`}>
      <View style={styles.container}>
        <Text style={styles.stats}>
          {question.score} votes •{" "}
          {question.is_answered && (
            <Entypo name="check" size={12} color="limegreen" />
          )}
          {question.answer_count} answers • {question.view_count} views
        </Text>
        <Text style={styles.title}>{decode(question.title)}</Text>
        <Markdown style={styles.body} numberOfLines={2}>
          {decode(question.body_markdown)}
        </Markdown>
        <View style={styles.tags}>
          {question.tags.map((tag) => (
            <Text key={tag} style={styles.tag}>
              {tag}
            </Text>
          ))}
          <Text style={styles.time}>
            asked {new Date(question.creation_date * 1000).toDateString()}
          </Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,

    borderBottomWidth: 0.5,
    borderColor: "lightgray",
  },
  stats: {
    fontSize: 12,
  },
  title: {
    color: "#0063bf",
    marginVertical: 5,
  },
  body: {
    fontSize: 11,
    color: "dimgrey",
    lineHeight: 15,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#e1ecf4",
    color: "#39739d",
    padding: 5,
    fontSize: 12,
    borderRadius: 3,
    overflow: "hidden",
  },
  time: {
    marginLeft: "auto",
    fontSize: 12,
    color: "#6a737c",
  },
});

export default QuestionListItem;
