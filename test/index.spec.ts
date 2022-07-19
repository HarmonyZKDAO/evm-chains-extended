import * as evmChainsExtended from '../src'

describe('evm-chains-extended', () => {
  it('aliases getChain and appends blockExplorerUrl data', () => {
    const chain = evmChainsExtended.getChain(1)
    expect(chain?.name).toEqual('Ethereum Mainnet')
    expect(chain?.blockExplorerUrls).toEqual(['https://etherscan.io'])
  })

  it('aliases getAllChains and appends extra datas', () => {
    const chains = evmChainsExtended.getAllChains()
    expect(chains?.[0].name).toEqual('Ethereum Mainnet')
    expect(chains?.[0].blockExplorerUrls).toEqual(['https://etherscan.io'])
  })

  it('returns celo alfajores from additionalChains', () => {
    const chain = evmChainsExtended.getChain(44787)
    expect(chain.name).toEqual('Celo Alfajores Testnet')
    expect(chain.blockExplorerUrls).toEqual(['https://alfajores-blockscout.celo-testnet.org'])
  })

  it('returns celo mainnet w/ block explorer URLs', () => {
    const chain = evmChainsExtended.getChain(42220)
    expect(chain.name).toEqual('Celo')
    expect(chain.blockExplorerUrls).toEqual(['https://explorer.celo.org'])
  })

  it('returns harmony mainnet from additionalChains', () => {
    const chain = evmChainsExtended.getChain(1666600000)
    expect(chain.name).toEqual('Harmony Mainnet')
    expect(chain.blockExplorerUrls).toEqual(['https://explorer.harmony.one'])
  })

  it('returns harmony testnet from additionalChains', () => {
    const chain = evmChainsExtended.getChain(1666700000)
    expect(chain.name).toEqual('Harmony Testnet')
    expect(chain.blockExplorerUrls).toEqual(['https://explorer.pops.one'])
  })

  it('returns harmony devnet from additionalChains', () => {
    const chain = evmChainsExtended.getChain(1666900000)
    expect(chain.name).toEqual('Harmony Devnet')
    expect(chain.blockExplorerUrls).toEqual(['https://explorer.ps.hmny.io'])
  })
})
