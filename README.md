# Hands on Labs

## Foundry

Foundry manages your dependencies, compiles your project, runs tests, deploys, and lets you interact with the chain from the command-line and via Solidity scripts.

### Installations

Reference: <https://book.getfoundry.sh/getting-started/installation>

```bash
curl -L https://foundry.paradigm.xyz | bash
```

## Labs

1. [counter with foundry](./counter/README.md)
2. [counter with hardhat](./hardhat-counter/README.md)
3. [simple-token with foundry](./simple-token/README.md)
4. [simple-app-with-scaffold](README.md#scaffold-eth2)

## Scaffold-ETH2

An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain.

**See more:** <https://github.com/scaffold-eth/scaffold-eth-2>

```bash
❯ npm install -g yarn

❯ npx create-eth@latest

 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 | Create Scaffold-ETH 2 app |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+

? Your project name: simple-app-with-scaffold
? What solidity framework do you want to use? hardhat


✔ 📁 Create project directory /Users/kriengsak.ko/Work/others/hands-on-eth/simple-app-with-scaffold
✔ 🚀 Creating a new Scaffold-ETH 2 app in simple-app-with-scaffold
✔ 📦 Installing dependencies with yarn, this could take a while
✔ 🪄 Formatting files
✔ 📡 Initializing Git repository



  Congratulations! Your project has been scaffolded! 🎉

  Next steps:

  cd simple-app-with-scaffold

        Start the local development node
        yarn chain

        In a new terminal window, deploy your contracts
        yarn deploy

        In a new terminal window, start the frontend
        yarn start

  Thanks for using Scaffold-ETH 2 🙏, Happy Building!
```

## Smart Contract Analyzer

These tools will assist you in identifying weaknesses and inconsistencies in practice.

### Slither

See more: <https://github.com/crytic/slither>

```bash
slither [path_to_your_contracts or .] --detect reentrancy-eth,reentrancy-no-eth,reentrancy-unlimited-gas
```

### Mythril

See more: <https://github.com/Consensys/mythril>

```bash
docker run --platform linux/x86_64 -it -v "$(pwd):/code" mythril/myth:0.24.8 sh -c "cd /code && myth -v 4 analyze contracts/*.sol --solc-json remappings.json"
```

For `remappings.json`, create inside your project's root.

```json
{
  "remappings": [
    "@openzeppelin/contracts-upgradeable=./node_modules/@openzeppelin/contracts-upgradeable",
    "@openzeppelin/contracts=./node_modules/@openzeppelin/contracts",
    "@chainlink=./node_modules/@chainlink"
  ],
  "optimizer": { "enabled": true }
}
```

## Usefuls Resources

- <https://solidity-by-example.org/hello-world/>
- <https://wizard.openzeppelin.com/>
- <https://remix.ethereum.org/>
- <https://swcregistry.io/> - no longer maintained
- <https://entethalliance.org/specs/ethtrust-sl/>
- <https://github.com/bekatom/awesome-ethereum>
- <https://github.com/ethereum/awesome-remix>
- <https://github.com/crytic/awesome-ethereum-security>
- <https://github.com/attestate/awesome-ethereum-rollups>
- <https://github.com/manifoldfinance/awesome-ethereum-finance>
- <https://github.com/ttumiel/Awesome-Ethereum>
