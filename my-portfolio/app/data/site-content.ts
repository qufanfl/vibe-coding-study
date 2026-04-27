export type Locale = "ko" | "en";

export const siteContent = {
  ko: {
    navigation: {
      about: "소개",
      projects: "프로젝트",
      contact: "연락",
    },
    hero: {
      title: "누구나 온전히 누릴 수 있는 TV 경험을 설계합니다",
    },
    about: {
      eyebrow: "소개",
      title: "멀리서 보는 화면, 손에 쥔 리모컨, 다양한 사용자를 함께 생각합니다.",
      description:
        "저는 TV 환경의 시청 맥락과 입력 제약을 제품 경험으로 번역하는 UX 디자이너입니다. 홈 화면 구조, 포커스 규칙, 탐색 흐름, 접근성 기준을 연결해 제품 팀이 일관된 결정을 내릴 수 있도록 돕습니다.",
      strengthsLabel: "디자인 강점",
      strengths: [
        "10-foot UI 정보 구조와 홈 화면 전략",
        "리모컨 기반 포커스 이동과 포인팅 인터랙션",
        "접근성, 마이크로카피, 디자인 원칙 정리",
      ],
    },
    projects: {
      eyebrow: "프로젝트",
      title: "TV UX를 구성하는 네 가지 관점",
      description:
        "TV 제품 경험에서 반복적으로 다루는 원칙, 입력 방식, 접근성, 문구 설계를 프로젝트 카드로 정리했습니다.",
      items: [
        {
          title: "UX Principle",
          category: "Experience Strategy",
          year: "2026",
          summary:
            "TV 화면 거리, 콘텐츠 우선순위, 탐색 깊이를 기준으로 홈 화면과 상세 화면의 설계 원칙을 정리했습니다.",
          impact: "팀 공통 UX 판단 기준 수립",
        },
        {
          title: "Pointing",
          category: "Interaction Design",
          year: "2026",
          summary:
            "리모컨 방향키, 포인터, 음성 입력이 섞이는 상황에서 포커스 이동과 선택 피드백을 자연스럽게 설계했습니다.",
          impact: "탐색 오류와 되돌아가기 감소",
        },
        {
          title: "Accessibility",
          category: "Inclusive TV UX",
          year: "2025",
          summary:
            "시인성, 대비, 포커스 표시, 스크린 리더 흐름을 점검해 다양한 시청자가 동일한 콘텐츠에 접근하도록 개선했습니다.",
          impact: "접근성 QA 체크리스트 체계화",
        },
        {
          title: "Writing",
          category: "UX Writing",
          year: "2025",
          summary:
            "TV 화면에서 짧고 명확하게 읽히는 안내 문구, 오류 메시지, 버튼 라벨의 톤과 규칙을 설계했습니다.",
          impact: "문구 일관성과 이해도 향상",
        },
      ],
    },
    contact: {
      eyebrow: "연락",
      title: "TV 제품 경험을 더 명확하고 편안하게 만들고 싶다면 이야기해 주세요.",
      description:
        "TV UX 전략, 인터랙션 설계, 접근성 개선, UX Writing 협업을 중심으로 함께할 수 있습니다.",
      cta: "이메일 보내기 hello@sugyeonghyeon.design",
    },
    languageToggle: {
      label: "Switch language to English",
    },
  },
  en: {
    navigation: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "I design TV experiences that everyone can fully enjoy",
    },
    about: {
      eyebrow: "About",
      title:
        "I design for distant screens, handheld remotes, and diverse viewing contexts.",
      description:
        "I am a UX designer translating TV viewing behavior and input constraints into product experiences. I connect home architecture, focus rules, navigation flows, and accessibility standards so product teams can make consistent decisions.",
      strengthsLabel: "Design strengths",
      strengths: [
        "10-foot UI information architecture and home strategy",
        "Remote-first focus movement and pointing interactions",
        "Accessibility, microcopy, and UX principle systems",
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Four lenses for better TV UX",
      description:
        "These project cards frame the recurring decisions I handle across TV product principles, input methods, accessibility, and writing.",
      items: [
        {
          title: "UX Principle",
          category: "Experience Strategy",
          year: "2026",
          summary:
            "Defined design principles for home and detail screens around viewing distance, content priority, and navigation depth.",
          impact: "Shared UX decision criteria",
        },
        {
          title: "Pointing",
          category: "Interaction Design",
          year: "2026",
          summary:
            "Designed focus movement and selection feedback for experiences mixing D-pad remotes, pointer input, and voice commands.",
          impact: "Reduced navigation errors",
        },
        {
          title: "Accessibility",
          category: "Inclusive TV UX",
          year: "2025",
          summary:
            "Improved visibility, contrast, focus states, and screen reader flow so more viewers can reach the same content.",
          impact: "Structured accessibility QA",
        },
        {
          title: "Writing",
          category: "UX Writing",
          year: "2025",
          summary:
            "Created concise guidance, error messages, and button label rules that stay readable on TV screens.",
          impact: "Clearer and more consistent copy",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's make TV product experiences clearer and more comfortable.",
      description:
        "Available for TV UX strategy, interaction design, accessibility improvements, and UX writing collaboration.",
      cta: "Email hello@sugyeonghyeon.design",
    },
    languageToggle: {
      label: "언어를 한국어로 전환",
    },
  },
} as const;
