# Github API Challenge

En aquest exercici et proposo que facis un cop d'ull a l'API Rest de Github i et proposo alguns reptes. Això ens ajudarà a familiaritzar-nos sobretot amb documentacions d'APIs que potser no són tan amigables, segurament perquè tenen moltíssimes opcions.

Algunes informacions prèvies que hauríes de tenir en compte:

- Github API: https://developer.github.com/v3/
- Per fer ús de l'API de Github necessitaràs un token d'accés. Pots seguir aquesta guia per obtenir-ne un: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic (hauràs de triar quins permisos necessites)
- Github fa ús d'un SDK anomenat Octokit (forma part dels paquets d'aquest projecte, veure package.json) Aquest SDK està disponible en molts llenguatges de programació. Veuràs que la documentació fa referència a crides fetes amb aquest. Podries arribar a fer les crides sense necessitat d'aquest SDK amb les capçaleres afegides amb Fetch. Investiga a veure com ho pots fer.

Abans de començar, com és habitual hauràs de fer un **npm install** per instal·lar les dependències.

A partir d'aquí, tens un esquelet del codi inicial per poder començar a treballar. Tot i que no ho hem vist i ajudan-te d'alguna IA, pots mirar d'interactuar amb el DOM per mostrar els resultats de les crides a l'API.

A classe veurem una DEMO del que hem d'aconseguir però a grans trets hauries de ser capaç de:

1. Obtenir informació bàsica del vostre usuari de Github (nom, username, avatar, etc)
2. Fer un llistat dels repositoris d'un usuari (pot ser el teu) de Github.
3. Fer que el llistat de repositoris que em retorna siguin els darrers creats.
4. Afegir informació bàsica dels repositoris així com un enllaç a aquest.
5. Implementar funcions per crear i borrar els repositoris.

Endavant!
