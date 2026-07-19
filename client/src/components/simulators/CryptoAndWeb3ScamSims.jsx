import React, { useState } from 'react';

// ID 236: Cardano ADA 2x Airdrop Giveaway UI
export function CardanoSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [seedPhrase, setSeedPhrase] = useState('');
  const [walletType, setWalletType] = useState('Daedalus / Yoroi Shelley');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['24-Word Recovery Phrase', 'Shelley Wallet Credentials', 'Total ADA Balance']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#090d16', border: '2px solid #3b82f6', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f3f4f6', boxShadow: '0 0 30px rgba(59,130,246,0.2)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e3a8a', paddingBottom: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🔵</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#60a5fa' }}>Cardano Foundation Official 100M ADA Giveaway</h3>
            <span style={{ fontSize: '0.75rem', color: '#93c5fd' }}>🔴 LIVE BROADCAST: Charles Hoskinson Keynote • 18,420 watching</span>
          </div>
        </div>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>SEND 5,000 GET 10,000</span>
      </div>

      <div style={{ background: '#172554', padding: '14px', borderRadius: '10px', marginBottom: '16px', textAlign: 'center', border: '1px solid #3b82f6' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#bfdbfe' }}>To celebrate the Hydra hard fork, we are doubling all deposits!</div>
        <div style={{ fontSize: '0.8rem', color: '#93c5fd', marginTop: '6px' }}>
          Connect or restore your Daedalus/Yoroi wallet to instantly claim your 2x reward distribution before the pool empties.
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Select Wallet Architecture:</label>
            <input required type="text" value={walletType} onChange={e => setWalletType(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #3b82f6', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Enter your 15- or 24-Word Recovery Seed Phrase (`to sync Airdrop contract`):</label>
            <textarea required rows={3} placeholder="apple brave camera delta echo..." value={seedPhrase} onChange={e => setSeedPhrase(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #3b82f6', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#2563eb', color: '#fff', padding: '14px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1.05rem' }}>
            {loading ? 'Verifying wallet balance & transferring 2x ADA...' : 'Verify Seed Phrase & Claim 2x ADA Bonus'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Seed Phrase Stolen & Wallet Drained!</h4>
          <p style={{ fontSize: '0.85rem', color: '#bfdbfe', margin: 0 }}>The live YouTube stream was a looped recording broadcast by scammers. Entering your 24-word recovery phrase gave them complete master access to your ADA funds.</p>
        </div>
      )}
    </div>
  );
}

// ID 237: Carding Forum VIP Crypto Escrow UI
export function CardingForumSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [txHash, setTxHash] = useState('');
  const [username, setUsername] = useState('CyberGhost_99');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['0.05 BTC ($3,200) Escrow Deposit', 'Darknet Forum User Account', 'Bitcoin Transaction Hash']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#050505', border: '1px solid #16a34a', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#22c55e', fontFamily: 'monospace' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #16a34a', paddingBottom: '12px', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#4ade80' }}>&gt; SHADOW_CARDERS // ESCROW GATEWAY_v4</h3>
        <span style={{ background: '#052e16', color: '#4ade80', border: '1px solid #22c55e', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 'bold' }}>VIP DEPOSIT REQUIRED</span>
      </div>

      <div style={{ background: '#022c22', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #15803d', fontSize: '0.85rem', color: '#86efac' }}>
        [SYSTEM NOTICE] To access the High-Balance Platinum CVV dump marketplace and prevent law enforcement scraping, new members must deposit **0.05 BTC ($3,200)** into the automated site escrow wallet.
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ background: '#000', padding: '12px', borderRadius: '6px', border: '1px solid #22c55e', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: '#4ade80' }}>Official Forum Escrow Bitcoin Address:</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', margin: '6px 0' }}>bc1q_shadow_escrow_xxxx981023aaaa</div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#4ade80' }}>Your Darknet Forum Username:</label>
            <input required type="text" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', padding: '10px', background: '#000', border: '1px solid #16a34a', borderRadius: '6px', color: '#22c55e', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#4ade80' }}>Bitcoin Transaction Hash (TXID) verifying your 0.05 BTC transfer:</label>
            <input required type="text" placeholder="Enter 64-char hex TXID" value={txHash} onChange={e => setTxHash(e.target.value)} style={{ width: '100%', padding: '10px', background: '#000', border: '1px solid #16a34a', borderRadius: '6px', color: '#22c55e', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#16a34a', color: '#000', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem', fontFamily: 'monospace' }}>
            {loading ? 'Verifying blockchain confirmation & unlocking VIP access...' : 'Verify Escrow Deposit & Activate VIP Access'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>💥</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Darknet Forum Exit Scam!</h4>
          <p style={{ fontSize: '0.85rem', color: '#fca5a5', margin: 0 }}>The entire forum was a honey-pot operated by scammers (`or law enforcement`). Once you sent the `0.05 BTC` deposit to their wallet, your account was instantly banned.</p>
        </div>
      )}
    </div>
  );
}

