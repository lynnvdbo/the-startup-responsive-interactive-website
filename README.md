# Assist Digital
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Assist Digital is een vertrouwde digitale transformatiepartner voor wereldwijde merken
en helpt hen hun bedrijf te verheffen door middel van AI-gestuurde technologieën en
geavanceerde klantenservicediensten. Door menselijke expertise te combineren met
AI, ontwerpen, implementeren en beheren we nieuwe operationele modellen die de
efficiëntie van marketing, verkoop en klantenservice verbeteren, met een sterke
klantgerichte aanpak.

#### Vraag van de opdrachtgever
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Het doel is het ontwerpen en bouwen van een website voor 270 Degrees en die dient als inspiratie voor toekomstige (mobile) ontwerpen. Er is al een design voor desktop versie en vanuit dat design mochten wij de mobiele versie maken, omdat het responisve moet zijn. Daarnaast dienen we gebruik te maken van de 270 Degrees 3D model viewer, die minstens een keer op de pagina dient te staan.

Check [hier](https://lynnvdbo.github.io/the-startup-responsive-interactive-website/) de website.

## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Responsive](#responsive)
  * [Toegankelijk](#toegankelijk)
  * [Huisstijl](#huisstijl)
  * [Interactief](#interactief)
  * [Kenmerken](#kenmerken)
  * [Code Conventies](#code-conventies)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
### Het ontwerp

Het design wat je hieronder ziet is het design wat wij hebben gekregen voor desktop versie. Het grijze vak in de header is een eigen keuze of je die zo wil laten of een video/afbeelding erin zet. En bij de andere drie grijze vlakken moet de 1e afbeelding de live viewer zijn en de andere twee is eigen keuze.

<img width="123" height="658" alt="Scherm­afbeelding 2026-01-21 om 15 58 35" src="https://github.com/user-attachments/assets/6eb3db7b-0b62-4af7-ab9d-fdf44c30b90b" />

In het design die ik heb ontworpen heb ik ervoor gekozen om een afbeelding te gebruiken als header en daarbij heb ik de helderheid wat verlaagd, zodat de foto wat donkerder wordt en het een goed contrast heeft met de tekst die erop staat. In de header heb ik ook een extra contact us button toegevoegd als call to action button.

Voor de rest ben ik de indeling van het design gaan volgen. Eerst de tekst zodat je informatie krijgt over de afbeelding die je daaronder krijgt. Zoals je kan zien heb ik de afbeeldingen ook recths en links uitgelijnd, dit heb gedaan voor een speelse indeling en dat het niet allemaal recht onder elkaar staat. 

https://github.com/user-attachments/assets/daef8412-b9af-4413-bb3f-59b470d3060a

[figma bestand met schetsen](https://www.figma.com/design/tbcW8JAwDKHIcdzj28urGf/Assist-Digital?node-id=0-1&p=f&t=mDadoyV7zb9YwUfS-0) 

### Responsive
Mijn website is responsive doordat ik eerst mobile first ben gaan werken, daar heb ik een one column layout gebruikt. Daarna heb ik bij de breakpoints gebruik gemaakt van @media queries.

Mijn eerste breakpoint is bij 720px, dan springen de tekst en afbeelding naast elkaar inplaats van onder elkaar.
<img width="620" height="720" alt="Scherm­afbeelding 2026-01-21 om 12 15 51" src="https://github.com/user-attachments/assets/b8d7c06b-8ef4-4fd7-8658-320909246e1e" />

Voor het hamburger menu heb ik een 2e breakpoint dat is om 900px, als je het namelijk bij 720px doet dan gaat hij door het logo heen.
<img width="620" height="490" alt="Scherm­afbeelding 2026-01-21 om 12 30 06" src="https://github.com/user-attachments/assets/f620d352-4bc0-4300-ac8b-baa7bcf5440c" />

En mijn derde breakpoiht is voor desktop en dat is om 1200px. Qua design veranderd er eigenlijk bijna niets het wordt met name wat groter.
<img width="1100" height="600" alt="Scherm­afbeelding 2026-01-21 om 12 16 10" src="https://github.com/user-attachments/assets/17f715b2-d1d9-4432-a8f9-cb34b0937259" />

### Toegankelijk
Voor de toegankelijkheid van de website heb ik verschillende tests gedaan, waaronder de WCAG audit. Hier kwam uit dat de kleurencontrast die ze voor de knoppen hebben niet goed is.

### Huisstijl
De opdrachtgever heeft een figma bestand doorgestuurd met hun huisstijhl. Op basis van [dit figma](https://www.figma.com/design/M3CG5QPebgBfvJuy36WGcV/Opdracht-januari-2026?node-id=0-1&p=f&t=UE8eFJAkUkGri0Al-0) bestand heb ik een styleguide gemaakt. En dit toegepast op mijn website. 

https://github.com/user-attachments/assets/ce912e29-1739-4353-9079-c69c2b6f1bb7
 
### Interactief
Als interactie heb ik een hamburger menu die je open en dicht kan klappen. Tijdens de usertests kreeg ik feedback dat als het menu open geklapt is een kruisje toegankelijker is, zodat gebruikers weten dat je het kan sluiten. Hetzelfde geld voor het menu icoontje. Het is toegankelijker als er een beschrijving staat, zoals menu, zo weet iedereen dat het een menu is want het is niet vanzelfsprekend dat iedereen weet wat het icoontje van een hamburger menu is.

<img width="276" height="700" alt="Scherm­afbeelding 2026-01-21 om 16 34 28" src="https://github.com/user-attachments/assets/b4e2f675-8e29-46d6-8623-153256cbd2cd" />

<img width="276" height="700" alt="Scherm­afbeelding 2026-01-21 om 16 33 09" src="https://github.com/user-attachments/assets/b4b5c981-8de4-430b-8457-33def9e680aa" />

Ik heb ook scroll animatie op de h2, zodat wanneer je scrolt de headings binnenkomen vanaf links (dit werkt niet in firefox) en ik heb dat wanneer je pagina refresht de drie tekstjes een voor een binnen komen.

https://github.com/user-attachments/assets/10c17831-e2fd-49e3-b554-4ae3f99f0b09

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
De website is gebouwd met:

##### HTML
De basisctructuur van HTML is HEAD en BODY. In de HEAD zijn de settings en in de BODY is de de opmaak.
De structuur van de BODY is HEADER, MAIN en FOOTER.

##### CSS
Om nette CSS te schrijven heb ik mijn code genest. Hierdoor heb je minder code en is het overzichelijker. Ik maak ook gebruik van comments, zodat ik weet voor sommige stukjes code waar het voor staat.

https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/style.css#L206-L224

##### JAVASCRIPT
Voor JavaScript maak ik gebruik van het 3 stappenplan.

https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/scripts/script.js#L35-L50

#### Werking van de interactie
Als eerst heb ik in HTML twee buttons aangemaakt voor het menu met een class. Een is het menu icoontje en de anedere het kruisje. Beide buttons heb ik een hidden gegeven, zodat ik ze met javascript kan laten tonen. 

https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/index.html#L18
https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/index.html#L21

In CSS heb ik vervolgens de classes gestyled. Wanneer het menu [dicht](https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/style.css#L31-L42) is en wanneer hij [uitgeklapt](https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/style.css#L31-L42) is. Ik heb ook verschillende clases aangemaakt die ik dan in javascript aanspreek. Bijvoorbeeld [dit stukje CSS](https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/style.css#L125-L128) zorgt ervroor dat het menu in beeld komt als de class is aangesproken. [Dit stukje CSS](https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/style.css#L123) zorgt er voor dat hij uit beeld is als de class niet is aangesproken.

Bij beide buttons heb ik ook een [media query](https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/style.css#L50-L52) staan bij 900px. Hier verschijnt namelijk het gewone menu, dus met [display none](https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/style.css#L66-L68) zorg ik ervoor dat het hamburger menu niet meer zichtbaar is.

Met [JavaScript](https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/scripts/script.js#L1-L30) zorg ik ervoor met het 3 stappenplan dat wanneer er op de button wordt geklikt er de nieuwe classes wordt toegevoegd.

### Code Conventies
Code conventies zijn belangrijk als je code gaat schrijven, zowel voor jezelf als een ander. Als je niet consequent te werk gaat kan het onduidelijkheid verzoorzaken.

### Ademruimte en inspringen
Voor ademruimte gebruik ik tussen de HEADER, MAIN en FOOTER 2 enters ertussen, omdat dat de structuur van de BODY is en dat vind ik duidelijk aangegeven als ik daar gelijke ruimte tussen heb.
https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/index.html#L31-L35

Voor het inspringen gebruik ik tabs.

### Volgorde en nesten van CSS selectors
In CSS geef ik [2 enters](https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/style.css#L25-L34) tussen de classes, zodat elke class overzichtelijk blijft. Waneer ik code ga [nesten](https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/e47c90d27f9f0ea9446b90172e95e62541397c35/style.css#L72-L109) dan gebruik ik een enter ertussen.

### Nesten van media queries
Per onderdeel waar ik een breakpoint wil hebben voeg ik media queries toe en nest ik ze en geef ik ze een ademruimte van een enter.
https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/2bf7d693f0dfb773f0927946a64d9c9f6e335b23/style.css#L190-L203

### Naamgeving
De naamgeving schrijf ik met de kebab-case en in lowercase. Dit heb ik overal toegepast zodat de structuur goed en logisch blijft.
https://github.com/lynnvdbo/the-startup-responsive-interactive-website/blob/c265c7c7a1180e8e6a8e63d9688e1dc0bd6025cd/index.html#L13-L18

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


