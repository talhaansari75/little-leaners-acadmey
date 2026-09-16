# V90 — Smart Learning Journey

## Added
- Adaptive mini-game challenge selection from the existing local learning brain.
- Class-separated Smart Journey for Nursery, KG and Montessori.
- Skill Map showing New / Practice / Growing / Strong signals.
- Learning Style signals based on local activity modes (picture, audio, game, story, hands-on).
- Offline Center explaining which personalization features work without a network.
- Daily smart challenge with a local refresh action.

## Offline design
The V90 panel reads and writes learning state through the existing localStorage learning brain. It does not require a network request to choose a recommendation or challenge. Existing bundled preschool artwork, audio and worksheets remain cacheable through the preschool service-worker route.

## Safety
The system uses observable learning signals only. It does not claim to read a child's thoughts or emotions, and it does not introduce public profiles or chat.
