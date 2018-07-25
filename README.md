# animaltracking-network

Blockchain network for animal tracking between farms. Based on the Hyperledger Composer example [animal tracking network](https://github.com/hyperledger/composer-sample-networks/tree/master/packages/animaltracking-network)

## Setup

For detailed instructions on the pre-requisites visit [Hyperledger Composer development tools](https://hyperledger.github.io/composer/latest/installing/development-tools.html)

#### You will need `node`, `nvm`, `XCode`, and `docker` installed

#### You will also need the Hyperledger Composer CLI tools:
- `npm install -g composer-cli`
- `npm install -g composer-rest-server`
- `npm install -g generator-hyperledger-composer`
- `npm install -g composer-playground`

#### And of course, Hyperledger Fabric:
Download and extract:
```
mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz
```
Install the local runtime:
```
cd ~/fabric-dev-servers
./downloadFabric.sh
```

## Running the network
### For the first time running a network:
```
    cd ~/fabric-dev-servers
    ./startFabric.sh
    ./createPeerAdminCard.sh
```
### For subsequent restarts:
```
~/fabric-dev-servers/startFabric.sh
```

### To stop a network:
```
~/fabric-dev-servers/stopFabric.sh
```

### To start the business network:

Install the business network:
```
composer network install --card PeerAdmin@hlfv1 --archiveFile [network-name]@0.0.1.bna
```
Start business network:
```
composer network start --networkName [networkname] --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
```
Import the network administrator identity as a usable business network card:
```
composer card import --file networkadmin.card
```


### To run the REST server:
```
composer-rest-server -c admin@animaltracking-network -n never -w true
```
The REST server will then be running at `localhost:3000`
### To run the angular app:
For the first time running the app after cloning the repository:
```
npm install
```
```
cd animaltracking-network-app
npm start
```
The app will then be running at `localhost:4200`

# hc-animaltracking-blockchain
