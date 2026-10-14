
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
                name: "30220 정이안",
                date: "2026.10.02",
                text: "이날 진짜 재밌었어요 ㅋㅋㅋ",
                likes: 12,
                reply: {
                    name: "30208 노유나",
                    date: "2026.10.02",
                    text: "내년에도 또 하자!!",
                    likes: 5
                }
            },
            {
                name: "30311 김숭이",
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
                name: "30220 정이안",
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
        id: "ㅇ",
        title: "ㅇ",
        date: "2026.04.17",
        author: "학생생활부",
        images: ["image/student5.jpg"],
        body: "학교에서 열린 행사 현장 사진입니다.",
        comments: []
    },

    {
        id: "everland",
        title: "에버랜드 현장체험학습!!!",
        date: "2026.05.14",
        author: "30208 노유나",
        thumbnail: "image/everland (2).jpg",

        images: [
            "image/everland (2).jpg",
            "image/everland (1).jpg",
            "image/everland (3).jpg",
            "image/everland (4).jpg",
            "image/everland (5).jpg",
        ],

        body: "에버랜드 가서 김다현이랑 티익스 3번 탔음 ㅋㅋㅋㅋㅋ",
        comments: []
    },

    {
        id: "picture",
        title: "302 단체 사진",
        date: "2026.04.17",
        author: "302 담임",

        images: [
            "image/picture (1).jpg",
            "image/picture (2).jpg",
            "image/picture (3).jpg"
        ],
        body: "단체 사진 한 번 찍기 힘들다. 드디어 찍은 단체 사진~",
        comments: [
            {
                name: "30217 정이안",
                date: "2026-04-17",
                text: "쌤 간식 감사합니다!!!",
                likes: 18,

                images: ["image/picture (4).jpg",],
                reply: {
                    name: "30208 노유나",
                    date: "2026-04-17",
                    text: "진짜 학교 앞 붕어빵 꼭 가야함...",
                    likes: 7
                }
            },
        ]

    },


    {
        id: "science",
        title: "제18회 숭이고 과학발명품경진대회 현장",
        author: "302 담임",

        thumbnail: "image/science (7).jpg",
        date: "2026-03-14",
        images: [
            "image/science (4).jpg",
            "image/science (5).jpg",
            "image/science (6).jpg",
            "image/science (7).jpg",
            "image/science (3).jpg",
            "image/science (8).jpg"
        ],
        body: "과학발명품경진대회 우수상은 우리 반 유나~ \n다들 열정적으로 참여했던 것 같네 ㅎㅎ",
        comments: [
            {
                name: "30208 노유나",
                date: "2026-03-14",
                text: "내년엔 대상이 목표!!!!",
                likes: 18,
                reply: {
                    name: "30521 ???",
                    date: "2026-03-14",
                    text: "졸업은 안 하게?",
                    likes: 7
                }
            },
            {
                name: "30205 김나연",
                date: "2026-03-14",
                text: "저 모자도 발명품인 줄 몰랐는데...",
                likes: 9,
                reply: {
                    name: "30507 김주은",
                    date: "2026-03-14",
                    text: "비리가 분명함",
                    likes: 7
                }
            }
        ]
    },


    {
        id: "08",
        title: "3학년 2반 파이팅!!!",
        date: "2026.03.04",
        author: "30208 노유나",

        thumbnail: "image/firstday-02.jpg",

        images: [
            "image/firstday-01.jpg",
            "image/firstday-02.jpg",
            "image/firstday-03.jpg"
        ],
        body: "개학은 싫다... 하지만 우리 반 너무 좋은 듯? ㅎㅎ",
        comments: []
    }
];

