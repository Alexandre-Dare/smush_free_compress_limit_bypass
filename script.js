// Arrêter tout observateur précédent
if (window.buttonObserver) {
    window.buttonObserver.disconnect();
    window.buttonObserver = null;
}

// Fonction principale
function watchSmushButton() {
    const buttonContainer = document.getElementById('bulk-smush-resume-button');
    if (!buttonContainer) {
        console.log('Conteneur du bouton non trouvé');
        return;
    }

    // Configuration de l'observateur
    const config = { 
        attributes: true,  // On surveille les changements d'attributs
        attributeFilter: ['class']  // Uniquement les changements de classe
    };

    // Callback
    const callback = function(mutations) {
        mutations.forEach(mutation => {
            // Vérifie si la classe sui-hidden a été retirée
            if (!buttonContainer.classList.contains('sui-hidden')) {
                const button = buttonContainer.querySelector('a.wp-smush-all.sui-button.wp-smush-started.wp-smush-resume-bulk-smush');
                if (button) {
                    button.click();
                    console.log('Bouton cliqué');
                }
            }
        });
    };

    // Création et démarrage de l'observateur
    window.buttonObserver = new MutationObserver(callback);
    window.buttonObserver.observe(buttonContainer, config);
    console.log('Surveillance démarrée - en attente de l\'apparition du bouton');
}

// Fonction d'arrêt
function stopWatching() {
    if (window.buttonObserver) {
        window.buttonObserver.disconnect();
        window.buttonObserver = null;
        console.log('Surveillance arrêtée');
    }
}

// Démarrer la surveillance
watchSmushButton();
console.log('Pour arrêter la surveillance, utilisez stopWatching()');
