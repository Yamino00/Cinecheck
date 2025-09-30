# 🎬 Cinecheck

**La piattaforma sociale rivoluzionaria per recensioni cinematografiche autentiche**

![Cinecheck Banner](public/banner.png)

## 🌟 Panoramica

Cinecheck risolve il problema delle recensioni false nel mondo cinematografico attraverso un sistema innovativo di verifica tramite quiz. Prima di poter recensire un film, serie TV o anime, gli utenti devono superare un quiz che dimostra di aver effettivamente visto il contenuto.

### ✨ Caratteristiche Principali

- 🎯 **Sistema di Verifica Quiz**: Quiz gamificati obbligatori prima di ogni recensione
- 🏆 **Punteggio Affidabilità**: Sistema di reputazione basato su quiz superati
- 🎨 **Design Cinematografico**: UI moderna con animazioni fluide e palette colori vivaci
- 📱 **App Ibrida**: Funziona perfettamente su web e mobile
- 🔍 **Database Completo**: Integrazione TMDB per film, serie TV e anime
- 👥 **Social Network**: Follow utenti, feed attività, like e commenti
- 📚 **Liste Personalizzate**: Watchlist, collezioni custom, statistiche
- 🎮 **Gamification**: Achievement, badge, celebrazioni animate

## 🚀 Tech Stack

### Frontend
- **Web**: React + Next.js 14
- **Mobile**: React Native + Expo
- **Styling**: Tailwind CSS + NativeWind
- **Animazioni**: Framer Motion + Lottie
- **State Management**: Zustand + React Query

### Backend
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Real-time**: Supabase Realtime
- **Storage**: Supabase Storage
- **API Esterne**: TMDB API

## 📦 Struttura Progetto

```
cinecheck/
├── web/                 # App Next.js
│   ├── src/
│   │   ├── app/        # App Router pages
│   │   ├── components/ # Componenti React
│   │   ├── hooks/      # Custom hooks
│   │   ├── lib/        # Utilities
│   │   └── styles/     # CSS globali
│   └── public/         # Asset statici
├── mobile/             # App React Native
│   ├── src/
│   │   ├── screens/    # Schermate app
│   │   ├── components/ # Componenti nativi
│   │   ├── navigation/ # React Navigation
│   │   └── services/   # Servizi mobile
│   └── assets/         # Asset mobile
├── shared/             # Codice condiviso
│   └── src/
│       ├── lib/        # Configurazioni
│       ├── services/   # Business logic
│       ├── types/      # TypeScript types
│       └── theme/      # Design system
└── supabase/           # Database
    ├── migrations/     # Schema SQL
    └── functions/      # Edge Functions
```

## 🛠️ Installazione

### Prerequisiti

- Node.js 18+
- npm 9+
- Account Supabase
- API Key TMDB

### Setup

1. **Clona il repository**
```bash
git clone https://github.com/yourusername/cinecheck.git
cd cinecheck
```

2. **Installa le dipendenze**
```bash
npm install
```

3. **Configura le variabili d'ambiente**
```bash
cp .env.example .env.local
# Modifica .env.local con le tue credenziali
```

4. **Setup Database Supabase**
```bash
# Esegui le migration nel dashboard Supabase
# Path: supabase/migrations/
```

5. **Avvia l'app web**
```bash
npm run dev:web
# Apri http://localhost:3000
```

6. **Avvia l'app mobile**
```bash
npm run dev:mobile
# Usa Expo Go sul tuo dispositivo
```

## 🎮 Funzionalità Dettagliate

### Sistema Quiz di Verifica

Il cuore di Cinecheck è il sistema di quiz che garantisce recensioni autentiche:

1. **Selezione Contenuto**: L'utente sceglie un film/serie da recensire
2. **Quiz Obbligatorio**: 5-10 domande sul contenuto
3. **Validazione**: Minimo 70% risposte corrette per procedere
4. **Recensione Verificata**: Badge "Verificato" sulla recensione
5. **Punteggio Affidabilità**: Aumenta con ogni quiz superato

### Tipologie di Domande

- **Trama**: Eventi chiave, colpi di scena
- **Cast**: Attori e personaggi
- **Produzione**: Regista, anno, budget
- **Citazioni**: Dialoghi memorabili
- **Trivia**: Curiosità e dettagli

### Sistema di Punteggio

- ✅ Quiz superato: +10 punti affidabilità
- ⏱️ Completamento veloce: Bonus punti
- 💯 Punteggio perfetto: Achievement speciale
- 🏆 Milestone: Badge a 10, 50, 100 recensioni verificate

## 🎨 Design System

### Palette Colori

- **Primary (Cinema Red)**: `#ef4444`
- **Secondary (Cinema Blue)**: `#3b82f6`
- **Accent (Gold Awards)**: `#f59e0b`
- **Success (Verified Green)**: `#22c55e`
- **Dark**: `#09090b`

### Animazioni

- Transizioni smooth con Framer Motion
- Micro-interazioni su hover
- Loading states con Lottie
- Celebrazioni gamificate

## 📱 Screenshots

<div align="center">
  <img src="public/screenshot-1.png" width="250" alt="Homepage">
  <img src="public/screenshot-2.png" width="250" alt="Quiz">
  <img src="public/screenshot-3.png" width="250" alt="Profile">
</div>

## 🤝 Contributing

Siamo aperti a contributi! Per favore:

1. Fork il progetto
2. Crea un branch (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 License

Questo progetto è distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori informazioni.

## 🙏 Ringraziamenti

- [TMDB](https://www.themoviedb.org/) per l'API cinematografica
- [Supabase](https://supabase.com/) per il backend
- [Vercel](https://vercel.com/) per l'hosting
- La community open source

## 📞 Contatti

- **Website**: [cinecheck.app](https://cinecheck.app)
- **Email**: info@cinecheck.app
- **Twitter**: [@cinecheckapp](https://twitter.com/cinecheckapp)

---

<p align="center">Made with ❤️ and 🎬 by the Cinecheck Team</p>