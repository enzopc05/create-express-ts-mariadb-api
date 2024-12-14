CREATE DATABASE gestion_aeronefs;

USE gestion_aeronefs;

CREATE TABLE Aeronefs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(100) NOT NULL,
    status ENUM('active', 'maintenance', 'out_of_service') NOT NULL
);

CREATE TABLE Techniciens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL
);

CREATE TABLE Entretiens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aircraft_id INT NOT NULL,
    technician_id INT NOT NULL,
    date DATE NOT NULL,
    details TEXT,
    FOREIGN KEY (aircraft_id) REFERENCES Aeronefs(id) ON DELETE CASCADE,
    FOREIGN KEY (technician_id) REFERENCES Techniciens(id) ON DELETE CASCADE
);

INSERT INTO Aeronefs (model, status) VALUES
('Airbus A320', 'active'),
('Boeing 737', 'maintenance'),
('Cessna 172', 'out_of_service'),
('Bombardier CRJ', 'active'),
('Embraer E190', 'maintenance');

INSERT INTO Techniciens (name, prenom) VALUES
('Dupont', 'Jean'),
('Martin', 'Claire'),
('Durand', 'Pierre'),
('Lemoine', 'Sophie'),
('Bernard', 'Luc');


INSERT INTO Entretiens (aircraft_id, technician_id, date, details) VALUES
(1, 1, '2024-01-05', 'Révision complète du moteur.'),
(2, 2, '2024-02-12', 'Inspection des systèmes électriques.'),
(3, 3, '2024-03-20', 'Réparation de la carlingue.'),
(4, 4, '2024-04-10', 'Test des équipements de navigation.'),
(5, 5, '2024-05-15', 'Mise à jour des logiciels de vol.'),
(1, 3, '2024-06-18', 'Remplacement des pneus du train d’atterrissage.'),
(2, 4, '2024-07-22', 'Nettoyage et vérification des réservoirs de carburant.');


