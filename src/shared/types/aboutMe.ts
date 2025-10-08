export interface AboutMeResponse {
  question: string;
  answer: string;
}

export const questions: AboutMeResponse[] = [
  {
    question: "왜 개발을 시작하셨나요?",
    answer:
      "기술을 통해 실생활의 문제를 해결하는 과정에 매력을 느껴 개발을 시작했습니다. 아이디어를 현실로 구현하는 과정이 항상 저에게 큰 성취감을 줍니다.",
  },
  {
    question: "어떤 것을 잘하시나요?",
    answer:
      "사용자 경험을 최우선으로 생각하는 UI/UX 개발과 복잡한 문제를 본질에 집중하여 해결하는 것을 잘합니다. 또한, 팀원들과의 원활한 소통을 통해 협업을 이끌어내는 데 강점을 가지고 있습니다.",
  },
  {
    question: "개발자로서의 가치관은 무엇인가요?",
    answer:
      "현실의 문제를 해결하고, 사용자에게 가치를 제공하는 것이 개발자의 가장 큰 가치라고 생각합니다. 현실과 이상의 간극을 좁히기 위해 끊임없이 고민하고 사용자 가치를 최우선으로 생각합니다.",
  },
];
