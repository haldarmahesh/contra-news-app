## Contra news react app
The contra new app shows the real time news in the application.
![alt text](https://i.imgur.com/vqTgu1v.png "Screenshot")

## How start the app?
* npm i 
* npm run start
* set the API_KEY in dev.json
* Have fun :P 

## Architecture
This application follows the clean architecture, with the layers as follows:
* presentation
* domain
* data
and the core layer.

### Presentation layer
This holds everything about UI and the presentation, this doesn't care about from where the data is coming, whether calling API or picking from local storage.

The presentation layer has got the actions which interact with *only* domain layer i.e. use cases.

## Domain layer
This is the interface layer between the presentation and data layer. This defines the domain of the business in contex of UI or end customer.

## Data layer
The data layer, is responsible for managing the data and datasources. This layer communicates with data sources like remote datasource or local data source.
