function speech1() {
    const u = new SpeechSynthesisUtterance(
        "Recevoir paiement. Cette option vous permet d'encaisser de l'argent depuis un autre utilisateur."
    );
    u.lang = "fr-FR";
    window.speechSynthesis.cancel(); // arrête toute lecture en cours
    window.speechSynthesis.speak(u);
}

function speech2() {
    const u = new SpeechSynthesisUtterance(
        "Mon solde. Consultez ici le montant disponible sur votre compte."
    );
    u.lang = "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
}

function speech3() {
    const u = new SpeechSynthesisUtterance(
        "Envoyer de l'argent. Cette option vous permet de transférer des fonds vers un autre compte."
    );
    u.lang = "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
}

function speech4() {
    const u = new SpeechSynthesisUtterance(
        "Payer vos factures. Réglez directement vos factures depuis cette section."
    );
    u.lang = "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
}