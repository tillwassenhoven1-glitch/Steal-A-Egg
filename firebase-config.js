// ☁️ Cloud-Speichern (Login mit Google oder E-Mail) über Firebase
// So aktivierst du es:
// 1. https://console.firebase.google.com → "Projekt hinzufügen"
// 2. Im Projekt: "Web-App hinzufügen" (</>) → die angezeigte firebaseConfig unten einfügen
// 3. Build → Authentication → Anmeldemethode: "Google" und "E-Mail/Passwort" aktivieren
//    Authentication → Einstellungen → Autorisierte Domains: tillwassenhoven1-glitch.github.io hinzufügen
// 4. Build → Firestore Database → Datenbank erstellen → bei "Regeln" das hier einfügen:
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /saves/{uid} { allow read, write: if request.auth != null && request.auth.uid == uid; }
//      }
//    }
// Solange hier null steht, speichert das Spiel nur im Browser (plus Spielstand-Code).

window.FIREBASE_CONFIG = null;

// Beispiel (mit deinen Werten ersetzen):
// window.FIREBASE_CONFIG = {
//   apiKey: "AIza...",
//   authDomain: "dein-projekt.firebaseapp.com",
//   projectId: "dein-projekt",
//   storageBucket: "dein-projekt.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:abc123"
// };
