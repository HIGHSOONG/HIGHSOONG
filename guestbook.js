
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCXurJMD4RXBNm4Pr5k8wWDWsSAiHh8aw4",
    authDomain: "soong-high-school.firebaseapp.com",
    projectId: "soong-high-school",
    storageBucket: "soong-high-school.firebasestorage.app",
    messagingSenderId: "1017874841586",
    appId: "1:1017874841586:web:4d247d92fbe9ef62eab56b",
    measurementId: "G-QMDTL6ML1Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("guestbook-form");
const list = document.getElementById("guestbook-list");
const submitButton = form.querySelector('button[type="submit"]');

const messagesRef = collection(db, "guestbook");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nickname = document.getElementById("nickname").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!nickname || !message) {
        alert("닉네임과 메시지를 입력해 주세요.");
        return;
    }

    if (nickname.length > 20 || message.length > 300) {
        alert("입력 가능한 글자 수를 초과했습니다.");
        return;
    }

    submitButton.disabled = true;

    try {
        await addDoc(messagesRef, {
            nickname,
            message,
            createdAt: serverTimestamp()
        });

        form.reset();
        alert("방명록이 등록되었습니다!");
    } catch (error) {
        console.error(error);
        alert("아직 글을 등록할 수 없습니다. Firebase 설정을 확인해 주세요.");
    } finally {
        submitButton.disabled = false;
    }
});

const messagesQuery = query(
    messagesRef,
    orderBy("createdAt", "desc"),
    limit(50)
);

onSnapshot(messagesQuery, (snapshot) => {
    list.replaceChildren();

    if (snapshot.empty) {
        list.textContent = "아직 작성된 방명록이 없습니다.";
        return;
    }

    snapshot.forEach((documentSnapshot) => {
        const data = documentSnapshot.data();

        const entry = document.createElement("div");
        entry.className = "guestbook-entry";

        const name = document.createElement("strong");
        name.textContent = data.nickname || "익명";

        const message = document.createElement("p");
        message.textContent = data.message || "";

        entry.append(name, message);
        list.appendChild(entry);
    });
}, (error) => {
    console.error(error);
    list.textContent = "방명록을 불러올 수 없습니다. Firebase 권한을 확인해 주세요.";
});
