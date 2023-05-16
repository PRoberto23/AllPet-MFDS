// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAClgsjDiqcVejkvednWIN1qM58B_-HYmg",
  authDomain: "allpetmfds.firebaseapp.com",
  projectId: "allpetmfds",
  storageBucket: "allpetmfds.appspot.com",
  messagingSenderId: "866147833797",
  appId: "1:866147833797:web:8236ef4422f41e9ba85dac",
  measurementId: "G-46M4XZ04FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

// Função para adicionar um novo usuário ao banco de dados
function adicionarUsuario(nome, email, idade, mensagem) {
  // Crie um novo documento com um ID gerado automaticamente
  db.collection("users").add({
    nome: nome,
    email: email,
    idade: idade,
    mensagem: mensagem
  })
  .then(function(docRef) {
    console.log("Usuário adicionado com ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Erro ao adicionar usuário: ", error);
  });
}

// Use a função adicionarUsuario para adicionar um novo usuário ao banco de dados
// Obtenha os valores do formulário HTML e passe-os para a função adicionarUsuario

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const idade = document.getElementById("idade").value;
  const mensagem = document.getElementById("mensagem").value;

  adicionarUsuario(nome, email, idade, mensagem);

  // Limpe os campos do formulário após o envio
  form.reset();
});
