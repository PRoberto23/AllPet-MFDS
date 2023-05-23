import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// TODO: Add SDKs for firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBLvTUgN0lc8dvpPtcp9zbH6lGVg-EU1Bg",
  authDomain: "allpet-mfds2v.firebaseapp.com",
  projectId: "allpet-mfds2v",
  storageBucket: "allpet-mfds2v.appspot.com",
  messagingSenderId: "797381462023",
  appId: "1:797381462023:web:85f033d5e11d445ea342a2",
  measurementId: "G-CBR40WHYZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var botao = document.getElementById('enviarbtn');

botao.addEventListener('click', (e) => {
    alert("botao clicado");

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confSenha = document.getElementById('confSenha').value;

    addDoc(collection(db, "users"), {
        name: name,
        email: email,
        senha: senha
    });

    alert('Usuário adicionado');
});

try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Cecilia",
        last: "Fonteles",
        born: 2005
});
    console.log("ID do documento: " , docRef.id);
} catch (e) {
    console.error("erro: ", e );
}