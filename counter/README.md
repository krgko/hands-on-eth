# Counter with Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

<https://book.getfoundry.sh/>

## Usage

### Init

```bash
forge init {your_project_name} [--no-commit]
cd {your_project_name}
```

### Prepare environment variables

Create `.env` at `./counter/`

```bash
RPC_URL=https://sepolia.optimism.io/
PRIVATE_KEY=
VERIFIER_URL=
```

### Prepare ETH

```bash
source .env

cast from-wei $(cast balance  --rpc-url $RPC_URL {your_wallet_address})

cast send {target_wallet_address} --value 0.1ether --private-key $PRIVATE_KEY --rpc-url $RPC_URL
```

### Build

```shell
forge build
```

### Test

```shell
forge test

forge coverage
```

### Format

```shell
forge fmt
```

### Gas Snapshots

```shell
forge snapshot
```

### Anvil

If you want to test with your local node.

```shell
anvil
```

### Deploy

```shell
source .env

forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY Counter

# Alternative - but did not implemented yet.
forge script script/Counter.s.sol:CounterScript --rpc-url $RPC_URL --private-key $PRIVATE_KEY
```

### Verify

To have your contract publicly available for anyone to audit.

```bash
source .env

forge verify-contract --verifier blockscout --rpc-url $RPC_URL --verifier-url '$VERIFIER_URL' {your_contract_address} ./src/Counter.sol:Counter
```

### Cast

```shell
cast <subcommand>
```

#### Test with Cast

```bash
source .env

cast send --rpc-url $RPC_URL --private-key $PRIVATE_KEY {your_contract_address} "setNumber(uint256)" 42

cast send --rpc-url $RPC_URL --private-key $PRIVATE_KEY {your_contract_address} "increment()"

cast call --rpc-url $RPC_URL {your_contract_address} "number()"
```

### Help

```shell
forge --help
anvil --help
cast --help
```
