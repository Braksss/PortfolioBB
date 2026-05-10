<?php
// Autoriser l'accès depuis n'importe quel domaine
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Gérer la requête pré-vol (OPTIONS) CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Paramètres du serveur SMTP
ini_set('SMTP', 'smtp.hostinger.com');  // Assure-toi que c'est bien le serveur SMTP de Hostinger
ini_set('smtp_port', 587);

// Récupération des données envoyées par React
$postData = file_get_contents('php://input');
$request = json_decode($postData, true);

// Si le JSON reçu n'est pas valide
if ($request === null) {
    echo json_encode(['status' => 'error', 'message' => 'Données invalides reçues.']);
    exit;
}

// Vérification des champs requis
if (empty($request['firstName']) || empty($request['lastName']) || empty($request['email']) || empty($request['profession']) || empty($request['message'])) {
    echo json_encode(['status' => 'error', 'message' => 'Tous les champs sont obligatoires.']);
    exit;
}

// Validation de l'email
if (!filter_var($request['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Adresse email invalide.']);
    exit;
}

$name = $request['firstName'] . ' ' . $request['lastName'];
$email = $request['email'];
$subject = $request['profession'];
$message = $request['message'];

// Adresse email du destinataire
$to = "bbrassart@nexabridge.fr";
$subject = "Nouveau message depuis votre formulaire de contact : " . $subject;

// Contenu de l'email
$body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

// En-têtes de l'email
$headers = "From: contact@benwebdev.fr\r\n";
$headers .= "Reply-To: $email\r\n";

// Envoi de l'email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Email envoyé avec succès.']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Échec de l\'envoi de l\'email.']);
}
?>