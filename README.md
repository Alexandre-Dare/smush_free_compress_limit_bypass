# smush_free_compress_limit_bypass
Permet l'execution de la compression d'image sans avoir à rester sur la page pour relancer l'execution tout les 50 images

# Utilisation du Script pour Smush

Ce script permet d'automatiser le processus de compression d'images avec le plugin Smush en relançant automatiquement la procédure lorsque le bouton "Resume" apparaît.

## Étapes d'utilisation

1. **Accédez à la page du plugin Smush**  
   - Ouvrez l'interface de votre plugin Smush dans WordPress.

2. **Naviguez vers la page "Bulk Smush"**  
   - Cliquez sur l'option "Bulk Smush" pour accéder à la page de compression en masse.

3. **Ouvrez l'inspecteur de votre navigateur**  
   - Utilisez les outils de développement de votre navigateur :  
     - Clic droit sur la page > "Inspecter"  
     - Ou appuyez sur `F12`

4. **Accédez à l'onglet Console**  
   - Dans les outils de développement, sélectionnez l'onglet "Console".

5. **Copiez le script dans la console**  
   - Collez le script fourni dans la console.

6. **Exécutez le script**  
   - Appuyez sur "Entrée" pour lancer le script.  
   - Le script écoutera automatiquement l'apparition du bouton "Resume" et relancera le processus de compression d'image.

## Arrêt du script

- Pour arrêter l'exécution du script, tapez la commande suivante dans la console :

  ```javascript
  stopWatching()

Cela mettra fin à l'écoute automatique du bouton "Resume".

