import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Counter", function () {
  async function deploy() {
    // Contracts are deployed using the first signer/account by default
    const [owner] = await hre.ethers.getSigners();

    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter, owner };
  }

  describe("Deployment", function () {
    it("Should deploy completed, the number is zero", async function () {
      const { counter } = await loadFixture(deploy);

      expect(await counter.number()).to.equal(0);
    });
  });

  describe("SetNumber", function () {
    it("Should set number correctly", async function () {
      const { counter } = await loadFixture(deploy);

      await counter.setNumber(42);
      expect(await counter.number()).to.equal(42);
    });
  });

  describe("Increment", function () {
    it("Should increase number correctly", async function () {
      const { counter } = await loadFixture(deploy);

      await counter.increment();
      expect(await counter.number()).to.equal(1);
    });

    it("Should increase number correctly after the number was set", async function () {
      const { counter } = await loadFixture(deploy);

      await counter.setNumber(42);
      expect(await counter.number()).to.equal(42);

      await counter.increment();
      expect(await counter.number()).to.equal(43);
    });
  });
});
