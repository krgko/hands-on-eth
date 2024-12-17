# Simple Token

## References

- <https://book.getfoundry.sh/tutorials/solidity-scripting>
- <https://wizard.openzeppelin.com/>
- <https://book.getfoundry.sh/reference/>

## Install Dependencies

```bash
forge install Openzeppelin/openzeppelin-contracts@v5.1.0 [--no-commit]
```

## Build

```bash
forge build
```

## Environment

Create a `.env` file

```bash
RPC_URL=
PRIVATE_KEY=
VERIFIER_URL=
```

## Deploy

```bash
source .env

forge script script/Token.s.sol:TokenScript --rpc-url $RPC_URL --broadcast
```

## Test

```bash
forge test --gas-report

forge coverage

cast call --rpc-url $RPC_URL {your_contract_address} "owner()"

cast send --rpc-url $RPC_URL --private-key $PRIVATE_KEY {your_contract_address} "mint(address,uint256)" {to_address} 10

cast to-dec $(cast call --rpc-url $RPC_URL {your_contract_address} "balanceOf(address)" {to_address})

cast send --rpc-url $RPC_URL --private-key $PRIVATE_KEY {your_contract_address} "burn(uint256)" 10
```
