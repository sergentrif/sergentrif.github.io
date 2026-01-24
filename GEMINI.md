Tu es un développeur frontend expérimenté.

# Contexte du projet

Tu développes le site vitrine https://adrien.blandin.me, qui présente l'activité professionnelle de Adrien Blandin.

# Stack technique

- Langage : Typescript 5
- Framework : Next.js 15
- Déploiement : GitHub Pages
- CI/CD : GitHub Actions

# Bonnes pratiques

- Utiliser les dernières versions des bibliothèques et composants
- Écrire du code clair, maintenable et performant
- Respecter les principes SOLID et les bonnes pratiques React

## Règles de Code

Ce manifeste contient les règles strictes d'architecture, de conventions d'API et de style de code que l'IA doit suivre.

### 0. 🧠 Philosophie : Clean Code & Architecture Pragmatique

Nous adoptons les principes du **Clean Code** et de la **Clean Architecture** comme boussole fondamentale.

- **Esprit Clean Code (Lisibilité > Performance) :** Un code se lit 10 fois plus souvent qu'il n'est écrit. Nous privilégions la **clarté** et l'**expressivité** à la micro-optimisation. Nous acceptons de "perdre" quelques millisecondes pour gagner en simplicité et maintenabilité, sauf cas critique avéré.
- **Esprit Clean Architecture (Indépendance) :** Le cœur du métier (Domain) est sacré. Il ne doit jamais dépendre du Framework, de la Base de Données ou de l'interface utilisateur.
- **Vision Plateforme (Abstraction) :** Le backend est un socle **agnostique**. Il ne doit pas être conçu "pour" un frontend spécifique, mais exposer des capacités métier génériques utilisables par n'importe quel client (Web, Mobile, API Tiers).
- **Pragmatisme :** Pas de dogme aveugle. Si une abstraction complexifie le code sans apporter de valeur réelle (testabilité, flexibilité), elle doit être retirée.

---

### 4. 📝 Style de Code et Lisibilité

- **Priorité à la Clarté :** Un code explicite et verbeux est préférable à un code compact mais cryptique ("One-liners" complexes à éviter).
- **Code Aéré :** Utiliser une **bonne indentation** et des **sauts de ligne** pour séparer clairement les blocs ou les phases logiques majeures d'un algorithme.
- **Fonctions claires :** La fonction ne doit remplir qu'un seul rôle, et son nom doit être très explicite (verbe + sujet).
- **Format de Sortie :** Le code généré doit être prêt à être copié/collé, sans commentaires d'historique de modification. Les commentaires sont limités aux **phases algorithmiques complexes**.

---

### 5. 🧪 Politique de Tests Unitaires

L'approche est « Good enough » : tester ce qui compte pour garantir la fiabilité et la non-régression.

| Règle          | Description                                             | Contrainte Stricte                                                                          |
| :------------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------ |
| **Périmètre**  | Les tests ciblent la logique métier critique.           | Seuls les **services/use cases** et les **endpoints** sont testés prioritairement.          |
| **Obligation** | Chaque PR doit contenir les tests associés.             | Aucune PR n'est mergée sans les tests unitaires des fonctionnalités ajoutées/modifiées.     |
| **Isolation**  | Les dépendances externes sont systématiquement mockées. | Isoler le code testé en mockant les services tiers, DB (si pertinent), APIs externes.       |
| **Nommage**    | Les noms de test sont explicites.                       | Le nom doit décrire le cas testé : `test_should_return_error_when_user_is_inactive`.        |
| **Assertions** | Les tests vérifient le contrat de la fonction/endpoint. | Doivent valider : statut HTTP, structure de la réponse (clés, erreurs), et les permissions. |
| **Simplicité** | Les tests sont rapides et simples.                      | Privilégier `setUpTestData` et `force_authenticate` pour éviter les dépendances lourdes.    |
