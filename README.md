# Cros smart items

This repository contains all of the smart items that are available by Cros in the Decentraland [Builder](https://builder.decentraland.org).

## About smart items

Smart items are special assets that include custom functionality, like buttons that can be pressed or doors that can be opened. Learn more about them in the Builder documentation: [docs.decentraland.org/builder/smart-items/](https://docs.decentraland.org/builder/smart-items/)

## Creating smart items

To create your own smart item, it's best to copy one of the existing smart items in this repository and edit it. The main files in a smart item are:

- `asset.json`: The smart item manifest. Includes name, ID, category, tags. It also defines all the configurable **parameters** available in the UI, and all the **actions** that can be called by other smart items that share a scene.

- `item.ts`: Contains the main code that controls the behavior of the item. Must include a class definition for the item, that has an `init()` function (to be called once when the scene starts), and a `spawn()` function (to be called once for every instance of the item when initialized). The `spawn()` function must take an argument of type `Props` that contains all of the parameters configured in the smart item's UI.

- `game.ts`: Contains a scene that is used for testing the item's functionality locally. This scene can include multiple instances of the item, or other entities to carry out more elaborate tests.

Learn more about how to create custom smart itmes in the SKD documentation: [docs.decentraland.org/development-guide/smart-items/](https://docs.decentraland.org/development-guide/smart-items/).

## Directory Structure
The directory structure stays as follows - 
  - smart-items
    - billboard
      - models
      - src
      - asset.json
      - package.json
      - scene.json
    - projector3D
      - models
      - src
      - asset.json
      - package.json
      - scene.json
  - README.md
## Uploading smart items

To use(or modify) any of the exisiting smart-item for creating a scene in builder or in your app through code. Follow the below mentioned steps - 

 1. Open the directory of the respective smart-item.
  ```bash
  cd smart-items/billboard
  npm install
  ```
 2. All the images(/glb/gltf files) should be kept in the 'models' directory.
 3. src/item.ts contains the code for the smart-item. If need to modify, we can do it there.
# use through builder
 4. Once the smart-item is ready, come to the root level of the directory of that perticular smart-item and run the following command -
  ```bash
  dcl pack
  ```
 5. An 'item.zip' file will be generated in the same directory. Upload the same by adding new assetpack in the decentraland builder.
 
# use through code
 4. Once the smart-item is ready, we can copy the complete directory of the smart-item, and use inside the designated project

