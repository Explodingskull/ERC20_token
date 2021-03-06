const godav = artifacts.require("godav")

contract("godav", (accounts) => {

    before(async () => {
       Godav = await godav.deployed() 
    })

    it("gives the owner of the token 1M tokens", async () => {
        let balance = await Godav.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance,'ether') 
        assert.equal(balance, 1000000, "Balance should be 1M tokens for contract creator")   
    })

    it("can transfer tokens between accounts", async () =>{
        let amount = web3.utils.toWei('1000','ether')
        await Godav.transfer(accounts[1], amount, {from: accounts[0] })

        let balance = await Godav.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance,'ether')
        assert.equal(balance, 1000, "Balance should be 1k tokens for contract creator")
    })

})