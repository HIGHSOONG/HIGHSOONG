
/* =========================================
   숭이고등학교 학생생활 포토갤러리
   게시글 및 가짜 댓글 데이터
========================================= */

window.STUDENT_POSTS = [
    {
        id: "01",
        title: "학교 축제 활동 사진",
        date: "2026.10.01",
        author: "학생생활부",
        images: ["image/student1.jpg"],
        body: "학교 축제 현장의 모습을 소개합니다.\n학생들이 함께 만든 즐거운 추억을 사진으로 만나 보세요.",
        comments: [
            {
                name: "30520 정이안",
                date: "2026.10.02",
                text: "이날 진짜 재밌었어요 ㅋㅋㅋ",
                likes: 12,
                reply: {
                    name: "30508 노유나",
                    date: "2026.10.02",
                    text: "내년에도 또 하자!!",
                    likes: 5
                }
            },
            {
                name: "30211 김숭이",
                date: "2026.10.03",
                text: "사진 너무 잘 나왔다!",
                likes: 7
            }
        ]
    },

    {
        id: "02",
        title: "체육대회 현장 스케치",
        date: "2026.09.22",
        author: "학생생활부",
        images: ["image/student2.jpg"],
        body: "운동장에서 함께 뛰고 응원했던 체육대회 현장입니다.",
        comments: [
            {
                name: "30520 정이안",
                date: "2026.09.23",
                text: "우리 반 응원 최고였음",
                likes: 9
            }
        ]
    },

    {
        id: "03",
        title: "동아리 발표회",
        date: "2026.09.15",
        author: "학생생활부",
        images: ["image/student3.jpg"],
        body: "각 동아리에서 준비한 발표회 현장을 공개합니다.",
        comments: []
    },

    {
        id: "04",
        title: "학교 전경",
        date: "2026.09.07",
        author: "학생생활부",
        images: ["image/student4.jpg"],
        body: "숭이고등학교의 교정과 일상을 담았습니다.",
        comments: []
    },

    {
        id: "05",
        title: "교내 행사 기록",
        date: "2026.08.28",
        author: "학생생활부",
        images: ["image/student5.jpg"],
        body: "학교에서 열린 행사 현장 사진입니다.",
        comments: []
    },

    {
        id: "06",
        title: "방과 후 교실 풍경",
        date: "2026.08.21",
        author: "학생생활부",
        images: ["image/student6.jpg"],
        body: "방과 후에도 활기찬 교실의 모습입니다.",
        comments: []
    },

    {
        id: "07",
        title: "학생 자치 활동",
        date: "2026.07.17",
        author: "학생생활부",
        images: ["image/student7.jpg"],
        body: "학생들이 직접 참여한 자치 활동을 소개합니다.",
        comments: []
    },

    {
        id: "08",
        title: "학급별 추억 사진",
        date: "2026.07.03",
        author: "학생생활부",
        images: ["image/student8.jpg"],
        body: "친구들과 함께한 학교생활의 소중한 순간입니다.",
        comments: []
    }
];
