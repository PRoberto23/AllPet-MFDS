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
    senha: senha, 
    confsenha: confsenha
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

const form = document.querySelector("index");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confsenha = document.getElementById("confsenha").value;

  adicionarUsuario(nome, email, senha);

  // Limpe os campos do formulário após o envio
  form.reset();
});

// Criar uma conta de usuário com email/senha
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Registro bem-sucedido, você pode acessar o usuário criado através de userCredential.user
    const user = userCredential.user;
  })
  .catch((error) => {
    // Lidar com erros durante o registro
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// Fazer login com email/senha
auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Login bem-sucedido, você pode acessar o usuário logado através de userCredential.user
    const user = userCredential.user;
  })
  .catch((error) => {
    // Lidar com erros durante o login
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// Fazer logout
auth.signOut()
  .then(() => {
    // Logout bem-sucedido
  })
  .catch((error) => {
    // Lidar com erros durante o logout
  });

// Observar o estado de autenticação do usuário
auth.onAuthStateChanged((user) => {
  if (user) {
    // O usuário está logado, você pode acessar o objeto user
  } else {
    // O usuário não está logado
  }
});

/**
 * // Importe o SDK do Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Configure a configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_ID_DO_PROJETO",
  // ...
};

// Inicialize o app do Firebase
firebase.initializeApp(firebaseConfig);

// Obtenha referências para o Firestore e para o módulo de autenticação
const db = firebase.firestore();
const auth = firebase.auth();

// Função para adicionar usuário ao Firestore
function adicionarUsuario(nome, email, senha) {
  return db.collection("users").add({
    nome: nome,
    email: email,
    senha: senha
  });
}

// Função para criar uma conta de usuário com email/senha
function criarContaUsuario(email, senha) {
  return auth.createUserWithEmailAndPassword(email, senha);
}

// Função para fazer login com email/senha
function fazerLogin(email, senha) {
  return auth.signInWithEmailAndPassword(email, senha);
}

// Exemplo de uso das funções
adicionarUsuario("John Doe", "johndoe@example.com", "senha123")
  .then((docRef) => {
    console.log("Usuário adicionado com ID: ", docRef.id);
    return criarContaUsuario("johndoe@example.com", "senha123");
  })
  .then((userCredential) => {
    console.log("Conta criada com sucesso para o usuário: ", userCredential.user.email);
    return fazerLogin("johndoe@example.com", "senha123");
  })
  .then((userCredential) => {
    console.log("Usuário logado com sucesso: ", userCredential.user.email);
  })
  .catch((error) => {
    console.error("Erro: ", error);
  });

 */