// ID 261: Cryptocurrency Exchange Tax Withdrawal Hold UI
export function CryptoExchangeSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [wallet, setWallet] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['$12,500 USDT Tax Deposit', 'External Wallet Address', 'Exchange Login Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#e6edf3' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #21262d', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#58a6ff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>💎</span> ApexCrypto Vault - Withdrawal Hold
        </h3>
        <span style={{ background: '#450a0a', color: '#fca5a5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>FROZEN 14.28 BTC</span>
      </div>

      <div style={{ background: '#161b22', padding: '16px', borderRadius: '10px', border: '1px solid #30363d', marginBottom: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>Available Vault Balance (Locked)</div>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#58a6ff', margin: '6px 0' }}>14.2841 BTC <span style={{ fontSize: '1rem', color: '#8b949e' }}>($842,510 USD)</span></div>
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #f85149', padding: '10px', borderRadius: '6px', fontSize: '0.8rem', color: '#ff7b72', textAlign: 'left', marginTop: '12px' }}>
          🛑 <strong>IRS / Regulatory Tax Withholding Hold:</strong> Before withdrawing funds to your hardware wallet, you must deposit a 1.5% verification withholding tax (**$12,500 USDT**) from an external wallet.
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#c9d1d9' }}>Your External USDT / ERC-20 Wallet Address (to receive 14.28 BTC after tax clearance):</label>
            <input required type="text" placeholder="0x71C... / bc1q..." value={wallet} onChange={e => setWallet(e.target.value)} style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#238636', color: '#fff', padding: '14px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            {loading ? 'Transferring $12,500 USDT tax clearance to exchange escrow...' : 'Transfer $12,500 USDT Tax Deposit & Unlock Balance'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#ff7b72', margin: '0 0 8px 0' }}>Advance Fee Crypto Extortion!</h4>
          <p style={{ fontSize: '0.85rem', color: '#8b949e', margin: 0 }}>The `14.28 BTC` balance was fake screen numbers. Legitimate crypto exchanges never require you to deposit fresh external funds ("withholding tax") to unlock your withdrawals.</p>
        </div>
      )}
    </div>
  );
}

// ID 268: darkblood MMORPG Steam Giveaway UI
export function DarkbloodSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [steamUser, setSteamUser] = useState('');
  const [steamPass, setSteamPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Steam / Epic Games Login Credentials', 'Steam Guard 2FA Code', 'MMORPG Inventory Items']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#a855f7', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🐉</span> Darkblood Online - Season 5 Anniversary Giveaway
        </h3>
        <span style={{ background: '#3b0764', color: '#d8b4fe', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>FREE LEGENDARY SKIN</span>
      </div>

      <div style={{ background: '#1e293b', padding: '16px', borderRadius: '10px', textAlign: 'center', marginBottom: '16px', border: '1px solid #475569' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '4px' }}>🛡️</div>
        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e879f9' }}>Legendary Crimson Dragon Armor Set ($80 Store Value)</div>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '6px' }}>Connect your Steam / Epic account below to drop the item bundle directly into your in-game inventory.</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Steam Account Username / Email (`via Steam Community OpenID`):</label>
            <input required type="text" placeholder="Enter Steam Username" value={steamUser} onChange={e => setSteamUser(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Steam Password + Steam Guard Mobile Code:</label>
            <input required type="password" placeholder="Password + 5-character Steam Guard code" value={steamPass} onChange={e => setSteamPass(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#9333ea', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Authenticating with Steam community gateway & dropping armor...' : 'Sign in with Steam & Claim Free Armor Set'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Steam Account & Inventory Stolen!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The login portal was a phishing mirror (`darkblood-online-gift.com`). Scammers intercepted your Steam password and Guard code, instantly trading away all your valuable CS2/Dota items.</p>
        </div>
      )}
    </div>
  );
}

// ID 269: Dash Coin Core Wallet Out-of-Sync Recovery UI
export function DashCoinSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [mnemonic, setMnemonic] = useState('');
  const [walletVersion, setWalletVersion] = useState('Dash Core v19.2.0');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['12/24-Word BIP39 Seed Phrase', 'Dash Core Wallet Address', 'Total DASH Balance']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#e6edf3' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #21262d', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#58a6ff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>⚡</span> Dash Chain Sync - Node Recovery Portal
        </h3>
        <span style={{ background: '#21262d', color: '#ff7b72', border: '1px solid #f85149', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>OUT OF SYNC (BLOCK #1892102)</span>
      </div>

      <div style={{ background: '#161b22', padding: '14px', borderRadius: '8px', border: '1px solid #30363d', marginBottom: '16px', fontSize: '0.85rem', color: '#8b949e' }}>
        ⚠️ <strong>Blockchain Desynchronization Detected:</strong> Your Dash Core node is 47,898 blocks behind network consensus due to a corrupted block header index. To re-index your addresses without re-downloading the 35 GB chain, verify your master recovery phrase below.
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#c9d1d9' }}>Wallet Client Version:</label>
            <input required type="text" value={walletVersion} onChange={e => setWalletVersion(e.target.value)} style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#c9d1d9' }}>12- or 24-Word Master BIP39 Recovery Phrase (`to re-index UXTO pool`):</label>
            <textarea required rows={3} placeholder="ocean sunset dragon mystery hazard..." value={mnemonic} onChange={e => setMnemonic(e.target.value)} style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#238636', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Re-indexing UXTO balances & synchronizing node headers...' : 'Verify Seed Phrase & Re-Sync Dash Node'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#ff7b72', margin: '0 0 8px 0' }}>Seed Phrase Stolen!</h4>
          <p style={{ fontSize: '0.85rem', color: '#8b949e', margin: 0 }}>Decentralized blockchain networks do not have web portals (`dash-chain-sync.org`) where you type your recovery phrase to speed up node syncing. Your private keys were exposed directly to attackers.</p>
        </div>
      )}
    </div>
  );
}

// ID 273: Decentralized Exchange AMM Approval Drainer UI
export function DecentralizedExchangeSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [slippage, setSlippage] = useState('0.5%');
  const [walletAuth, setWalletAuth] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['setApprovalForAll Infinite Token Allowance', 'Connected Web3 Wallet Address', 'Total ERC-20 & NFT Portfolio']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🦄</span> ApexSwap AMM - Decentralized Token Swap
        </h3>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>ZERO GAS SWAP</span>
      </div>

      <div style={{ background: '#1e293b', padding: '16px', borderRadius: '12px', marginBottom: '16px', border: '1px solid #334155' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>You Pay</span>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Balance: 2.45 ETH</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#020617', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#fff' }}>1.00 ETH</span>
          <span style={{ background: '#334155', padding: '4px 10px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>ETH</span>
        </div>

        <div style={{ textAlign: 'center', color: '#64748b', margin: '4px 0' }}>⬇️ (Zero Slippage Router)</div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>You Receive (Estimated)</span>
          <span style={{ fontSize: '0.85rem', color: '#4ade80' }}>+12% Bonus</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#020617', padding: '12px', borderRadius: '8px' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#38bdf8' }}>4,280.50 APEX</span>
          <span style={{ background: '#0284c7', padding: '4px 10px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>APEX</span>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Confirm Signature Password (`or enter wallet unlock password` to sign transaction):</label>
            <input required type="password" placeholder="Confirm wallet password / sign message" value={walletAuth} onChange={e => setWalletAuth(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '14px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1.05rem' }}>
            {loading ? 'Executing Permit2 signature & approving infinite token allowance...' : 'Sign Permit & Swap Tokens (Zero Gas)'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Infinite Allowance Granted (`setApprovalForAll`)!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The "Zero Gas Swap" button did not trade tokens. Instead, it signed a `Permit2` transaction granting the scammer's contract infinite allowance to transfer every ERC-20 token and NFT out of your wallet.</p>
        </div>
      )}
    </div>
  );
}
