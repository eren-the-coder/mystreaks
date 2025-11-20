import type { RoutineData } from "./domain/types";

const mockRoutineData: RoutineData[] = [
    // --- Domaine Etudes / Tech ---
    {
        id: 'routine-tech-01',
        title: 'Cours de Programmation JS',
        description: 'Réviser les fondamentaux JavaScript et TypeScript.',
        history: {
            '2025-11-01': { done: true },
            '2025-11-02': { done: true },
            '2025-11-03': { done: false }, // Rupture de série
            '2025-11-04': { done: true, sessions: [{ name: "Async/Await", startTime: 0, endTime: 0, duration: 2400 }] },
            '2025-11-05': { done: true, sessions: [{ name: "React Hooks", startTime: 0, endTime: 0, duration: 3600 }] },
            '2025-11-06': { done: true },
            '2025-11-07': { done: true },
            '2025-11-08': { done: false },
            '2025-11-09': { done: true },
            '2025-11-10': { done: true, sessions: [{ name: "Algorithmes", startTime: 0, endTime: 0, duration: 1200 }] },
            '2025-11-11': { done: true },
            '2025-11-12': { done: true },
            '2025-11-13': { done: true },
            '2025-11-14': { done: true },
            '2025-11-15': { done: true },
            '2025-11-16': { done: true },
            '2025-11-17': { done: true },
            '2025-11-18': { done: true },
            '2025-11-19': { done: true },
            '2025-11-20': { done: false }, // Aujourd'hui, non fait
        },
    },
    {
        id: 'routine-etude-02',
        title: 'Révisions Mathématiques',
        description: 'Pratiquer 10 exercices de calcul intégral.',
        history: {
            '2025-11-10': { done: true },
            '2025-11-11': { done: true },
            '2025-11-12': { done: false },
            '2025-11-13': { done: true },
            '2025-11-14': { done: true },
            '2025-11-15': { done: true },
            '2025-11-16': { done: true },
            '2025-11-17': { done: true },
            '2025-11-18': { done: true },
            '2025-11-19': { done: true },
            '2025-11-20': { done: true }, // Aujourd'hui, fait
        },
    },

    // --- Domaine Santé / Tâches Courantes ---
    {
        id: 'routine-sante-01',
        title: 'Brosser les dents (Soir)',
        description: 'Rien de plus simple.',
        history: {
            '2025-11-05': { done: true },
            '2025-11-06': { done: true },
            '2025-11-07': { done: true },
            '2025-11-08': { done: true },
            '2025-11-09': { done: true },
            '2025-11-10': { done: true },
            '2025-11-11': { done: true },
            '2025-11-12': { done: true },
            '2025-11-13': { done: true },
            '2025-11-14': { done: true },
            '2025-11-15': { done: true },
            '2025-11-16': { done: true },
            '2025-11-17': { done: true },
            '2025-11-18': { done: true },
            '2025-11-19': { done: true },
            '2025-11-20': { done: true }, // Aujourd'hui, fait
        },
    },

    // --- Domaine Développement Personnel / Argent ---
    {
        id: 'routine-finance-01',
        title: 'Budget Quotidien/Épargne',
        description: 'Vérifier les dépenses et transférer 5€ sur le compte épargne.',
        history: {
            '2025-11-15': { done: true },
            '2025-11-16': { done: true },
            '2025-11-17': { done: true },
            '2025-11-18': { done: false },
            '2025-11-19': { done: true },
            '2025-11-20': { done: true }, // Aujourd'hui, fait
        },
    },
];

// N'oubliez pas d'exporter le tableau pour l'utiliser dans votre application
export { mockRoutineData };