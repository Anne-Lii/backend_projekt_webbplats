# Projekt Backend Resturang Webbplats

## Anne-Lii Hansen , anha2324@student.miun.se

En webbplats som med hjälp av API presenterar en meny med mat och dryck. Inloggning för administratör finns och vid lyckad inloggning sparas en JSON Web Token (JWT) i localstorage och används för att komma åt administratörsgränssnittet som är en skyddad route. Där finns funktionalitet för att lägga till, ta bort och uppdatera de olika dryckerna och maten.


## Teknologier
**HTML**
**CSS**
**JavaScript**

## Installation
`git clone ` källkod från github
`npm install`
`npm run start`

## Funktionalitet

**Dynamisk meny**
Menyn uppdateras dynamiskt från APIet. I inloggat läge som administratör finns möjlighet att uppdatera maträtter samt lägga till och ta bort maträtter.

**registrering av användare** 
i administratörsgränssnitte som är en skyddad route kan nya administratörer registreras med användarnamn och lösenord i ett formulär. Användarnamnet och lösenordet sparas hashade i en MongoDB databas som är hostad på Atlas. Användaren behöver ange användarnamn och lösenord.

**Inloggning**
Efter registrering kan användarnamnet samt tillhörande lösenord användas på inloggningssidan. Vid lyckad inloggning ges en JWT som lagras i localstorage.

**Autentisering med JTWT**
Den lagrade JWTn används i webbläsaren vid anrop för att autentisera användarens anrop till den skyddade routen.

**Logga ut**
I administratörsgränssnittet finns en Logga ut-knapp och då tas JWTn bort från localstorage och användaren hamnar åter igen på startsidan.